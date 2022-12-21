import Head from "next/head";
import { Fragment } from "react";
import NewMeetup from "../../components/NewMeetupForm";
import Layout from "../../components/Layout";
const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Add Meetup</title>
        <meta
          name="description"
          content="Add your own meetup and create amazing network"
        ></meta>
      </Head>
      <NewMeetup />
    </Fragment>
  );
};

export default index;
