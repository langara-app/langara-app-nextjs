import React, { useState } from "react";
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
import Link from "next/link";

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
                <Link
                  href={`/projects/${project.categories_slugs[0]}/${project.slug}`}
                >
                  <a>
                    <CacheImage
                      src={project.acf.app_picture}
                      width={1000}
                      height={1000}
                    />
                  </a>
                </Link>
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
                <Link
                  href={`/projects/${project.categories_slugs[0]}/${project.slug}`}
                >
                  <a>
                    <CacheImage
                      src={project.acf.app_picture}
                      width={1000}
                      height={1000}
                    />
                  </a>
                </Link>
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

  .swiper-container {
    padding: 4.7vw !important;
    box-shadow: 10px 3px 10px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    border-radius: 50%;
    color: black !important;
    background-color: white;
    box-shadow: 0 4px 2px -2px gray;
    height: calc(var(--swiper-navigation-size) / 44 * 50) !important;
    width: calc(var(--swiper-navigation-size) / 44 * 50) !important;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 20px !important;
    font-weight: 100;
    padding: 20px !important;
  }
  .swiper-button-prev {
    right: 5px !important;
  }
  .swiper-button-next {
    left: 16vw;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 41vw;
    .swiper-container {
      padding: 5.6vw 5.6vw 8.5vw !important;
      /* border: 1px solid black; */
    }

    .swiper-button-prev {
      right: 4vw !important;
      top: 16vw !important;
    }
    .swiper-button-next {
      left: 5.5vw !important;
      top: 16vw !important;
    }

    /* Bottom to Top Animation Library Reveal */
    .react-reveal {
      position: absolute;
      top: 10vw;
      left: 13vw;
    }

    /* Project Swiper */
    .slick-list {
      height: 42vw !important;
      width: 50vw !important;
    }
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
  /* height: 100%; */
  height: auto !important;
  min-height: auto !important;
  cursor: pointer;

  /* @media only screen and (min-width: 768px) {
    &&& {
      height: calc((288 / 1366) * 100) vw;
      width: calc((288 / 1366) * 100) vw;
    }
  } */
`;

export default SimpleSlider;
