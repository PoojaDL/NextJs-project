import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUp() {
  const router = useRouter();

  const formSubmitted = async (data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();
    console.log(resData);
    router.push("/");
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={formSubmitted} />
    </div>
  );
}
export default NewMeetUp;
