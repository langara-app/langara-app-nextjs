import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import InstructionIntro from "../Instructor/InstructorIntro";
import useWindowWidth from "../Hooks/useWindowWidth";

import rightArrow from "../../assets/rightArrow.svg"
import leftArrow from "../../assets/leftArrow.svg"

function NextArrow(props) {
  console.log(props)
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
    slidesToShow: width > 768 ? 5 : 2,
    slidesToScroll: width > 768 ? 5 : 2,
    arrows: true,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <InstructorSliderContainer>
      <Slider {...settings}>
        {data.map((instructor, index) => (<InstructionIntro {...instructor} key={index} />))}
      </Slider>
    </InstructorSliderContainer>
  );
};

const InstructorSliderContainer = styled.div`
  background-color: white;
  margin: 0 2rem;

  .slick-track {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
  }

  .slick-prev{
    left: -50px;
  }

  .slick-next{
    right: -50px;
  }

  .slick-prev, .slick-next{
    width: 40px;
    height: 40px;
  }

  .slick-disabled {
    visibility: hidden;
  }
`;

export default InstructorSlider;
