import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import AlumniIntro from "./AlumniIntro";
import AlumniSingle from "./AlumniSingle";

const alumnaNameToRemove = "Eduard Landa";

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
  backgroundcolor: white;
  margin: 0 2rem;

  .slick-list {
    height: 91vw !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  .slick-dots li {
    margin: 0 !important;
  }
  .slick-dots li button:before {
    font-size: 11px !important;
  }
  .slick-dots li.slick-active button:before {
    color: white !important;
  }

  @media only screen and (min-width: 768px) {
    width: 50vw !important;
    margin: 0;
    .slick-list {
      height: 50vw !important;
    }

    .slick-dots {
      bottom: 40px;
    }

    .slick-dots li button:before {
      font-size: 13px !important;
    }
    .slick-dots li.slick-active button:before {
      color: #675d51 !important;
    }
  }
`;

export default AlumniSlider;
