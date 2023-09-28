import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUp() {
  const formSubmitted = (data) => {
    console.log(data);
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={formSubmitted} />
    </div>
  );
}
export default NewMeetUp;
