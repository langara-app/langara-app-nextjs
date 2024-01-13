import React from "react";
import Head from "next/head";
import styled from "styled-components";

import { ProjectData } from "../../lib/ProjectData";

import { CommonStyling } from "../../lib/CommonStyling";
import { HomeData } from "../../lib/HomeData";

// import components: carousel
import ProjectCarousel from "@/components/Project/ProjectCarousel";
import FilterBy from "@/components/ReusableElements/FilterBySelect";

// import assets
import mainBackgroundImage from "@/assets/projects/mainBackgroundImage.png";

const ProjectCategoryData = ProjectData.ProjectCategoryData;

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/projects?per_page=100`,
  );
  const projects = await res.json();
  let category1 = ProjectCategoryData[0].slug;
  let category2 = ProjectCategoryData[1].slug;
  let category3 = ProjectCategoryData[2].slug;

  const nativeApps = projects
    .filter((project) => project.categories_slugs[0] === category1)
    .map((allData) => {
      return {
        slug: allData.slug,
        picture: allData.acf.app_picture,
        name: allData.acf.name_of_the_project,
        description: allData.acf.app_short_description,
        academic_year: allData.acf.academic_year ?? allData.date.split("-")[0],
      };
    });

  const nativeAppsUniqueYears = [
    ...new Set(nativeApps.map((item) => item.academic_year)),
  ];

  const dataVisualization = projects
    .filter((project) => project.categories_slugs[0] === category2)
    .map((allData) => {
      return {
        slug: allData.slug,
        picture: allData.acf.app_picture,
        name: allData.acf.name_of_the_project,
        description: allData.acf.app_short_description,
        academic_year: allData.acf.academic_year ?? allData.date.split("-")[0],
      };
    });

  const dataVisualizationUniqueYears = [
    ...new Set(dataVisualization.map((item) => item.academic_year)),
  ];

  const hybridApps = projects
    .filter((project) => project.categories_slugs[0] === category3)
    .map((allData) => {
      return {
        slug: allData.slug,
        picture: allData.acf.app_picture,
        name: allData.acf.name_of_the_project,
        description: allData.acf.app_short_description,
        academic_year: allData.acf.academic_year ?? allData.date.split("-")[0],
      };
    });

  const hybridAppsUniqueYears = [
    ...new Set(hybridApps.map((item) => item.academic_year)),
  ];

  return {
    props: {
      nativeApps,
      nativeAppsUniqueYears,
      dataVisualization,
      dataVisualizationUniqueYears,
      hybridApps,
      hybridAppsUniqueYears,
      category1: category1,
      category2: category2,
      category3: category3,
    },
  };
}

const Projects = ({
  nativeApps,
  nativeAppsUniqueYears,
  dataVisualization,
  dataVisualizationUniqueYears,
  hybridApps,
  hybridAppsUniqueYears,
}) => {
  const [filteredNativeApps, setFilteredNativeApps] =
    React.useState(nativeApps);
  const [filteredDataVisualization, setFilteredDataVisualization] =
    React.useState(dataVisualization);
  const [filteredHybridApps, setFilteredHybridApps] =
    React.useState(hybridApps);

  function filterByYear(appType, year) {
    if (year === "All") {
      if (appType === "nativeApps") {
        setFilteredNativeApps(nativeApps);
      } else if (appType === "dataVisualization") {
        setFilteredDataVisualization(dataVisualization);
      } else if (appType === "hybridApps") {
        setFilteredHybridApps(hybridApps);
      }
      return;
    }

    // if year is not all
    if (appType === "nativeApps") {
      const filteredApps = nativeApps.filter(
        (app) => app.academic_year === year,
      );
      setFilteredNativeApps(filteredApps);
    } else if (appType === "dataVisualization") {
      const filteredApps = dataVisualization.filter(
        (app) => app.academic_year === year,
      );
      setFilteredDataVisualization(filteredApps);
    } else if (appType === "hybridApps") {
      const filteredApps = hybridApps.filter(
        (app) => app.academic_year === year,
      );
      setFilteredHybridApps(filteredApps);
    }
  }

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
              <div className="filterWrapper">
                <FilterBy
                  outlineColor={CommonStyling.shadeColor}
                  filterByYear={(year) => {
                    filterByYear("nativeApps", year);
                  }}
                  years={nativeAppsUniqueYears}
                />
              </div>
            </div>
            <div className="projects-card-wrapper">
              <div>
                <ProjectCarousel
                  carouselData={filteredNativeApps}
                  carouselIdx={0}
                  showCardOutline={false}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Third Term */}
        <section className="projects-wrapper">
          <div className="section-info">
            <div className="project-information">
              <div className="descWrapper">
                <h2 className="term4">
                  <span>{ProjectCategoryData[1].term}</span>
                </h2>
                <h1 className="title">{ProjectCategoryData[1].title}</h1>
                <p className="desc">{ProjectCategoryData[1].description}</p>
              </div>
              <div className="filterWrapper">
                <FilterBy
                  outlineColor={CommonStyling.primaryColor}
                  filterByYear={(year) => {
                    filterByYear("dataVisualization", year);
                  }}
                  years={dataVisualizationUniqueYears}
                />
              </div>
            </div>
            <div className="projects-card-wrapper">
              <div>
                <ProjectCarousel
                  carouselData={filteredDataVisualization}
                  carouselIdx={1}
                  showCardOutline={true}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Second Term */}
        <section className="projects-wrapper">
          <div className="section-info">
            <div className="project-information">
              <div className="descWrapper">
                <h2 className="term4">
                  <span>{ProjectCategoryData[2].term}</span>
                </h2>
                <h1 className="title">{ProjectCategoryData[2].title}</h1>
                <p className="desc">{ProjectCategoryData[2].description}</p>
              </div>
              <div className="filterWrapper">
                <FilterBy
                  outlineColor={CommonStyling.primaryColor}
                  filterByYear={(year) => {
                    filterByYear("hybridApps", year);
                  }}
                  years={hybridAppsUniqueYears}
                />
              </div>
            </div>
            <div className="projects-card-wrapper">
              <div>
                <ProjectCarousel
                  carouselData={filteredHybridApps}
                  carouselIdx={2}
                  showCardOutline={true}
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

const Container = styled.div`
  background-color: ${CommonStyling.primaryColor};

  .section-info {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .projects-wrapper.first-container {
    background: url(${({ mainBackgroundImage }) => mainBackgroundImage});
    background-size: cover;
    background-position: center;
    min-height: 90vh;
    // padding-bottom: 2rem;
  }
  .projects-wrapper {
    min-height: 100vh;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  }

  // ============> Carousel button Custom Styles

  .react-multi-carousel-list button {
    // background-color: ${CommonStyling.primaryColor} !important;
    background-color: rgba(241, 90, 34, 0.5);
  }

  .react-multi-carousel-list button:hover {
    // background-color: ${CommonStyling.primaryColor} !important;
    background-color: rgba(241, 90, 34);
  }

  // ============> Carousel button Custom Styles Ends

  section {
    background-color: ${CommonStyling.backgroundColor};
  }

  section:nth-child(2) {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
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
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .project-information .filterWrapper {
      align-self: end;
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
  @media only screen and (max-width: 600px) {
    .project-information .filterWrapper {
      align-self: center;
      width: 100%;
    }
    .project-information .filterWrapper button.select-btn {
      width: 100%;
    }
  }
`;

export default Projects;
