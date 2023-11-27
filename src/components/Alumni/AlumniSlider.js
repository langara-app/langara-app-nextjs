import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import AlumniIntro from "./AlumniIntro";
import useWindowWidth from "../Hooks/useWindowWidth";

import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      src={rightArrow}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      src={leftArrow}
    />
  );
}

const AlumniSlider = ({ data }) => {
  const width = useWindowWidth();

  const settings = {
    dots: false,
    infinite: false,
    autoplaySpeed: 7000,
    speed: 1000,
    slidesToShow: width > 768 ? 3 : 1,
    slidesToScroll: width > 768 ? 3 : 1,
    arrows: width > 768 ? true : false,
    centerPadding: "0",
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: width > 768 ? false : true,
    centerPadding: "50px",
    initialSlide: 0,
  };

  return (
    <AlumniSliderContainer>
      <Slider {...settings}>
        {data.map((alumna, index) => {
          return <AlumniIntro {...alumna.acf} key={index} />;
        })}
      </Slider>
    </AlumniSliderContainer>
  );
};

const AlumniSliderContainer = styled.div`
  background-color: white;
  // margin: 0 2rem;
  .slick-track {
    padding: 10px 0;
    display: flex !important;
    flex-direction: row;
    gap: 1.25rem;
  }

  .slick-track .slick-slide:last-child .react-player__preview {
    background-position: center center !important;
  }

  .slick-slider {
    height: 100%;

    @media screen and (max-width: 768px) {
      padding-bottom: 10vh;

    }
  }

  .slick-slide {
    height: inherit !important;

    // for the first slide
    img {
    }
  }

  .slick-slide + div {
    height: 100%;
    display: flex;
    justify-content: space-between;

    // in between first and last slide
    // img {
    //   object-position: 90% 10%;
    // }
  }

  // for last slide
  .slick-slide + div:last-child .react_play:first-child {
    object-position: unset;
  }

  .slick-current {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
  }

  .slick-disabled {
    visibility: hidden;
  }

  @media screen and (min-width: 769px) {
    margin: 10.97vh 12.5vw;
  }
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  div:nth-child(1) {
    font-weight: bold;
    font-size: 1.25rem;
  }

  div:nth-child(2) {
    font-size: 0.875rem;
    color: #37474f;
    line-height: 1.25rem;
  }
`;

export default AlumniSlider;
