import React from "react";
import Link from "next/link";
import Head from "next/head";
import { CommonStyling } from "../../lib/CommonStyling";

import { NewsAndEvents } from "../../lib/NewsAndEvents";

import styled from "styled-components";
import { HomeData } from "../../lib/HomeData";
import FilterBy from "@/components/ReusableElements/FilterBySelect";
//import ProjectCarousel from "@/components/Project/ProjectCarousel";
import NewsCarousel from "@/components/Project/NewsCarousel";
import PastEventCardList from "@/components/Project/PastEventCardList";

// import assets
import mainBackgroundImage from "@/assets/news-and-events/mainBackgroundImage.png";

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/news-and-events`,
  );
  const news_events = await res.json();

  let filteredInfo = news_events.map((news) => {
    return {
      id: news.id,
      slug: news.slug,
      name: news.title.rendered,
      date: news.event_date ?? "Wed, Dec 6, 2023",
      time: news.event_time ?? "4:30 - 8:30 pm",
      location: news.location ?? "T Building, Langara College, Vancouver, BC",
      description: news.acf.excerpt,
      galleryLink: null,
    };
  });

  // multiple cards in filteredInfo
  filteredInfo = Array(10).fill(filteredInfo[0]);



  // create past dummy data
  const pastNews = {
    id: 0,
    slug: "past-news",
    name: "Past News",
    date: "Wed, Dec 6, 2023",
    time: "4:30 - 8:30 pm",
    location: "T Building, Langara College, Vancouver, BC",
    description: "This is past news",
    galleryLink: null,
  };

  // create an array of past news
  const pastNewsArray = [];
  for (let i = 0; i < 10; i++) {
    pastNewsArray.push(pastNews);
  }

  console.log(pastNewsArray);

  return {
    props: { currentEvents: filteredInfo, pastEvents: pastNewsArray },
    revalidate: 60 * 60 * 24 * 10,
  };
}

const NewsEvents = ({ currentEvents, pastEvents }) => {

  return (
    <div>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>
      <Container mainBackgroundImage={mainBackgroundImage}>
        <section className="events-wrapper first-container">
          <div className="section-info">
            <div className="event-information">
              <div className="section-text">
                <h2>
                  <span>Upcoming</span>
                </h2>
                <h1 className="title">{NewsAndEvents.title}</h1>
                <p className="desc">{NewsAndEvents.description}</p>
              </div>
              <div className="filterWrapper">{/* <FilterBy /> */}</div>
            </div>
            <div className="event-card-wrapper">
              <NewsCarousel carouselData={currentEvents} />
            </div>
          </div>
        </section>
        {/* past events */}
        <section className="events-wrapper">
          <div className="section-info">
            <div className="event-information past-events-title-container">
              <div>
                <h2>
                  <span>Past Events</span>
                </h2>
                <div>
                  <FilterBy />
                </div>
              </div>
            </div>
            <div className="event-card-wrapper">
              <PastEventCardList pastEvents={pastEvents} />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

const Container = styled.div`
  .section-info {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .section-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .section-text .desc {
    max-width: 50%;
  }

  .events-wrapper.first-container {
    background: url(${({ mainBackgroundImage }) => mainBackgroundImage});
    background-size: cover;
    background-position: center;
    min-height: 90vh;
    padding-bottom: 2rem;
  }
  .events-wrapper {
    min-height: 100vh;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
  }

  div[role="combobox"] {
    padding: 0 !important;
    padding-right: 0.5rem !important;
  }

  .event-information {
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

  .event-card-wrapper {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .event-information h1 {
    font-size: ${CommonStyling.h1FontSize};
    line-height: ${CommonStyling.h1LineHeight};
    letter-spacing: 1px;
    font-weight: 600;
    color: ${CommonStyling.backgroundColor};
  }

  .event-information h2 {
    font-size: ${CommonStyling.h2FontSize};
    line-height: ${CommonStyling.h2LineHeight};
    font-weight: 600;
    color: ${CommonStyling.primaryColor};
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  // the first one
  .first-container .event-information h1,
  .first-container .event-information p {
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

  .event-information p {
    font-size: ${CommonStyling.body1FontSize};
    line-height: ${CommonStyling.body1LineHeight} + 10;
    color: ${CommonStyling.contrastColor};
    letter-spacing: 0.2px;
  }

  .event-card-wrapper p {
    color: ${CommonStyling.contrastColor};
  }

  @media only screen and (min-width: 1672px) {
    .event-information {
      max-width: 1600px;
      margin: 0 auto;
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .event-information {
      display: unset;
      flex-direction: unset;
      justify-content: unset;
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      flex-direction: column;
    }
    .event-information .filterWrapper {
      align-self: end;
    }
    .descWrapper {
      max-width: unset;
    }

    .filterWrapper {
      align-self: unset;
    }

    .event-card-wrapper {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .event-information .filterWrapper {
      align-self: center;
    }

    .section-text .desc {
      max-width: 100%;
    }
  }

  .past-events-title-container > div {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1080px) {
    .past-events-title-container {
      margin: 0 auto;
    }
    .past-events-title-container > div {
      flex: 1;
      display: unset;
    }
  }
`;

export default NewsEvents;
