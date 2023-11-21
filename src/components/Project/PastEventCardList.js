import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";

// import cards
// import ProjectCard from "./ProjectCard";
import NewsCard from "./NewsCard";

const PastEventCardList = ({ pastEvents }) => {
  return (
    <Container>
      <div className="pastEvents-wrapper">
        {pastEvents.map((newsData, idx) => {
          return <NewsCard key={idx} cardData={newsData} showOutline={true} eventType={"PAST"}  />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .pastEvents-wrapper {
    max-width: 1600px;
    margin: 0 auto;
  }

  .pastEvents-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    //justify-items: center;
  }

  .pastEvents-wrapper > div {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 1380px) {
    .pastEvents-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (max-width: 1080px) {
    .pastEvents-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-evenly;
    }

    .pastEvents-wrapper > div {
      margin-bottom: unset;
    }

  }
`;

export default PastEventCardList;
