import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

export default function Home() {
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
      image:
        "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
      address: "Some random address 2",
      description: "Some details about meetup-2",
    },
  ];

  return (
    <Layout>
      <MeetupList meetups={DummyData} />
    </Layout>
  );
}
