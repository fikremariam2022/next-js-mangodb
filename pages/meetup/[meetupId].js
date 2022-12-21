import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { MEETUPS_DUMMY } from "../../data";
import { useRouter } from "next/router";
import MeetupDetail from "../../components/MeetupDetail";

function DetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.content}></meta>
      </Head>
      <MeetupDetail meetup={props.meetup} />
    </Fragment>
  );
}
export default DetailPage;
export async function getServerSideProps(context) {
  const meetupId = context.params.meetupId;
  const connectioString =
    "mongodb+srv://fikremariam:f%40mongodb807@cluster0.ntqn95a.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(connectioString);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  //console.log("before", meetup);
  return {
    props: { meetup: JSON.parse(JSON.stringify(meetup)) },
  };
}
/********BELOW IS A STATIC OPTION BUT FOR EACH ID IT MAY BE IMPRACTICAL TO GENERATE STATIC PAGE */
// export async function getStaticProps(context) {
//   const { meetupId } = context.params;
//   const connectioString =
//     "mongodb+srv://fikremariam:f%40mongodb807@cluster0.ntqn95a.mongodb.net/?retryWrites=true&w=majority";
//   const client = await MongoClient.connect(connectioString);
//   const db = client.db();
//   const meetupCollection = db.collection("meetups");
//   const meetup = await meetupCollection.findOne({
//     _id: new ObjectId(meetupId),
//   });
//   //console.log("before", meetup);
//   return {
//     props: { meetup: JSON.parse(JSON.stringify(meetup)) },
//   };
// }
// export async function getStaticPaths() {
//   const connectioString =
//     "mongodb+srv://fikremariam:f%40mongodb807@cluster0.ntqn95a.mongodb.net/?retryWrites=true&w=majority";
//   const client = await MongoClient.connect(connectioString);
//   const db = client.db();
//   const meetupCollection = db.collection("meetups");
//   const meetups = await meetupCollection.find().toArray();
//   client.close();
//   const data = meetups.map((meetup) => {
//     return { params: { meetupId: meetup._id.toString() } };
//   });
//   return {
//     paths: data,
//     fallback: false,
//   };
// }
