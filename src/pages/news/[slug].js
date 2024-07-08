import Link from "next/link";
import Head from "next/head";

import { Articles } from "../../lib/Articles";

import MoreArticles from "../../components/News/MoreArticles";

import styled from "styled-components";
// import ReactPlayer from "react-player/youtube";
import { CommonStyling } from "../../lib/CommonStyling";
import { HomeData } from "../../lib/HomeData";
import formatDate from "@/utils/dateFormatter";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/wp-json/wp/v2/blogs`);
  const blogs = await res.json();

  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/blogs?slug=${params.slug}`,
  );
  const blog = await res.json();

  let categoryName = null;

  if (blog[0].categories.length) {
    const blogCategoryId = blog[0].categories[0];

    const categoryRes = await fetch(
      `${process.env.BASE_URL}/wp-json/wp/v2/categories/${blogCategoryId}`,
    );
    const category = await categoryRes.json();
    categoryName = category.name;
  }

  // recent articles

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

  const resBlogs = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/blogs?per_page=3`,
  );
  const resData = await resBlogs.json();

  const x = [resData[0], resData[0], resData[0]];

  const articles = x.map((article) => {
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
      isFeatured: article.tags.includes(65),
    };
  });

  return {
    props: {
      blog: blog[0],
      categoryName,
      recentArticles: articles,
    },
    revalidate: 60 * 60 * 24,
  };
}

const NewsEventsInvidivual = ({ blog, categoryName, recentArticles }) => {
  const renderMedia = (src) => {
    if (!src) return null;

    const isVideo =
      src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");
    if (isVideo) {
      return (
        <video controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return <img src={src} alt="Media" />;
  };

  return (
    <ArticlePage>
      <SingleEventPageContainer>
        <Head>
          <title>{HomeData.tabName.title}</title>
          {/* Basic Meta Tags */}
          <meta name="description" content={blog.acf.excerpt} />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={blog.title.rendered} />
          <meta property="og:description" content={blog.acf.excerpt} />
          <meta property="og:image" content={blog.acf.blog_feature_image} />
          <meta property="og:url" content={"https://langara-app.ca/news/" + `${blog.slug}`} />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content={blog.acf.blog_feature_image} />
          {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */}
          <meta name="twitter:title" content={blog.title.rendered} />
          <meta name="twitter:description" content={blog.acf.excerpt} />
          <meta name="twitter:image" content={blog.blog_feature_image} />
        </Head>
        <Link className="category-link" href={`/news`}>
          <span className="events-title">{Articles.singleEventPage.title}</span>
        </Link>
        <ArticleDetails>
          {blog.title.rendered !== "" ? (
            <h1 className="section-title">{blog.title.rendered}</h1>
          ) : null}
          {/* Blog Meta Info */}
          <div className="blog-meta-container">
            <p className="blog-meta">
              {" "}
              {categoryName} | {formatDate(blog.acf.publish_date)}
            </p>
            <p className="author-info">
              By {blog.acf.author_name}, {blog.acf.author_designation}
            </p>
          </div>
          <div>
            {false ? (
              <Video>
                <ReactPlayer
                  className="react-player"
                  height="100%"
                  width="100%"
                  url={blog.acf.section1_link}
                />
              </Video>
            ) : (
              <Image
                src={blog.acf.blog_feature_image}
                alt={`${blog.title.rendered} Banner`}
                width={1200}
                height={600}
              />
            )}
          </div>
          <section>
            {blog.acf.blog_text_area_one !== "" ? (
              <p
                className="section-para"
                dangerouslySetInnerHTML={{
                  __html: blog.acf.blog_text_area_one,
                }}
              ></p>
            ) : null}
          </section>
          {/* Blog Media Group One */}
          <section className="blog-media">
            {blog.acf.media_one_1_2 && renderMedia(blog.acf.media_one_1_2)}
            {blog.acf.media_one_2_2 && renderMedia(blog.acf.media_one_2_2)}
          </section>
          <section>
            {blog.acf.blog_text_area_two_title && (
              <h3 className="section-title">
                {blog.acf.blog_text_area_two_title}
              </h3>
            )}
            {blog.acf.blog_text_area_two && (
              <p
                className="section-para"
                dangerouslySetInnerHTML={{
                  __html: blog.acf.blog_text_area_two,
                }}
              ></p>
            )}
          </section>
          {/* Blog Media Group Two */}
          <section className="blog-media">
            {blog.acf.media_two_1_2 && renderMedia(blog.acf.media_two_1_2)}
            {blog.acf.media_two_2_2 && renderMedia(blog.acf.media_two_2_2)}
          </section>
          <section>
            {blog.acf.references && (
              <h3 className="section-title">References</h3>
            )}
            {blog.acf.references && (
              <p
                className="section-para"
                dangerouslySetInnerHTML={{
                  __html: blog.acf.references,
                }}
              ></p>
            )}
          </section>
        </ArticleDetails>
      </SingleEventPageContainer>
      <div className="more-articles">
        <MoreArticles recentArticles={recentArticles} />
      </div>
    </ArticlePage>
  );
};

const ArticlePage = styled.div`
  .more-articles {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const SingleEventPageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #ffffff;
  text-align: left;
  padding: 4.2vh 5.4vw;
  color: #263238;

  .category-link .events-title {
    font-family: ${CommonStyling.secondaryFontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #37474f;
    cursor: pointer;
  }

  .category-link .events-title:hover {
    color: ${CommonStyling.primaryColor};
  }
`;

const ArticleDetails = styled.article`
  section {
    margin-top: 3rem;
  }

  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid #cfd8dc;

  .blog-meta-container {
    margin-bottom: 1rem;
    font-family: ${CommonStyling.primaryFontFamily};
    font-size: ${CommonStyling.body2FontSize};
  }
  .blog-meta {
    color: ${CommonStyling.contrastColor};
  }

  .author-info {
    font-weight: bold;
  }

  .section-title {
    font-weight: 700;
    font-size: 38px;
    line-height: 50px;
    margin: 1rem 0 1rem 0;
  }

  .section-para {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }

  .section-link {
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

  .section-title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  }

  .blog-media {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Space between the images */
  }
  .blog-media img,
  .blog-media video {
    width: calc(50% - 5px);
    aspect-ratio: 16 / 9;
  }
  .blog-media img:only-child,
  .blog-media video:only-child {
    width: 100%;
  }
  .blog-media img,
  .blog-media video {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .blog-media img,
    .blog-media video {
      width: 100%;
    }
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
