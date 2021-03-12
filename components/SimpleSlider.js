import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

const SimpleSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1.5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      dir="rtl"
      navigation
    >
      <SwiperSlide>
        <img
          style={{ display: "block", width: "100%" }}
          src="https://dummyimage.com/600x400/b8b8b8/fff"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ display: "block", width: "100%" }}
          src="https://dummyimage.com/600x400/b8b8b8/fff"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ display: "block", width: "100%" }}
          src="https://dummyimage.com/600x400/b8b8b8/fff"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ display: "block", width: "100%" }}
          src="https://dummyimage.com/600x400/b8b8b8/fff"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SimpleSlider;
