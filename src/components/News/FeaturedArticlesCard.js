import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";

// import cards
// import ProjectCard from "./ProjectCard";
import ArticlesCard from "./ArticlesCard";

const FeaturedArticlesCard = ({ featuredArticles }) => {
  // if feature is less than 3, set the featured cards to the first 3 articles

  const [featuredCards, setFeaturedCards] = useState([
    featuredArticles[0],
    featuredArticles[1],
    featuredArticles[2],
  ]);

  return (
    <Container>
      <div className="recentArticles-wrapper">
        {/* feature left */}
        <div className="feature-left">
          <ArticlesCard
            cardWidth={"100%"}
            cardHeight={"544px"}
            image-align={"top"}
            cardData={featuredArticles[0]}
            showOutline={false}
          />
        </div>
        {/* feature right */}
        <div className="feature-right">
          {featuredArticles[1] && (
            <ArticlesCard
              cardWidth={"100%"}
              cardHeight={"257px"}
              imageAlign={"left"}
              cardData={featuredArticles[1]}
              showOutline={false}
            />
          )}

          {featuredArticles[2] && (
            <ArticlesCard
              cardWidth={"100%"}
              cardHeight={"257px"}
              imageAlign={"left"}
              cardData={featuredArticles[2]}
              showOutline={false}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .recentArticles-wrapper {
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .feature-right {
    display: grid;
    grid-template-rows  repeat(2, 1fr);
  }

  @media only screen and (max-width: 980px) {

    display: flex;
    justify-content: center;
    align-items: center;

    .recentArticles-wrapper {
      max-width: 650px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default FeaturedArticlesCard;
