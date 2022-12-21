import { MongoClient } from "mongodb";
import MeetupList from "../components/MeetupList";
import { MEETUPS_DUMMY } from "../data";
import Head from "next/head";
import { Fragment } from "react";
function NewsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups!"
        ></meta>
      </Head>
      <MeetupList meetups={props.loadedMeetupData} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const connectioString =
    "mongodb+srv://fikremariam:f%40mongodb807@cluster0.ntqn95a.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(connectioString);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();

  client.close();
  //console.log(meetups);
  return {
    props: {
      loadedMeetupData: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          content: meetup.content,
          published: meetup.published,
          imgUrl: meetup.imgUrl,
        };
      }),
    },
    revalidate: 1,
  };
}
// export async function getStaticProps() {
//   //fetch data
//   return {
//     props: {
//       loadedMeetupData: MEETUPS_DUMMY,
//     },
//     revalidate: 200,
//   };
// }
// export async function getStaticPaths() {
//   return [{ props: { id: 1 } }, { props: { id: 2 } }];
// }

export default NewsPage;
