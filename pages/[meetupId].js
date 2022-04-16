import Head from "next/Head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {
  const { meetupData } = props;

  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail
        text={meetupData.text}
        image={meetupData.image}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect("");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection
    .find(
      {},
      {
        _id: 1,
      }
    )
    .toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const client = await MongoClient.connect("");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupData = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log(meetupData);

  client.close();
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: meetupData.title,
        image: meetupData.image,
        address: meetupData.address,
        description: meetupData.description,
      },
    },
  };
}

export default MeetupDetailsPage;
