import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";

// import cards
// import ProjectCard from "./ProjectCard";
import ArticlesCard from "./ArticlesCard";

const RecentArticlesCard = ({ recentArticles }) => {
  return (
    <Container>
      <div className="recentArticles-wrapper">
        {recentArticles.map((newsData, idx) => {
          return (
            <ArticlesCard
              cardWidth={"100%"}
              key={idx}
              cardData={newsData}
              showOutline={true}
            />
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .recentArticles-wrapper {
    max-width: 1600px;
    margin: 0 auto;
    row-gap: 1.5rem;
  }

  .recentArticles-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media only screen and (max-width: 1280px) {
    .recentArticles-wrapper {
      // max-width: 1650px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 680px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .recentArticles-wrapper {
      max-width: 400px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default RecentArticlesCard;
