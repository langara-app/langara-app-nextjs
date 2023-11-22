import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import InstructionIntro from "../Instructor/InstructorIntro";
import useWindowWidth from "../Hooks/useWindowWidth";

import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";

function NextArrow(props) {
  // console.log(props)
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

const InstructorSlider = ({ data }) => {
  const width = useWindowWidth();

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplaySpeed: 7000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          dots: false,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          dots: false,
        },
      },
      {
        breakpoint: 658,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2.2,
          dots: false,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1.55,
          slidesToScroll: 1.55,
          dots: false,
          centerPadding: "25vw",
          centerMode: true,
        },
      },
    ],
  };

  return (
    <InstructorSliderContainer>
      <Slider {...settings}>
        {data.map((instructor, index) => (
          <InstructionIntro {...instructor} key={index} />
        ))}
      </Slider>
    </InstructorSliderContainer>
  );
};

const InstructorSliderContainer = styled.div`
  // margin: 0 2rem;
  @media only screen and (min-width: 769px) {
    padding: 0 13.5vw 0 13.5vw;
  }

  .slick-track {
    padding: 10px 0;
    display: flex !important;
    flex-direction: row;
    gap: 1.25rem;
  }

  .slick-slider {
    height: 100%;
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
`;

export default InstructorSlider;
