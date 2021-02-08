import React from "react";
import Head from "next/head";
import Layout from "../../component/layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post test </title>
      </Head>
      <div>First Post</div>
    </Layout>
  );
}

export default FirstPost;
