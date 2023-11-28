import React from "react";
import styled from "styled-components";
import Link from "next/link";
import useWindowWidth from "../../../components/Hooks/useWindowWidth";
import Head from "next/head";

import { ProjectData } from "../../../lib/ProjectData";

import { CommonStyling } from "../../../lib/CommonStyling";
import { HomeData } from "../../../lib/HomeData";

// import hook to check endpoint status
import useEndpointStatus from "@/components/Hooks/useEndpointStatus";

const Project = ({ project }) => {
  const ProjectCategoryData = ProjectData.ProjectCategoryData;

  const data = project[0];

  const width = useWindowWidth();

  const isSiteLinkActive = useEndpointStatus(data?.acf?.project_site_link);
  const isProposalActive = useEndpointStatus(data?.acf?.project_proposal_file);

  if (isSiteLinkActive === null || isProposalActive === null) {
    return null;
  }

  console.log(isProposalActive, data?.acf?.project_proposal_file);

  return (
    <Container>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>
      <Link href="/projects">
        <div className="titleWrapper">
          {data.categories_slugs == "native-app" ? (
            <p className="singleTitle">{ProjectCategoryData[0].title}</p>
          ) : data.categories_slugs == "data-visualization" ? (
            <p className="singleTitle">{ProjectCategoryData[1].title}</p>
          ) : data.categories_slugs == "hybrid" ? (
            <p className="singleTitle">{ProjectCategoryData[2].title}</p>
          ) : null}
          <h1 className="projectTitle">{data.acf.name_of_the_project}</h1>
        </div>
      </Link>

      <div className="actionContainer">
        {data.acf.project_proposal_file && isProposalActive ? (
          <Link href={data.acf.project_proposal_file}  target="_blank">
            <img src={ProjectData.ProjectDetails.downloadProposalIcon} />
            {ProjectData.ProjectDetails.downloadProposal}
          </Link>
        ) : null}

        {data.acf.project_site_link && isSiteLinkActive ? (
          <Link href={data.acf.project_site_link} target="_blank">
            <img src={ProjectData.ProjectDetails.seeLiveProjectIcon} />
            {ProjectData.ProjectDetails.seeLiveProject}
          </Link>
        ) : null}
      </div>

      <ImageContainer>
        <ImageElement src={data.acf.app_picture} width={1000} height={1000} />
      </ImageContainer>

      <ProjectContents>
        <p dangerouslySetInnerHTML={{ __html: data.acf.app_description }}></p>
      </ProjectContents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 4.9vh 4.1vw 9.7vh 4.1vw;

  .projectTitle {
    font-size: 2.375rem;
    text-align: left;
    margin: 0;
    padding-top: 1vh;
  }

  .singleTitle {
    margin: 0;
    font-family: ${CommonStyling.secondaryFontFamily};
    font-weight: 400;
    font-size: 0.875rem;
  }

  .actionContainer {
    padding-top: 4.9vh;
    display: flex;
    flex-direction: column;
    gap: 2.9vh;
    font-size: 1.25rem;
  }

  a {
    display: flex;
    gap: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 7.3vh 25.7vw 10.9vh 25.7vw;

    .actionContainer {
      flex-direction: row;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 2.9vh;

  @media only screen and (min-width: 768px) {
  }
`;

const ImageElement = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0;
`;

const ProjectContents = styled.div`
  background-color: white;
  padding-top: 3.9vh;

  p {
    font-size: ${CommonStyling.body1FontSize};
    font-weight: 400;
    line-height: ${CommonStyling.body1LineHeight};
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
  }
`;

export default Project;

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/projects?per_page=100`,
  );
  const projects = await res.json();

  return {
    paths: projects.map((project) => ({
      params: { category: project.categories_slugs[0], project: project.slug },
    })),
    // paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const slug = params.project;
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/projects?per_page=100`,
  );
  const projects = await res.json();

  return {
    props: {
      project: projects.filter((project) => project.slug === slug),
    },
    revalidate: 60 * 60 * 24 * 10,
  };
}
