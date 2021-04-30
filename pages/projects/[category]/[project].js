import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ProjectButton from "../../../components/ReusableElements/ProjectButton";
import useWindowWidth from "../../../components/Hooks/useWindowWidth";

const Project = ({ project }) => {
  const data = project[0];

  const width = useWindowWidth();

  console.log(project);

  return (
    <Container>
      <ImageContainer>
        <ImageElement src={data.acf.app_picture} width={1000} height={1000} />
      </ImageContainer>
      <InfoContainer>
        <ProjectButton
          text={"See live project"}
          type={"single"}
          link={data.acf.project_site_link}
        />
        {data.acf.case_study !== "" || data.acf.project_proposal_file !== "" ? (
          <span>or</span>
        ) : null}

        {data.acf.project_proposal_file !== "" ? (
          <LinkStyled href={data.acf.project_proposal_file} target="_blank">
            download proposal
          </LinkStyled>
        ) : null}
      </InfoContainer>
      <ProjectContents>
        <h1>{data.acf.name_of_the_project}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.acf.app_description }}></p>
      </ProjectContents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #effdfb;
`;

const ImageContainer = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
    padding: 0 ${(466 / 1365) * 100}vw;
    margin-bottom: ${(33 / 1365) * 100}vw;
  }
`;

const ImageElement = styled(Image)`
  height: auto !important;
  min-height: auto !important;
`;

const InfoContainer = styled.div`
  padding: ${(55 / 375) * 100}vw 0;
  span {
    display: block;
    text-align: center;
    font-family: "Inter";
    margin-top: ${(22 / 375) * 100}vw;
  }

  @media only screen and (min-width: 768px) {
    padding: ${(50 / 1365) * 100}vw ${(466 / 1365) * 100}vw;
  }
  span {
    margin-top: ${(22 / 1365) * 100}vw;
  }
`;

const LinkStyled = styled.a`
  display: block;
  text-decoration: underline;
  text-align: center;
  margin-top: ${(22 / 375) * 100}vw;
  font-size: ${(24 / 375) * 100}vw;
  font-weight: 700;
  @media only screen and (min-width: 768px) {
    font-size: ${(24 / 1365) * 100}vw;
    margin-top: ${(22 / 1365) * 100}vw;
  }
`;

const ProjectContents = styled.div`
  background-color: white;
  padding: ${(35 / 375) * 100}vw;
  h1 {
    font-size: ${(45 / 375) * 100}vw;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: ${(14 / 375) * 100}vw;
    font-weight: 200;
  }

  @media only screen and (min-width: 768px) {
    padding: ${(50 / 1365) * 100}vw ${(370 / 1365) * 100}vw;
    h1 {
      font-size: ${(45 / 1365) * 100}vw;
    }

    p {
      font-size: ${(21 / 1365) * 100}vw;
    }
  }
`;

export default Project;

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=100"
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
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=100"
  );
  const projects = await res.json();

  return {
    props: {
      project: projects.filter((project) => project.slug === slug),
    },
    revalidate: 1,
  };
}
