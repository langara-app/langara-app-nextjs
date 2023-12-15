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

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 1500 },
//     items: 3,
//   },
//   desktop: {
//     breakpoint: { max: 1500, min: 1380 },
//     items: 3,
//   },

//   tablet: {
//     breakpoint: { max: 1380, min: 1074 },
//     items: 2,
//   },
//   tabletTwo: {
//     breakpoint: { max: 1074, min: 980 },
//     items: 2,
//     partialVisibilityGutter: 100,
//   },
//   tabletThree: {
//     breakpoint: { max: 980, min: 930 },
//     items: 2,
//     // partialVisible={true}
//     partialVisibilityGutter: 80,
//   },
//   tabletFour: {
//     breakpoint: { max: 930, min: 800 },
//     items: 2,
//     partialVisibilityGutter: 10,
//     // partialVisible={true}
//     // partialVisibilityGutter: 10,
//   },
//   tabletFive: {
//     breakpoint: { max: 800, min: 750 },
//     items: 2,
//     // partialVisible={true}
//     partialVisibilityGutter: 10,
//   },

//   tabletSix: {
//     breakpoint: { max: 750, min: 690 },
//     items: 2,
//   },

//   tabletSeven: {
//     breakpoint: { max: 690, min: 590 },
//     items: 1,
//     partialVisibilityGutter: 220,
//   },

//   tabletEight: {
//     breakpoint: { max: 590, min: 500 },
//     items: 1,
//     partialVisibilityGutter: 70,
//   },

//   mobileOne: {
//     breakpoint: { max: 500, min: 420 },
//     items: 1,
//     partialVisibilityGutter: 50,
//   },

//   mobile: {
//     breakpoint: { max: 420, min: 0 },
//     items: 1,
//   }
// };


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


const NewsCarousel = ({ carouselData }) => {


  const windowWidth = useWindowWidth();
  const [isCenterMode, setIsCenterMode] = useState(false);
  const [isPartialVisible, setIsPartialVisible] = useState(false);


  useEffect(() => {
    if (windowWidth < 1074) {
      setIsCenterMode(false);
      setIsPartialVisible(true);
    } else {
      // setIsCenterMode(true);
      // setIsPartialVisible(false);
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
   .carousel-wrapper {
    max-width: 1600px;
    margin: 0 auto;
  }
  .react-multi-carousel-track {
    gap: 2rem;
  }
`;

export default NewsCarousel;
