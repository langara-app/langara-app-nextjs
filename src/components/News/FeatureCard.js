import React, { useState } from "react";
import styled from "styled-components";
import { CommonStyling } from "../../lib/CommonStyling.js";

// import components
import EventCardButton from "./EventCardButton.js";

import formatDate from "@/utils/dateFormatter";
import Link from "next/link";

import Image from "next/image";

// eventType is either Past or Current
// showOutline is a boolean that determines whether or not to show the outline
// cardData is an object that contains the data for the card

const ArticlesCard = ({ cardData, showOutline }) => {
  // id: article.id,
  //     slug: article.slug,
  //     article_title: article.title.rendered,
  //     description: article.acf.excerpt,
  //     article_date: article.acf.publish_date,
  //     article_feature_image: article.acf.blog_feature_image,
  //     article_author: article.acf.author_name,
  //     article_author_designation: article.acf.author_designation,
  //     article_category: blogSubCategories[String(article.categories[0])],
  //     isFeatured: article.tags.includes(65),

  const {
    id,
    slug,
    article_title,
    description,
    article_date,
    article_feature_image,
    article_author,
    article_author_designation,
    article_category,
  } = cardData;
  return (
    <Container data-cardborder={showOutline}>
      <Link target={"_self"} href={`/news/${slug}`}>
        <div className="card">
          <div class="imgWrap">
            <img src={article_feature_image} alt="Example Image" />
          </div>
          <div class="textWrap">
            <div className="textWrap-container">
              <div className="header-wrap">
                <h3>{article_title}</h3>
                <div className="share-btn">share</div>
              </div>
              {/* article info */}
              <p className="article-meta">
                {article_category} | {formatDate(article_date)}
              </p>
              <p className="author-info">
                {article_author}, {article_author_designation}
              </p>

              <p className="articleDesc">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.article`
  width: 410px;

  .card {
    width: 410px;
    height: 514px;
    border-radius: 1rem;
    background-color: ${CommonStyling.backgroundColor};
    border: ${(props) =>
      props["data-cardborder"] ? "2px solid #E6E6E6" : "none"};
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  @media only screen and (max-width: 470px) {
    width: 310px;
    .card {
      width: 310px;
    }
  }

  .imgWrap,
  .textWrap {
    flex: 1;
    display: flex;
  }
  .imgWrap {
    background: white;
    position: relative;
  }
  .imgWrap img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .textWrap {
    background: #ffffff;
    padding: 1rem;
    box-sizing: border-box;
  }

  .textWrap-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .article-meta {
    font-size: ${CommonStyling.body2FontSize};
    color: ${CommonStyling.contrastColor};
  }
  .author-info {
    font-weight: bold;
  }

  .header-wrap {
    display: flex;
    flex-direction: row;
  }

  .header-wrap > h3 {
    color: ${CommonStyling.primaryColor};
    font-size: ${CommonStyling.h3FontSize};
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }

  p.articleDesc {
    font-size: ${CommonStyling.body2FontSize};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }
`;

export default ArticlesCard;
