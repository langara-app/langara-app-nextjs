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
            <ArticlesCard key={idx} cardData={newsData} showOutline={true} />
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
  }

  .recentArticles-wrapper > div {
    margin: 0 auto;
    width: fit-content;
  }

  

  @media only screen and (max-width: 1288px) {
    .recentArticles-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-evenly;
    }

    .recentArticles-wrapper > div {
      margin-bottom: unset;
    }

  }
`;

export default RecentArticlesCard;
