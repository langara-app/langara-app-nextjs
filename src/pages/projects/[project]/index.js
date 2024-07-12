import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";

import { ProjectData } from "../../../lib/ProjectData";

import { CommonStyling } from "../../../lib/CommonStyling";
import { HomeData } from "../../../lib/HomeData";

// import hook to check endpoint status
import useEndpointStatus from "@/components/Hooks/useEndpointStatus";

const Project = ({ project }) => {
  const ProjectCategoryData = ProjectData.ProjectCategoryData;

  const data = project[0];

  const isSiteLinkActive = useEndpointStatus(data?.acf?.project_site_link);
  const isProposalActive = useEndpointStatus(data?.acf?.project_proposal_file);

  if (isSiteLinkActive === null || isProposalActive === null) {
    return null;
  }

  return (
    <Container>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>
      <Link className="category-link" href="/projects">
        <div className="titleWrapper">
          {data.categories_slugs == "native-app" ? (
            <p className="singleTitle">{ProjectCategoryData[0].title}</p>
          ) : data.categories_slugs == "data-visualization" ? (
            <p className="singleTitle">{ProjectCategoryData[1].title}</p>
          ) : data.categories_slugs == "hybrid" ? (
            <p className="singleTitle">{ProjectCategoryData[2].title}</p>
          ) : null}
        </div>
      </Link>

      <h1 className="projectTitle">{data.acf.name_of_the_project}</h1>

      <div className="actionContainer">
        {data.acf.project_proposal_file && isProposalActive ? (
          <Link href={data.acf.project_proposal_file} target="_blank">
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
      {"project_member" in data && !!data.project_member.length && (
        <>
          <TeamMembers>
            <h2>{data.acf.team_name}&apos;s team members</h2>
            <ul>
              {data.project_member.map((memberName, idx) => {
                return <li key={idx}>{memberName}</li>;
              })}
            </ul>
          </TeamMembers>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 4.9vh 4.1vw 9.7vh 4.1vw;

  .category-link:hover {
    color: ${CommonStyling.primaryColor};
  }

  .projectTitle {
    line-height: 50px;
    font-weight: 700;
    font-size: ${CommonStyling.h1FontSize};
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
    padding-bottom: 2.9vh;
    display: flex;
    flex-direction: column;
    gap: 2.9vh;
    font-size: 1.25rem;
    width: 100%;
  }

  .actionContainer a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
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
const TeamMembers = styled.div`
  margin-top: 3rem;
  font-size: ${CommonStyling.body1FontSize};
  font-weight: 400;
  line-height: ${CommonStyling.body1LineHeight};

  h2 {
    font-weight: 700;
    font-size: ${CommonStyling.h2FontSize};
    line-height: ${CommonStyling.h2LineHeight};
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
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
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/projects?slug=${params.project}`,
  );

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const projects = await res.json();

  if (projects.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project: projects,
    },
    revalidate: 60 * 60 * 24,
  };
}
