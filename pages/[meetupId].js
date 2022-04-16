import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetailsPage() {
  return (
    <>
      <MeetupDetail
        text="A First Meetup"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg"
        address="Some address 12345"
        description="Some description"
      />
    </>
  );
}

export default MeetupDetailsPage;
