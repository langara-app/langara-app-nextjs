import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

const SimpleSlider = () => {
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.2}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        dir="rtl"
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            style={{ display: "block", width: "100%" }}
            src="https://dummyimage.com/312x312/b8b8b8/fff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ display: "block", width: "100%" }}
            src="https://dummyimage.com/312x312/b8b8b8/fff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ display: "block", width: "100%" }}
            src="https://dummyimage.com/312x312/b8b8b8/fff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ display: "block", width: "100%" }}
            src="https://dummyimage.com/312x312/b8b8b8/fff"
          />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  margin-right: 2rem;
`;

export default SimpleSlider;
