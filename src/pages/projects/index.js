import React from "react";
import Head from "next/head";
import styled from "styled-components";

import { ProjectData } from "../../lib/ProjectData";
import ProjectIntro from "../../components/Project/ProjectIntro";

import { CommonStyling } from "../../lib/CommonStyling";
import { HomeData } from "../../lib/HomeData";

// import components: carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProjectCarousel from "@/components/Project/ProjectCarousel"

// import assets
import mainBackgroundImage from "@/assets/projects/mainBackgroundImage.png";
import arrowLeft from "@/assets/projects/arrow_left.svg";
import arrowRight from "@/assets/projects/arrow_right.svg";

const ProjectCategoryData = ProjectData.ProjectCategoryData;

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/projects?per_page=100`,
  );
  const projects = await res.json();
  let category1 = ProjectCategoryData[0].slug;
  let category2 = ProjectCategoryData[1].slug;
  let category3 = ProjectCategoryData[2].slug;


  const projectLists = projects.filter((project) =>
    project.categories_slugs[0] === category1 || category2 || category3);

  // console.log(projectLists)
  console.log(category1)

  const nativeApps = projects.filter((project) =>
    project.categories_slugs[0] === category1)
    .map(allData => {
      return {
        slug: allData.slug,
        picture: allData.acf.app_picture,
        name: allData.acf.name_of_the_project,
        description: allData.acf.app_short_description,
      }
    })
  
  const dataVisualization = projects.filter((project) =>
    project.categories_slugs[0] === category2)
    .map(allData => {
      return {
        slug: allData.slug,
        picture: allData.acf.app_picture,
        name: allData.acf.name_of_the_project,
        description: allData.acf.app_short_description,
      }
    })
  
  const hybridApps = projects.filter((project) =>
    project.categories_slugs[0] === category3)
    .map(allData => {
      return {
        slug: allData.slug,
        picture: allData.acf.app_picture,
        name: allData.acf.name_of_the_project,
        description: allData.acf.app_short_description,
      }
    })

  return {
    props: {
      nativeApps,
      dataVisualization,
      hybridApps,
      projectLists: projectLists,
      category1: category1,
      category2: category2,
      category3: category3,
    },
  };
}

const Projects = ({ projectLists, nativeApps, dataVisualization, hybridApps }) => {
  return (
    <div>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>

      {/* Display Student Projects Cards */}
      <Container mainBackgroundImage={mainBackgroundImage}>
        <section className="projects-wrapper first-container">
          <div className="section-info">
            <div className="project-information">
              <div className="descWrapper">
                <h2 className="term4">
                  <span>{ProjectCategoryData[0].term}</span>
                </h2>
                <h1 className="title">{ProjectCategoryData[0].title}</h1>
                <p className="desc">{ProjectCategoryData[0].description}</p>
              </div>
              <div className="filterWrapper">button to filter the projects</div>
            </div>
            <div className="projects-card-wrapper">
              <div>
                <ProjectCarousel carouselData={nativeApps} />
              </div>
            </div>
          </div>

          {/* <div className="projects">
          {projectLists
            .filter(
              (p) => p.categories_slugs[0] === ProjectCategoryData[0].slug,
            )
            .map((project, index) => (
              <ProjectIntro {...project} key={index} />
            ))}
          </div> */}
        </section>
        <section className="projects-wrapper">
          <div className="project-information">
            <div className="descWrapper">
              <h2 className="term4">
                <span>{ProjectCategoryData[1].term}</span>
              </h2>
              <h1 className="title">{ProjectCategoryData[1].title}</h1>
              <p className="desc">{ProjectCategoryData[1].description}</p>
            </div>
            <div className="filterWrapper">button to filter the projects</div>
          </div>

          {/* <div className="projects-card-wrapper">
            <div>
              {projectLists
                .filter(
                  (p) => p.categories_slugs[0] === ProjectCategoryData[0].slug,
                )
                .map((project, index) => (
                  <ProjectIntro {...project} key={index} />
                ))}
            </div>

            <div className="meta">
              <button>Left</button>
              <button>Right</button>
            </div>
          </div> */}

          {/* <div className="projects">
          {projectLists
            .filter(
              (p) => p.categories_slugs[0] === ProjectCategoryData[0].slug,
            )
            .map((project, index) => (
              <ProjectIntro {...project} key={index} />
            ))}
          </div> */}
        </section>
        <section className="projects-wrapper">
          <div className="project-information">
            <div className="descWrapper">
              <h2 className="term4">
                <span>{ProjectCategoryData[2].term}</span>
              </h2>
              <h1 className="title">{ProjectCategoryData[2].title}</h1>
              <p className="desc">{ProjectCategoryData[2].description}</p>
            </div>
            <div className="filterWrapper">button to filter the projects</div>
          </div>

          <div className="projects-card-wrapper">multiple project cards</div>

          {/* <div className="projects">
          {projectLists
            .filter(
              (p) => p.categories_slugs[0] === ProjectCategoryData[0].slug,
            )
            .map((project, index) => (
              <ProjectIntro {...project} key={index} />
            ))}
          </div> */}
        </section>
      </Container>
      {/* 
      <Containerr>
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
      </Containerr> */}
    </div>
  );
};

const Container = styled.div`

  .section-info {
    
    // max-width: 1600px;
    // margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .projects-wrapper.first-container {
    background: url(${({ mainBackgroundImage }) => mainBackgroundImage});
    background-size: cover;
    background-position: center;
  }
  .projects-wrapper {
    min-height: 90vh;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    background-color: gray;
  }

  .project-information {
    padding-left: 3rem;
    padding-right: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .descWrapper {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .filterWrapper {
    align-self: flex-end;
  }

  .projects-card-wrapper {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .project-information h1 {
    font-size: ${CommonStyling.h1FontSize};
    line-height: ${CommonStyling.h1LineHeight};
    letter-spacing: 1px;
    font-weight: 600;
    color: ${CommonStyling.contrastColor};
  }

  .project-information h2 {
    font-size: ${CommonStyling.h2FontSize};
    line-height: ${CommonStyling.h2LineHeight};
    font-weight: 600;
    color: ${CommonStyling.primaryColor};
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  // the first one
  .first-container .project-information h1,
  .first-container .project-information p {
    color: ${CommonStyling.backgroundColor};
  }

  .first-container p {
    color: ${CommonStyling.backgroundColor};
  }

  .first-container h1 {
    font-weight: 600;
  }

  .first-container h2 span {
    background-color: white;
    border-radius: 1rem;
    padding: 0.8rem 1.2rem;
    display: inline-block;
  }

  // the first one ends

  .project-information p {
    font-size: ${CommonStyling.body1FontSize};
    line-height: ${CommonStyling.body1LineHeight} + 10;
    color: ${CommonStyling.contrastColor};
    letter-spacing: 0.2px;
  }

  .projects-card-wrapper p {
    color: ${CommonStyling.contrastColor};
  }

  @media only screen and (min-width: 1672px) {
    .project-information {
      max-width: 1600px;
      margin: 0 auto;
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 768px) {

    .project-information {
      display: unset;
      flex-direction: unset;
      justify-content: unset;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .descWrapper {
      max-width: unset;
    }

    .filterWrapper {
      align-self: unset;
    }

    .projects-card-wrapper {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

const Containerr = styled.div`
  padding: 0 4.1vw 9vh 4.1vw;
  background-color: grey;

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
