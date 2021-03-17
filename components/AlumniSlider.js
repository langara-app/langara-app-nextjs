import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import AlumniIntro from "../components/AlumniIntro";

// const height = document.getElementById("slidercomponent-id").clientHeight;
// this.setState({ height });

const settings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 10000,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

const AlumniSlider = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 2rem",
      }}
    >
      <Slider {...settings}>
        {data.map((alumna) => (
          <AlumniIntro {...alumna.acf} />
        ))}
      </Slider>
    </div>
  );
};

export default AlumniSlider;
