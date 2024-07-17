import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import styled from "styled-components";

const SwiperContainer = styled.div`
  .swiper-container {
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
  }
`;

export default function MarqueeCarousel({ items }) {
  const breakpoints = {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
  };

  return (
    <SwiperContainer>
      <Swiper
        breakpoints={breakpoints}
        watchSlidesVisibility={true}
        slidesPerView={1}
        centeredSlidesBounds={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {items.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <div style={{ width: "100%", textAlign: "center" }}>{item}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
}
