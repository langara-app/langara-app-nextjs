import React from "react";
import Head from "next/head";
import styled from "styled-components";

import { ProjectData } from "../../lib/ProjectData";
import ProjectIntro from "../../components/Project/ProjectIntro";

const ProjectCategoryData = ProjectData.ProjectCategoryData;

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=100"
  );
  const projects = await res.json();
  let category1 = ProjectCategoryData[0].slug
  let category2 = ProjectCategoryData[1].slug
  let category3 = ProjectCategoryData[2].slug

  return {
    props: {
      projectLists: projects.filter(
        (project) => project.categories_slugs[0] === category1 || category2 || category3
      ),
      category1: category1,
      category2: category2,
      category3: category3
    }
  };
}

const Projects = ({ projectLists }) => {

  return (
    <div>
      <Head>
        <title>Project Index Page </title>
      </Head>

      <Container>
        <div className="descWrapper">
          <p className="term4">{ProjectCategoryData[0].term}</p>
          <h2 className="title">{ProjectCategoryData[0].title}</h2>
          <p className="desc">{ProjectCategoryData[0].description}</p>
        </div>

        <div className="projects">
          {projectLists.filter(p => p.categories_slugs[0] === ProjectCategoryData[0].slug).map((project, index) => (
            <ProjectIntro {...project} key={index} />
          ))}
        </div>

        <div className="descWrapper">
          <p className="term3">{ProjectCategoryData[1].term}</p>
          <h2 className="title">{ProjectCategoryData[1].title}</h2>
          <p className="desc">{ProjectCategoryData[1].description}</p>
        </div>

        <div className="projects">
          {projectLists.filter(p => p.categories_slugs[0] === ProjectCategoryData[1].slug).map((project, index) => (
            <ProjectIntro {...project} key={index} />
          ))}
        </div>

        <div className="descWrapper">
          <p className="term2">{ProjectCategoryData[2].term}</p>
          <h2 className="title">{ProjectCategoryData[2].title}</h2>
          <p className="desc">{ProjectCategoryData[2].description}</p>
        </div>

        <div className="projects">
          {projectLists.filter(p => p.categories_slugs[0] === ProjectCategoryData[2].slug).map((project, index) => (
            <ProjectIntro {...project} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 0 4.1vw 9vh 4.1vw;
  background-color: #F3FBFF;

  .term4{
    padding-top: 4.6vh;
    font-family: Ubuntu Mono;
    margin: 0;
    font-size: 0.875rem;
  }

  .term3, .term2{
    padding-top: 10vh;
  }

  .title{
    font-size: 2.375rem;
    margin: 0;
    padding-top: 1vh;
  }

  .desc{
    line-height: 1.875rem;
    font-weight: 400;
    margin: 0;
    padding-top: 2.7vh;
    padding-bottom: 3.5vh;
  }

  .projects{
      display: flex;
      flex-direction: column;
      gap: 0.97rem;
    }

  @media only screen and (min-width: 768px){
    padding: 0 13.3vw 9.8vh 13.4vw;

    .term4{
    padding-top: 9.8vh;
    font-family: Ubuntu Mono;
    margin: 0;
    font-size: 0.875rem;
    }

    .term3, .term2{
      margin: 0;
      padding-top: 6.6vh;
    }

    .desc{
      width: 35.7vw;
      font-size: 1.25rem;
      padding-top: 2vh;
    }

    .projects{
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

`

export default Projects;