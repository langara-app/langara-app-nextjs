import React from "react";
import Head from "next/head";
import styled from "styled-components";

import { ProjectData } from "../../lib/ProjectData";
import ProjectIntro from "../../components/Project/ProjectIntro";

import { CommonStyling } from "../../lib/CommonStyling";
import { HomeData } from "../../lib/HomeData";

const ProjectCategoryData = ProjectData.ProjectCategoryData;

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/projects?per_page=100`,
  );
  const projects = await res.json();
  let category1 = ProjectCategoryData[0].slug;
  let category2 = ProjectCategoryData[1].slug;
  let category3 = ProjectCategoryData[2].slug;

  return {
    props: {
      projectLists: projects.filter(
        (project) =>
          project.categories_slugs[0] === category1 || category2 || category3,
      ),
      category1: category1,
      category2: category2,
      category3: category3,
    },
  };
}

const Projects = ({ projectLists }) => {
  return (
    <div>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>

      <Container>
        <div className="descWrapper">
          <p className="term4">{ProjectCategoryData[0].term}</p>
          <h1 className="title">{ProjectCategoryData[0].title}</h1>
          <p className="desc">{ProjectCategoryData[0].description}</p>
        </div>

        <div className="projects">
          {projectLists
            .filter(
              (p) => p.categories_slugs[0] === ProjectCategoryData[0].slug,
            )
            .map((project, index) => (
              <ProjectIntro {...project} key={index} />
            ))}
        </div>

        <div className="descWrapper">
          <p className="term3">{ProjectCategoryData[1].term}</p>
          <h1 className="title">{ProjectCategoryData[1].title}</h1>
          <p className="desc">{ProjectCategoryData[1].description}</p>
        </div>

        <div className="projects">
          {projectLists
            .filter(
              (p) => p.categories_slugs[0] === ProjectCategoryData[1].slug,
            )
            .map((project, index) => (
              <ProjectIntro {...project} key={index} />
            ))}
        </div>

        <div className="descWrapper">
          <p className="term2">{ProjectCategoryData[2].term}</p>
          <h1 className="title">{ProjectCategoryData[2].title}</h1>
          <p className="desc">{ProjectCategoryData[2].description}</p>
        </div>

        <div className="projects">
          {projectLists
            .filter(
              (p) => p.categories_slugs[0] === ProjectCategoryData[2].slug,
            )
            .map((project, index) => (
              <ProjectIntro {...project} key={index} />
            ))}
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 0 4.1vw 9vh 4.1vw;
  background-color: #f3fbff;

  .term4 {
    padding-top: 9.5vh;
    font-family: ${CommonStyling.secondaryFontFamily};
    margin: 0;
    color: rgba(55, 71, 79, 1);

    font-size: ${CommonStyling.body2FontSize} !important;
    line-height: ${CommonStyling.body2LineHeight};
  }

  .term3,
  .term2 {
    color: rgba(55, 71, 79, 1);
    padding-top: 10vh;
    font-family: ${CommonStyling.secondaryFontFamily};
    font-size: ${CommonStyling.body2FontSize} !important;
    line-height: ${CommonStyling.body2LineHeight};
  }

  .title {
    font-size: ${CommonStyling.h1FontSize} !important;
    line-height: ${CommonStyling.h1LineHeight};
    margin: 0;
    padding-top: 1vh;
  }

  .desc {
    line-height: ${CommonStyling.body1LineHeight};
    font-weight: 400;
    margin: 0;
    padding-top: 2.7vh;
    padding-bottom: 3.5vh;
    font-size: ${CommonStyling.body1FontSize};
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 0.97rem;
  }

  @media only screen and (min-width: 768px) {
    .title:nth-child(2) {
      width: 50%;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 0 13.3vw 9.8vh 13.4vw;

    .term4 {
      padding-top: 9.3vh;
      font-family: ${CommonStyling.secondaryFontFamily};
      margin: 0;
    }

    .term3,
    .term2 {
      margin: 0;
      padding-top: 10vh;
    }

    .desc {
      width: 50%;
      padding-top: 2vh;
      padding-bottom: 5.5vh;
    }

    .projects {
      flex-direction: row;
      flex-wrap: wrap;

      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
      }
    }
  }
`;

export default Projects;
