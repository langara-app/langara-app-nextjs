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
    autoplaySpeed: 7000,
    speed: 1000,
    slidesToShow: width > 767 ? 5 : 1.75,
    slidesToScroll: width > 767 ? 5 : 1.75,
    arrows: width > 768 ? true : false,
    centerPadding: "0",
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: width > 768 ? false : true,
    centerPadding: "80px",
    initialSlide: 0,
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
  @media only screen and (min-width: 768px) {
    padding: 0 13.5vw 0 13.5vw;
  }

  .slick-track {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
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
