import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    text: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 12345",
    description: "Some description",
  },
  {
    id: "m2",
    text: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 12345",
    description: "Some description",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export default HomePage;

export async function getStaticProps() {
  const client = await MongoClient.connect("");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
  };
}
