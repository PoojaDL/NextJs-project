import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

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
  const client = await MongoClient.connect(
    "mongodb+srv://Poojadl02:Poojadl02@cluster0.e1kn1kh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupList = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetupList.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetUpId = context.params.meetupId;
  console.log(meetUpId);

  const client = await MongoClient.connect(
    "mongodb+srv://Poojadl02:Poojadl02@cluster0.e1kn1kh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedItem = await meetupsCollection.findOne({
    _id: new ObjectId(meetUpId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedItem._id.toString(),
        title: selectedItem.title,
        image: selectedItem.image,
        address: selectedItem.address,
        description: selectedItem.description,
      },
    },
  };
}
