import React from "react";
import styled from "styled-components";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import useWindowWidth from "../Hooks/useWindowWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SimpleSlider = ({ data }) => {
  const width = useWindowWidth();

  return (
    <SliderContainer>
      {width < 768 ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1.2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          dir="rtl"
          loop={true}
          navigation
          pagination={{ clickable: true }}
        >
          {data.map((project, index) => (
            <SwiperSlide key={index}>
              <ImageContainer>
                <CacheImage
                  src={project.acf.app_picture}
                  width={1000}
                  height={1000}
                />
              </ImageContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          dir="rtl"
          loop={true}
          navigation
          pagination={{ clickable: true }}
        >
          {data.map((project, index) => (
            <SwiperSlide key={index}>
              <ImageContainer>
                <CacheImage
                  src={project.acf.app_picture}
                  width={1000}
                  height={1000}
                />
              </ImageContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  margin-right: 2rem;
  z-index: 2;
  background-color: white;

  @media only screen and (min-width: 768px) {
    margin-right: 41vw;
  }
`;

const ImageContainer = styled.div`
  @media only screen and (min-width: 768px) {
    height: 21vw;
    width: 21vw;
  }
`;
const CacheImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;

  /* @media only screen and (min-width: 768px) {
    &&& {
      height: calc((288 / 1366) * 100) vw;
      width: calc((288 / 1366) * 100) vw;
    }
  } */
`;

export default SimpleSlider;
