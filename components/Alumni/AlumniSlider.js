import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import AlumniIntro from "./AlumniIntro";
import useWindowWidth from "../Hooks/useWindowWidth";

const alumnaNameToRemove = "Eduard Landa";

const AlumniSlider = ({ data }) => {
  const width = useWindowWidth();

  const settings = {
    dots: false,
    infinite: false,
    autoplaySpeed: 7000,
    speed: 1000,
    slidesToShow: width > 768 ? 3 : 1,
    slidesToScroll: width > 768 ? 3 : 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <AlumniSliderContainer>
      <Slider {...settings}>
        {data.map((alumna, index) =>
          alumna.acf.alumni_name === alumnaNameToRemove ? null : (
            <AlumniIntro {...alumna.acf} key={index} />
          )
        )}
      </Slider>
    </AlumniSliderContainer>
  );
};

const AlumniSliderContainer = styled.div`
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

export default AlumniSlider;
