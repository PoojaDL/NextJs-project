import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetUp(props) {
  // const data = {
  //   id: "m2",
  //   title: "MeetUp 2",
  //   image: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  //   address: "Some random address 2",
  //   description: "Some details about meetup-2",
  // };
  return (
    <Fragment>
      <MeetupDetail data={props.meetupData} />
    </Fragment>
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
  const meetUpId = context.params.meetupId;

  console.log(meetUpId);

  return {
    props: {
      meetupData: {
        id: "m2",
        title: "MeetUp 2",
        image:
          "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
        address: "Some random address 2",
        description: "Some details about meetup-2",
      },
    },
  };
}
