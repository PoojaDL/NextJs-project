import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { MongoClient } from "mongodb";
const DummyData = [
  {
    id: "m1",
    title: "MeetUp 1",
    image:
      "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_1280.jpg",
    address: "Some random address 1",
    description: "Some details about meetup-1",
  },
  {
    id: "m2",
    title: "MeetUp 2",
    image: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
    address: "Some random address 2",
    description: "Some details about meetup-2",
  },
];

function Home(props) {
  return (
    // <Layout>
    <MeetupList meetups={props.meetups} />
    // {/* </Layout> */}
  );
}

export default Home;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Poojadl02:Poojadl02@cluster0.e1kn1kh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupList = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetupList.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
  };
}
