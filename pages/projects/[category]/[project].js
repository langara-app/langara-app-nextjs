import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ProjectButton from "../../../components/ReusableElements/ProjectButton";
import useWindowWidth from "../../../components/Hooks/useWindowWidth";

const Project = ({ project }) => {
  const data = project[0];

  const width = useWindowWidth();

  return (
    <Container>

      <div className="titleWrapper">
        {data.categories_slugs == 'native-app' ? (
          <p className="singleTitle">Native Mobile Apps</p>
        ) : data.categories_slugs == 'data-visualization' ? (
          <p className="singleTitle">Full Stack Web Applications with Data Visualization</p>
        ) : data.categories_slugs == 'hybrid' ? (
          <p className="singleTitle">Hybrid Mobile Apps</p>
        ) : (null)}
        <h1 className="projectTitle">{data.acf.name_of_the_project}</h1>
      </div>

      <div className="actionContainer">
        <Link className="proposal" href={data.acf.project_proposal_file}>Download Proposal</Link>
        <Link className="liveProject" href={data.acf.project_site_link}>See live project</Link>
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
  background-color: #FFFFFF;
  padding: 4.9vh 4.1vw 9.7vh 4.1vw;


  .projectTitle{
    font-size: 2.375rem;
    text-align: left;
    margin: 0;
    padding-top: 1vh;
  }

  .singleTitle{
    margin: 0;
    font-family: 'Ubuntu Mono';
    font-weight: 400;
    font-size: 0.875rem;
  }

  .actionContainer{
    padding-top: 4.9vh;
    display: flex;
    flex-direction: column;
  }

  a:first-child{
    font-size:1.25rem;
    
    background-position: left center;
    background-repeat: no-repeat;
    padding-left: 20px; 
  }


  a:last-child{
    font-size:1.25rem;
    padding-top: 2.9vh;

    background-position: left center;
    background-repeat: no-repeat;
    padding-left: 20px; 
  }

  @media only screen and (min-width: 768px) {
    padding: 7.3vh 25.7vw 10.9vh 25.7vw;

    .actionContainer{
      flex-direction: row;
    }

    a:last-child{
      padding: 0 0 0 40px;
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
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    
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
