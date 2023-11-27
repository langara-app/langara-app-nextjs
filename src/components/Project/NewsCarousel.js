import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";

// import cards
// import ProjectCard from "./ProjectCard";
import NewsCard from "./NewsCard";

// imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1380 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 1380, min: 1074 },
    items: 2,
  },
  tabletTwo: {
    breakpoint: { max: 1074, min: 980 },
    items: 2,
    partialVisibilityGutter: 100,
  },
  tabletThree: {
    breakpoint: { max: 980, min: 930 },
    items: 2,
    // partialVisible={true}
    partialVisibilityGutter: 80,
  },
  tabletFour: {
    breakpoint: { max: 930, min: 800 },
    items: 2,
    partialVisibilityGutter: 10,
    // partialVisible={true}
    // partialVisibilityGutter: 10,
  },
  tabletFive: {
    breakpoint: { max: 800, min: 750 },
    items: 2,
    // partialVisible={true}
    partialVisibilityGutter: 10,
  },

  tabletSix: {
    breakpoint: { max: 750, min: 690 },
    items: 2,
  },

  tabletSeven: {
    breakpoint: { max: 690, min: 590 },
    items: 1,
    partialVisibilityGutter: 220,
  },

  tabletEight: {
    breakpoint: { max: 590, min: 500 },
    items: 1,
    partialVisibilityGutter: 70,
  },

  mobileOne: {
    breakpoint: { max: 500, min: 420 },
    items: 1,
    partialVisibilityGutter: 50,
  },

  mobile: {
    breakpoint: { max: 420, min: 0 },
    items: 1,
  }
};


const NewsCarousel = ({ carouselData }) => {


  const windowWidth = useWindowWidth();
  const [isCenterMode, setIsCenterMode] = useState(false);
  const [isPartialVisible, setIsPartialVisible] = useState(false);


  useEffect(() => {
    if (windowWidth < 1074) {
      setIsCenterMode(false);
      setIsPartialVisible(true);
    } else {
      setIsCenterMode(true);
      setIsPartialVisible(false);
    }
  }, [windowWidth]);
  
  if(!windowWidth) return null;


  return (
    <Container>
      <div className="carousel-wrapper">
        <Carousel
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
          removeArrowOnDeviceType={[""]}
          slidesToSlide={1.5}

        >
          {carouselData.map((newsData, idx) => {
            return <NewsCard key={idx} cardData={newsData} />;
          })}
        </Carousel>
      </div>
    </Container>
  );
};

const Container = styled.div`
   .carousel-wrapper {
    max-width: 1600px;
    margin: 0 auto;
  }
`;

export default NewsCarousel;
