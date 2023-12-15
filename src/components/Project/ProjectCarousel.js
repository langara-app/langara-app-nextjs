import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";

// import cards
import ProjectCard from "./ProjectCard";

// imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const generateResponsiveSettings = () => {
  const responsive = {};
  let currentBreakpoint = 1600;
  const cardWidth = 300;

  // First item with static max value of 10000
  responsive["beyond"] = {
    breakpoint: { max: 10000, min: 1600 }, items: 5
  };
  
  while (currentBreakpoint >= 640) {
    const newBreakpoint = currentBreakpoint - 30;
    const breakpoint = { max: currentBreakpoint, min: newBreakpoint };
    const items =  Math.floor((newBreakpoint) / cardWidth);
    responsive[currentBreakpoint] = ({ breakpoint, items });
    currentBreakpoint = newBreakpoint;
  }

  const otherResp = {
    "tab": {
      breakpoint: { max: 610, min: 590 }, items: 2
    },
    "tab1": {
      breakpoint: { max: 590, min: 520 }, items: 1.7
    },
    "mobile1": {
      breakpoint: { max: 520, min: 470 }, items: 1.5
    },
    "mobile2": {
      breakpoint: { max: 470, min: 0 }, items: 1
    }
  }

  const allResponsive = {...responsive, ...otherResp}
  return allResponsive;
};

// Generate responsiveness settings
const responsive = generateResponsiveSettings();

// console.log(responsivenessList);

const ProjectCarousel = ({ carouselData, showCardOutline }) => {
  const windowWidth = useWindowWidth();
  const [isCenterMode, setIsCenterMode] = useState(false);
  const [isPartialVisible, setIsPartialVisible] = useState(false);
  const [isInfinite, setIsInfinite] = useState(true);

  useEffect(() => {
    if (windowWidth > 470) {
      setIsCenterMode(false);
      setIsPartialVisible(true);
    } else {
      // setIsCenterMode(true);
      // setIsPartialVisible(false);
    }
  }, [windowWidth]);

  if (!windowWidth) return null;

  return (
    <Container>
      <div className="card">
        <Carousel
          //itemClass="image-item"
          partialVisible={isPartialVisible}
          centerMode={isCenterMode}
          renderButtonGroupOutside={true}
          swipeable={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          customTransition="all .5s linear"
          transitionDuration={500}
          containerClass="carousel-container"
          arrows={true}
          //removeArrowOnDeviceType={["mobile2"]}
          slidesToSlide={1}
        >
          {carouselData.map((projectData, idx) => {
            return (
              <ProjectCard
                key={idx}
                cardData={projectData}
                showOutline={showCardOutline}
              />
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  .react-multi-carousel-track {
    gap: 2rem;
  }
`;

export default ProjectCarousel;
