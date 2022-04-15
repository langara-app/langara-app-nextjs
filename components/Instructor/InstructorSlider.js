import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import InstructionIntro from "../Instructor/InstructorIntro";
import useWindowWidth from "../Hooks/useWindowWidth";

const InstructorSlider = ({ data }) => {
  const width = useWindowWidth();

  const settings = {
    dots: false,
    infinite: false,
    autoplaySpeed: 7000,
    speed: 1000,
    slidesToShow: width > 768 ? 4 : 2,
    slidesToScroll: width > 768 ? 4 : 2,
    arrows: true,
    autoplay: false,
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

  .slick-prev:before, .slick-next:before{
    color: black;
  }
`;

export default InstructorSlider;
