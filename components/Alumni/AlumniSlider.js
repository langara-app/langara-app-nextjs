import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import AlumniIntro from "./AlumniIntro";
import AlumniSingle from "./AlumniSingle";

// const height = document.getElementById("slidercomponent-id").clientHeight;
// this.setState({ height });

const settings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 7000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

const AlumniSlider = ({ data }) => {
  return (
    <AlumniSliderContainer>
      <Slider {...settings}>
        {data.map((alumna, index) => (
          <AlumniIntro {...alumna.acf} key={index} />
        ))}
      </Slider>
    </AlumniSliderContainer>
  );
};

const AlumniSliderContainer = styled.div`
  backgroundcolor: white;
  margin: 0 2rem;

  @media only screen and (min-width: 768px) {
    width: 50vw !important;
    margin: 0;
  }
`;

export default AlumniSlider;
