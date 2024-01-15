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
  console.log(`${process.env.BASE_URL}/wp-json/wp/v2/news-and-events`);

  const events = news_events
    .filter((news) => {
      return news.acf.event_date;
    })
    .map((news) => {
      return {
        id: news.id,
        slug: news.slug,
        name: news.title.rendered,
        event_date: news.acf.event_date,
        event_year: news.acf.event_date.split("/")[2],
        event_start_time: news.acf.event_start_time,
        event_end_time: news.acf.event_end_time,
        event_location: news.acf.event_location,
        description: news.acf.excerpt,
        galleryLink: null,
      };
    });

  // Get the current date and time
  const currentDateTime = new Date();

  // Separate events into past and current
  const pastEvents = [
    ...events,
  ].filter((event) => {
    const [day, month, year] = event.event_date.split("/");
    const eventDateTime = new Date(
      `${year}-${month}-${day} ${event.event_start_time}`,
    );
    return eventDateTime < currentDateTime;
  });

  const futureEvents = events.filter((event) => {
    const [day, month, year] = event.event_date.split("/");
    const eventDateTime = new Date(
      `${year}-${month}-${day} ${event.event_start_time}`,
    );
    return eventDateTime >= currentDateTime;
  });

  // Sort events based on date and time
  const sortByDateTime = (a, b) => {
    const [dayA, monthA, yearA] = a.event_date.split("/");
    const [dayB, monthB, yearB] = b.event_date.split("/");
    const dateA = new Date(`${yearA}-${monthA}-${dayA} ${a.event_start_time}`);
    const dateB = new Date(`${yearB}-${monthB}-${dayB} ${b.event_start_time}`);
    return dateA - dateB;
  };

  futureEvents.sort(sortByDateTime);
  pastEvents.sort(sortByDateTime).reverse();

  const pastEventsUniqueYears = [
    ...new Set(pastEvents.map((event) => event.event_year)),
  ];

  return {
    props: {
      currentEvents: futureEvents,
      allPastEvents: pastEvents,
      pastEventsUniqueYears,
    },
    revalidate: 60 * 60 * 24 * 10,
  };
}

const NewsEvents = ({
  currentEvents,
  allPastEvents,
  pastEventsUniqueYears,
}) => {
  const [pastEvents, setPastEvents] = React.useState(allPastEvents);

  function filterByYear(year) {
    if (year === "All") {
      setPastEvents(allPastEvents);
      return;
    } else {
      const filteredEvents = allPastEvents.filter(
        (event) => event.event_year === year,
      );
      setPastEvents(filteredEvents);
    }
  }

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
            {currentEvents.length > 0 && (
              <div className="event-card-wrapper">
                <NewsCarousel carouselData={currentEvents} />
              </div>
            )}
          </div>
          {/* No Upcoming Events */}
          {!currentEvents.length && (
            <div className="no-info">
              <p>No Upcoming Events</p>
            </div>
          )}
        </section>
        {/* past events */}
        <section className="events-wrapper">
          <div className="section-info">
            <div className="event-information past-events-title-container">
              <div>
                <h2>
                  <span>Past Events</span>
                </h2>

                {pastEvents.length > 0 && (
                  <div>
                    <FilterBy
                      outlineColor={CommonStyling.primaryColor}
                      filterByYear={(year) => {
                        filterByYear(year);
                      }}
                      years={pastEventsUniqueYears}
                    />
                  </div>
                )}
              </div>
            </div>

            {pastEvents.length > 0 && (
              <div className="event-card-wrapper">
                <PastEventCardList pastEvents={pastEvents} />
              </div>
            )}
          </div>
          {/* No Upcoming Events */}
          {!pastEvents.length && (
            <div className="no-info">
              <p>No Past Events</p>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
};

const Container = styled.div`
  background-color: ${CommonStyling.primaryColor};

  section {
    background-color: ${CommonStyling.backgroundColor};
  }

  section:nth-child(2) {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

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

  .no-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .no-info p {
    color: ${CommonStyling.contrastColor};
    font-size: ${CommonStyling.body1FontSize};
    line-height: ${CommonStyling.body1LineHeight};
    font-weight: 600;
    letter-spacing: 0.2px;
    text-align: center;
  }

  .event-card-wrapper.no-events {
    color: ${CommonStyling.backgroundColor};
    font-size: ${CommonStyling.body1FontSize};
    line-height: ${CommonStyling.body1LineHeight};
    font-weight: 600;
    letter-spacing: 0.2px;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: green;
  }

  .no-events > .no-events-messsaage {
    // flex: 1;
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

    // .project-information .filterWrapper button.select-btn {
    //   width: 100%;
    // }

    .past-events-title-container {
      margin: 0 auto;
    }

    .event-information .filterWrapper {
      align-self: center;
      width: 100%;
    }

    .project-information .filterWrapper button.select-btn {
      width: 100%;
    }

    .section-text .desc {
      max-width: 100%;
    }

    .past-events-title-container {
      width: 100%;
    }

    .past-events-title-container > div {
      display: unset !important;
      width: 100%;
    }

    .past-events-title-container > div > div {
      width: 100%;
      margin-top: 3rem;
      margin-bottom: -2rem;
    }

    .past-events-title-container h2 {
      text-align: center;
    }
    .past-events-title-container button {
      width: 100%;
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
      //margin: 0 auto;
      //background-color: purple;
    }

    .past-events-title-container > div {
      //flex: 1;
      //display: unset;
    }
  }
`;

export default NewsEvents;
