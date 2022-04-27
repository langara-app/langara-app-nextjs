import Link from "next/link";
import Head from "next/head";

import { NewsAndEvents } from "../../lib/NewsAndEvents";

import styled from "styled-components";

import { CommonStyling } from '../../lib/CommonStyling'
import { HomeData } from "../../lib/HomeData";

export async function getStaticPaths() {
  const res = await fetch("https://api.langara-app.ca/wp-json/wp/v2/news-and-events")
  const news_events = await res.json();

  return {
    paths: news_events.map((event) => ({ params: { slug: event.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://api.langara-app.ca/wp-json/wp/v2/news-and-events")
  const news_events = await res.json();

  return {
    props: {
      event: news_events.find((event) => event.slug === params.slug),
    },
  };
}

const NewsEventsInvidivual = ({ event }) => {
  return (
    <SingleEventPageContainer>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>
      <Link href={`/news-and-events/`}>
        <a>
          <span className="events-title">
            {NewsAndEvents.singleEventPage.title}
          </span>
        </a>
      </Link>
      <EventDetails>
        {event.acf.section1_title !== "" ? (
          <h1 className="section-title">{event.acf.section1_title}</h1>
        ) : null}
        <Image
          src={event.acf.article_image}
          alt={`${event.title.rendered} Banner`}
          width={1200}
          height={600} />
        <article>
          {event.acf.section1_article !== "" ? (
            <p
              className="article-para"
              dangerouslySetInnerHTML={{
                __html: event.acf.section1_article,
              }}
            ></p>
          ) : null}
          {event.acf.section1_link !== "" ? (
            <a className="article-link" href={event.acf.section1_link}>
              {event.acf.section1_link_title}
            </a>
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
          {event.acf.section2_link !== "" ? (
            <a className="article2-link" href={event.acf.section2_link}>
              {event.acf.section1_link_title}
            </a>
          ) : null}
        </article>
        <article>
          {event.acf.section3_title !== "" ? (
            <h3 className="article-title">{event.acf.section3_title}</h3>
          ) : null}
          {event.acf.section3_article !== "" ? (
            <p
              className="article-para"
              dangerouslySetInnerHTML={{
                __html: event.acf.section3_article,
              }}
            ></p>
          ) : null}
          {event.acf.section3_link !== "" ? (
            <a className="article-link" href={event.acf.section3_link}>
              {event.acf.section3_link_title}
            </a>
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
          {event.acf.section4_link !== "" ? (
            <a className="article-link" href={event.acf.section4_link}>
              {event.acf.section4_link_title}
            </a>
          ) : null}
        </article>
      </EventDetails>
    </SingleEventPageContainer>
  )
};

const SingleEventPageContainer = styled.div`
  background-color: #ffffff;
  text-align: left;
  padding: 4.2vh 5.4vw;
  color: #263238;

  .events-title{
    font-family: ${CommonStyling.secondaryFontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #37474F;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    padding: 9.3vh 25vw;
  }
`;

const EventDetails = styled.section`

  .section-title{
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
  };

  .article-link{
    color: #DE3F21;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
  }

  .article-title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default NewsEventsInvidivual;