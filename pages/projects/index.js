import React from "react";
import Link from "next/link";
import Head from "next/head";

function Post() {
  return (
    <>
      <Head>
        <title>Post Index Page </title>
      </Head>
      <h1>First Post</h1>
      <h1>
        Test link
        <Link href="/">
          <a>click here to go home</a>
        </Link>
      </h1>
    </>
  );
}

export default Post;
