import Link from "next/link";
import Head from "next/head";

import { NewsAndEvents } from "../../lib/NewsAndEvents";

import styled from "styled-components";
// import ReactPlayer from "react-player/youtube";
import { CommonStyling } from "../../lib/CommonStyling";
import { HomeData } from "../../lib/HomeData";
import formatDate from "@/utils/dateFormatter";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/news-and-events`,
  );
  const news_events = await res.json();

  return {
    paths: news_events.map((event) => ({ params: { slug: event.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/news-and-events`,
  );
  const news_events = await res.json();

  return {
    props: {
      event: news_events.find((event) => event.slug === params.slug),
    },
    revalidate: 60 * 60 * 24 * 10,
  };
}

const NewsEventsInvidivual = ({ event }) => {
  function renderNameWithLinks(text) {
    const splits = text.split("_");
    console.log(splits);

    const appName = splits[0];
    const appLink = splits[1];
    const appProposal = splits[2];

    return (
      <>
        <span className="app-name">{appName}</span>
        {appLink ? ": " : null}
        {appLink ? (
          <>
            <Link className="app-link" href={appLink}>
              {appLink}
            </Link>
          </>
        ) : null}
        {appProposal ? (
          <span className="app-proposal">
            <br />
            {appProposal}
          </span>
        ) : null}
        <br />
      </>
    );
  }
  // handle app names with links
  const [appNames, setAppNames] = useState([]);
  useEffect(() => {
    const appNameArtcile = event.acf.section3_article;
    const detectUrls = appNameArtcile.split("<br />\r\n").map((line, key) => {
      if (line.includes("_")) {
        return (
          <span className="app-section" key={key}>
            {renderNameWithLinks(line)}
          </span>
        );
      } else {
        return (
          <span key={key} className="app-section">
            {line}
            <br />
          </span>
        );
      }
    });
    setAppNames(() => detectUrls);
  }, []);

  return (
    <SingleEventPageContainer>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>
      <Link href={`/news-and-events/`}>
        <span className="events-title">
          {NewsAndEvents.singleEventPage.title}
        </span>
      </Link>
      <EventDetails>
        {event.acf.section1_title !== "" ? (
          <h1 className="section-title">{event.acf.section1_title}</h1>
        ) : null}
        <div>
          {event.acf.section1_link_title == "Video Link" ? (
            <Video>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url={event.acf.section1_link}
              />
            </Video>
          ) : (
            <Image
              src={event.acf.article_image}
              alt={`${event.title.rendered} Banner`}
              width={1200}
              height={600}
            />
          )}
        </div>
        <article>
          {event.acf.section1_article !== "" ? (
            <p
              className="article-para"
              dangerouslySetInnerHTML={{
                __html: event.acf.section1_article,
              }}
            ></p>
          ) : null}
        </article>
        <article>
          {event.acf.section2_title !== "" ? (
            <h3 className="article-title">{event.acf.section2_title}</h3>
          ) : null}
          {event.acf.section2_article !== "" ? (
            <p
              className="article-para"
              dangerouslySetInnerHTML={{
                __html: event.acf.section2_article,
              }}
            ></p>
          ) : null}
        </article>
        <article>
          {event.acf.section3_title !== "" ? (
            <h3 className="article-title">{event.acf.section3_title}</h3>
          ) : null}
          {event.acf.section3_article !== "" ? (
            <p className="article-para">{appNames}</p>
          ) : null}
        </article>
        <article>
          {event.acf.section4_title !== "" ? (
            <h3 className="article-title">{event.acf.section4_title}</h3>
          ) : null}
          {event.acf.section4_article !== "" ? (
            <p
              className="article-para"
              dangerouslySetInnerHTML={{
                __html: event.acf.section4_article,
              }}
            ></p>
          ) : null}
        </article>
        <article>
          {event.acf.section4_title !== "" ? (
            <h3 className="article-title">{event.acf.section5_title}</h3>
          ) : null}
          {event.acf.section5_article !== "" ? (
            <p
              className="article-para"
              dangerouslySetInnerHTML={{
                __html: event.acf.section5_article,
              }}
            ></p>
          ) : null}
        </article>
        <article>
          {!!event.acf.event_link_title && event.acf.event_link_title !== "" ? (
            <h3 className="article-title">{event.acf.event_link_title}</h3>
          ) : null}
          {!!event.acf.event_link && event.acf.event_link !== "" ? (
            <p className="article-para">
            <Link className="app-link" href={event.acf.event_link}>
              {event.acf.event_link}
            </Link>
          </p>
          ) : null}
        </article>
        <article>
          <h3 className="article-title">Event Details</h3>
          <div className="eventMeta">
            <div>
              <p className="date-label article-para ">Date: </p>
              <p className="event-date article-para">
                {formatDate(event.acf.event_date)}
              </p>
            </div>
            <div>
              <p className="time-label article-para">Time: </p>
              <p className="event-time article-para">
                {event.acf.event_start_time} - {event.acf.event_end_time}
              </p>
            </div>
            <div>
              <p className="location-label article-para">Location: </p>
              <p className="event-location article-para">
                {event.acf.event_location}
              </p>
            </div>
          </div>
        </article>
      </EventDetails>
    </SingleEventPageContainer>
  );
};

const SingleEventPageContainer = styled.div`
  background-color: #ffffff;
  text-align: left;
  padding: 4.2vh 5.4vw;
  color: #263238;

  .events-title {
    font-family: ${CommonStyling.secondaryFontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #37474f;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    padding: 9.3vh 25vw;
  }
`;

const EventDetails = styled.section`
  article {
    margin-top: 3rem;
  }

  .section-title {
    font-weight: 700;
    font-size: 38px;
    line-height: 50px;
    margin: 0;
    padding-top: 1vh;
    padding-bottom: 5.6vh;
  }

  .article-para {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }

  .article-link {
    color: #f15a22;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
  }

  .app-section {
    margin-top: 0.5rem;
    display: block;
  }

  .app-name {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  .app-link {
    color: #f15a22;
    cursor: disabled;
  }

  .app-link:hover {
    text-decoration: underline;
  }

  .article-title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  }

  .eventMeta > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Video = styled.div`
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default NewsEventsInvidivual;
