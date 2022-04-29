import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import AlumniIntro from "./AlumniIntro";
import useWindowWidth from "../Hooks/useWindowWidth";

import rightArrow from "../../assets/rightArrow.svg"
import leftArrow from "../../assets/leftArrow.svg"

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
    arrows: true,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <AlumniSliderContainer>
      <Slider {...settings}>
        {data.map((alumna, index) =>
          <AlumniIntro {...alumna.acf} key={index} />
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

export default AlumniSlider;
