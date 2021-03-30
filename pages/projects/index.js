import React from "react";
import Link from "next/link";
import Head from "next/head";

import { ProjectCategoryData } from "../../lib/ProjectCategoryData";

import ProjectCategory from "../../components/Project/ProjectCategory";

// export async function getStaticProps() {
//     // fetch post data from an external API endpoint
//     const res = await fetch(
//       "https://api.langara-app.ca/wp-json/wp/v2/news-and-events"
//     );

//     const news_events = await res.json();

//     return { props: { news_events} };
//   }

const Projects = () => {
  return (
    <>
      <Head>
        <title>Project Index Page </title>
      </Head>
      {ProjectCategoryData.map((data, index) => (
        <ProjectCategory key={index} id={index} {...data} />
      ))}
    </>
  );
};

export default Projects;
