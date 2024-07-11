import React, { useState } from "react";
import styled from "styled-components";
import { CommonStyling } from "../../lib/CommonStyling.js";

// import components
import SocialShareBtn from "./SocialShareBtn.js";

import formatDate from "@/utils/dateFormatter";
import Link from "next/link";

const ArticlesCard = ({
  cardData,
  showOutline,
  cardWidth,
  cardHeight,
  imageAlign,
}) => {
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
    <Container
      data-imagealign={imageAlign}
      data-cardheight={cardHeight}
      data-cardwidth={cardWidth}
      data-cardborder={showOutline}
    >
      <Link target={"_self"} href={`/news/${slug}`}>
        <div className="card">
          <div class="imgWrap">
            <img src={article_feature_image} alt="Example Image" />
          </div>
          <div class="textWrap">
            <div className="textWrap-container">
              <div className="header-wrap">
                <h3>{article_title}</h3>
                <div className="share-btn">
                  <SocialShareBtn
                    blogLink={"https://langara-app.ca" + `/news/${slug}`}
                    blogTitle={article_title}
                  />
                </div>
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
  width: ${(props) =>
    props["data-cardwidth"] ? props["data-cardwidth"] : "380px"};

  .card {
    width: ${(props) =>
      props["data-cardwidth"] ? props["data-cardwidth"] : "380px"};
    height: ${(props) =>
      props["data-cardheight"] ? props["data-cardheight"] : "512px"};

    background-color: ${CommonStyling.backgroundColor};
    border: ${(props) =>
      props["data-cardborder"] ? "2px solid #E6E6E6" : "none"};
    margin-bottom: 2rem;
    display: flex;
    flex-direction: ${(props) => (props["data-imagealign"] ? "row" : "column")};
    border-radius: 1rem;
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
    gap: 0.5rem;
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

  ${(props) =>
    props["data-imagealign"] === "left" &&
    `@media only screen and (max-width: 1050px) {
    .imgWrap {
      flex: 0 0 35%;
    }
    .textWrap {
      flex: 1;
    }
  }`};

  ${(props) =>
    props["data-imagealign"] === "left" &&
    `@media only screen and (max-width: 580px) {
    .imgWrap {
      flex: 1;
    }
    .textWrap {
      flex: 1;
    }
  }`};

  @media only screen and (max-width: 540px) {
    .card {
      flex-direction: column;
      width: 380px;
      height: 512px;
    }
  }

  @media only screen and (max-width: 540px) {
    .card {
      flex-direction: column;
      width: 330px;
      height: 512px;
    }
  }
`;

export default ArticlesCard;
