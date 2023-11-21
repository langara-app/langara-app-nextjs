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
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1200 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 1200, min: 950 },
    items: 2,
  },
  tabletTwo: {
    breakpoint: { max: 950, min: 900 },
    items: 2,
    partialVisibilityGutter: 100,
  },
  tabletThree: {
    breakpoint: { max: 900, min: 850 },
    items: 2,
    // partialVisible={true}
    partialVisibilityGutter: 80,
  },
  tabletFour: {
    breakpoint: { max: 850, min: 766 },
    items: 2,
    partialVisibilityGutter: 10,
    // partialVisible={true}
    // partialVisibilityGutter: 10,
  },
  tabletFive: {
    breakpoint: { max: 766, min: 660 },
    items: 2,
    // partialVisible={true}
    partialVisibilityGutter: 10,
  },

  tabletSix: {
    breakpoint: { max: 660, min: 600 },
    items: 2,
  },

  tabletSeven: {
    breakpoint: { max: 600, min: 500 },
    items: 1,
    partialVisibilityGutter: 100,
  },

  mobileOne: {
    breakpoint: { max: 500, min: 380 },
    items: 1,
    partialVisibilityGutter: 50,
  },

  mobile: {
    breakpoint: { max: 380, min: 0 },
    items: 1,
  }
};


const NewsCarousel = ({ carouselData }) => {


  const windowWidth = useWindowWidth();
  const [isCenterMode, setIsCenterMode] = useState(false);
  const [isPartialVisible, setIsPartialVisible] = useState(false);


  useEffect(() => {
    if (windowWidth < 950) {
      setIsCenterMode(false);
      setIsPartialVisible(true);
    } else {
      setIsCenterMode(true);
      setIsPartialVisible(false);
    }
  },[windowWidth]);



  return (
    <Container>
      <div className="">
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
          removeArrowOnDeviceType={["mobile"]}
          slidesToSlide={1}

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
  max-width: 1600px;
  margin: 0 auto;
`;

export default NewsCarousel;
