import React from "react";
import Link from "next/link";
import Head from "next/head";
import { CommonStyling } from "../../lib/CommonStyling";

import { Articles } from "../../lib/Articles";

import styled from "styled-components";
import { HomeData } from "../../lib/HomeData";
import FilterBy from "@/components/ReusableElements/FilterBySelect";
import NewsCarousel from "@/components/Project/NewsCarousel";
import PastEventCardList from "@/components/News/RecentArticlesCard";
import ArticleSubmissionCard from "@/components/News/ArticleSubmissionCard";

// import assets
import mainBackgroundImage from "@/assets/news-and-events/mainBackgroundImage.png";
import FeaturedArticlesCard from "@/components/News/FeaturedArticlesCard";
import YoutubeVideosCard from "@/components/News/YoutubeVideosCard";

export async function getStaticProps() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  let videos = Articles.youtubeData;

  if (process.env.NODE_ENV === "production") {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=3`;

    const response = await fetch(url);

    // if response not ok or quota exceeded then use the static data
    if (!response.ok) {
      console.error("Failed to fetch youtube videos");
    } else if (response.status === 403) {
      console.error("Quota exceeded");
    } else {
      console.log("fetched youtube videos");
      const youtubeResponse = await response.json();
      videos = youtubeResponse.items;
    }
  }

  const cats = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/categories?per_page=100&hide_empty=false`,
  ).then((result) => result.json());

  // blog categories has id 68, get it's children now, in {} id key and value name format
  const blogSubCategories = cats
    .filter((cat) => cat.parent === 68)
    .reduce((acc, cat) => {
      acc[cat.id] = cat.name;
      return acc;
    }, {});

  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/blogs?per_page=100&hide_empty=false`,
  );
  const resData = await res.json();

  const articles = resData.map((article) => {
    return {
      id: article.id,
      slug: article.slug,
      article_title: article.title.rendered,
      description: article.acf.excerpt,
      article_date: article.acf.publish_date,
      article_feature_image: article.acf.blog_feature_image,
      article_author: article.acf.author_name,
      article_author_designation: article.acf.author_designation,
      article_category: blogSubCategories[String(article.categories[0])],
      isFeatured: article.tags.includes(65), // featured tag id is 65
    };
  });

  // Function to convert date strings to Date objects
  function parseDate(dateString) {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  }
  // Sorting the array by article_date
  articles.sort(
    (a, b) => parseDate(a.article_date) - parseDate(b.article_date),
  );

  const featuredArticles = articles.filter((article) => article.isFeatured);
  const nonFeaturedArticles = articles.filter((article) => !article.isFeatured);

  const categoriesNames = Object.values(blogSubCategories);
  return {
    props: {
      featuredBlogArticles: featuredArticles,
      recentBlogArticles: nonFeaturedArticles,
      categoriesNames,
      videos,
    },
    revalidate: 60 * 60 * 24,
  };
}

const NewsEvents = ({
  featuredBlogArticles,
  recentBlogArticles,
  categoriesNames,
  videos,
}) => {
  const [recentArticles, setRecentArticles] =
    React.useState(recentBlogArticles);

  function filterByCategory(category) {
    if (category === "All") {
      setRecentArticles(recentBlogArticles);
      return;
    } else {
      const filteredArticles = recentBlogArticles.filter(
        (article) => article.article_category === category,
      );
      setRecentArticles(filteredArticles);
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
                  <span>Featured</span>
                </h2>
                <h1 className="title">{Articles.title}</h1>
                <p className="desc">{Articles.description}</p>
              </div>
              <div className="filterWrapper">{/* <FilterBy /> */}</div>
            </div>
            {featuredBlogArticles.length > 0 && (
              <div className="event-card-wrapper featured-wrapper">
                <FeaturedArticlesCard featuredArticles={featuredBlogArticles} />
              </div>
            )}
          </div>
          {/* No Upcoming Events */}
          {!featuredBlogArticles.length && (
            <div className="no-info">
              <p>No Featured Articles</p>
            </div>
          )}
        </section>
        {/* past events */}
        <section className="events-wrapper">
          <div className="section-info">
            <div className="event-information past-events-title-container">
              <div>
                <h2>
                  <span>Recent Articles</span>
                </h2>

                {recentBlogArticles.length > 0 && (
                  <div>
                    <FilterBy
                      filterByText="Filter by Category"
                      outlineColor={CommonStyling.primaryColor}
                      filterByYear={(year) => {
                        filterByCategory(year);
                      }}
                      years={categoriesNames}
                    />
                  </div>
                )}
              </div>
            </div>

            {recentArticles.length > 0 && (
              <div className="event-card-wrapper">
                <PastEventCardList recentArticles={recentArticles} />
              </div>
            )}
          </div>
          {/* No Upcoming Events */}
          {!recentArticles.length && (
            <div className="no-info">
              <p>No Recent Articles</p>
            </div>
          )}
        </section>
        {/* past events */}
        <section className="events-wrapper youtube-wrapper">
          <div className="section-info">
            <div className="event-information past-events-title-container">
              <div>
                <h2>
                  <span>Trending Videos</span>
                </h2>
              </div>
            </div>

            <div className="event-card-wrapper">
              <YoutubeVideosCard videos={videos} />
            </div>
          </div>
        </section>
      </Container>
      <ArticleSubmissionCard />
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

  .youtube-wrapper {
    min-height: unset;
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

  @media only screen and (min-width: 1672px) {
    .featured-wrapper {
      max-width: 1600px;
      margin: 0 auto;
      padding-left: 0;
      padding-right: 0;
    }
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
