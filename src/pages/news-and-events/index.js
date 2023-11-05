import React from "react";
import Link from "next/link";
import Head from "next/head";
import { CommonStyling } from "../../lib/CommonStyling";

import { NewsAndEvents } from "../../lib/NewsAndEvents";

import styled from "styled-components";
import { HomeData } from "../../lib/HomeData";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/news-and-events"
  );

  const news_events = await res.json();

  return { props: { news_events } };
}

const NewsEvents = ({ news_events }) => {
  return (
    <PageContainer>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>
      <PageHeader>
        <h1>
          {NewsAndEvents.title}
        </h1>
        <p>
          {NewsAndEvents.description}
        </p>
      </PageHeader>
      <Posts>
        {news_events.map((news) => (
          <Post key={news.id}>
            <Link href={`/news-and-events/${news.slug}`}>
                <Image
                  src={news.acf.article_image}
                  alt={`${news.title.rendered} Banner`}
                />
            </Link>
            <PostDetails>
              <h2 className="title">{news.title.rendered}</h2>
              <p className="excerpt">
                {news.acf.excerpt}
              </p>
              <span className="date">
                {new Date(news.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </PostDetails>
          </Post>
        ))}
      </Posts>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 9.8vh 5.4vw;
  color: #263238;
  background-color: #f3fbff;

  @media only screen and (min-width: 768px) {
    padding: 9.1vh 13.5vw;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  padding-bottom: 5rem;
  h1{
    margin: 0;
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    color: #263238;
    padding-bottom: 2vh;
  }

  p{
    margin: 0;
    font-size: ${CommonStyling.body1FontSize};
  line-height: 30px;
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-areas: '1fr 1fr';
  }
`;

const Post = styled.div`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #B0BEC5;
  box-sizing: border-box;
  border-radius: 4px;
  min-height: fit-content;
  `;

const PostDetails = styled.div`
  padding: 2rem;

  .title{
    margin: 0;
    padding-bottom: 0.5rem;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  .excerpt{
    margin: 0;
    padding-bottom: 1.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .date{
    font-family: ${CommonStyling.secondaryFontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  `;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export default NewsEvents;
