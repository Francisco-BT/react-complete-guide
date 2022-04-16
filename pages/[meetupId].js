import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {
  const { meetupData } = props;

  return (
    <>
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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  return {
    props: {
      meetupData: {
        id: meetupId,
        text: "A First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address 12345",
        description: "Some description",
      },
    },
  };
}

export default MeetupDetailsPage;
