import React, { useEffect, useState, useRef } from "react";
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

// react icon left / right
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const ProjectCarousel = ({ carouselData, showCardOutline, carouselIdx }) => {
  const scrollContainer = useRef(null);

  const [showAfter, setShowAfter] = useState(true);
  const [showBefore, setShowBefore] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleScroll = () => {
    const container = scrollContainer.current;

    if (container) {
      const isScrollable = container.scrollWidth > container.clientWidth;

      const isAtEnd =
        container.scrollLeft >= container.scrollWidth - container.clientWidth;
      const isAtStart = container.scrollLeft === 0;

      if (isScrollable) {
        // at the end
        if (isAtEnd) {
          // Perform actions or set state when reaching the end of scroll
          setShowAfter(false);
          setShowBefore(true);
          setShowRightArrow(false);
        }
        // at the beginning
        if (isAtStart) {
          // console.log('Reached the start of scroll');
          setShowAfter(true);
          setShowBefore(false);
          setShowLeftArrow(false);
        }
        if (!isAtEnd && !isAtStart) {
          setShowLeftArrow(true);
          setShowRightArrow(true);
        }
      } else {
        setShowAfter(false);
        setShowBefore(false);
        setShowLeftArrow(false);
        setShowRightArrow(false);
      }
    }
  };

  useEffect(() => {
    setShowLeftArrow(true);
    setShowRightArrow(true);
    handleScroll();
  }, [carouselData]);

  function scrollCarousel(event, direction) {
    event.preventDefault();
    const container = scrollContainer.current;
    const cardWidth = 300;
    const gap = 45;
    // const scrollAmount = cardWidth + gap;
    
    const scrollAmount = window.innerWidth < 768 ? cardWidth + gap : 2 * (cardWidth + gap);


    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
    }

    setShowLeftArrow(true);
    setShowRightArrow(true);
  }

  return (
    <Container
      totalCards={carouselData.length}
      showbefore={showBefore}
      showafter={showAfter}
      carouselidx={carouselIdx}
    >
      <div className="carousel-cards-wrapper">
        <div className="carousel-container">
          {/* left button */}
          {showLeftArrow && (
            <button
              className="nav-button nav-button-left"
              onClick={(e) => scrollCarousel(e, "left")}
            >
              <FaChevronLeft />
            </button>
          )}
          {/* cards */}
          <div
            className="carousel"
            onScroll={handleScroll}
            ref={scrollContainer}
          >
            {/* Initial set of cards */}
            {carouselData.map((projectData, idx) => {
              return (
                <ProjectCard
                  key={idx}
                  cardData={projectData}
                  showOutline={showCardOutline}
                />
              );
            })}
          </div>

          {showRightArrow && (
            <button
              className="nav-button nav-button-right"
              onClick={(e) => scrollCarousel(e, "right")}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1px;
    width: 50px;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 30%,
      ${(props) =>
          props.carouselidx === 0 ? CommonStyling.primaryColor : "white"}
        100%
    );
    z-index: 2;
    transition: opacity 0.6s ease;
    opacity: ${(props) => (props.showbefore ? 1 : 0)};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -1px;
    width: 50px;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 30%,
      ${(props) =>
          props.carouselidx === 0 ? CommonStyling.primaryColor : "white"}
        100%
    );
    z-index: 2;
    transition: opacity 0.6s ease;
    opacity: ${(props) => (props.showafter ? 1 : 0)};
  }

  .container {
    max-width: 1600px;
    margin: 0 auto;
    margin: 0px 50px;
  }

  /* Center the carousel using CSS Grid */
  .carousel-container {
    position: relative;
  }

  .carousel {
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.totalCards}, 300px)`};
    gap: 45px;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
    z-index: 1;
    /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      display: none;
    }
    touch-action: pan-x;
  }

  /* Style the navigation buttons */
  .nav-button {
    position: absolute;
    top: 50%;
    font-size: 20px;
    cursor: pointer;
    color: white;
    background-color: rgba(241, 90, 34, 0.5);
    border: none;
    padding: 12px;
    width: 45px;
    height: 45px;
    border-radius: 50%; /* Make the buttons circular */
    transition: background-color 0.5s ease; /* Smooth color transition */
    z-index: 5; /* Set a higher z-index for the buttons */
  }

  .nav-button:hover {
    background-color: rgba(241, 90, 34);
  }

  .nav-button-left {
    left: 4.5rem;
  }

  .nav-button-right {
    right: 4.5rem;
  }

  @media (max-width: 768px) {
    /* Hide the navigation buttons on mobile */
    .nav-button {
      // display: none;
    }

    .nav-button-left {
      left: 2.75rem;
    }

    .nav-button-right {
      right: 2.75rem;
    }

    &::before {
      opacity: 1;
    }
    &::after {
      opacity: 1;
    }

    .carousel {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;

export default ProjectCarousel;
