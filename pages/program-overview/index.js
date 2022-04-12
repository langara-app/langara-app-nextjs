import React from "react";
import Head from "next/head";
import { WmddData } from '../../lib/WmddData';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>{WmddData.header.title}</title>
      </Head>
    </>
  );
};

export default AboutUs;
