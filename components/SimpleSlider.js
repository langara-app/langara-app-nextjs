import React from "react";
import styled from "styled-components";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SimpleSlider = ({ data }) => {
  return (
    <SliderContainer>
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
        {data.map((project) => (
          <SwiperSlide>
            <Image
              style={{ display: "block", width: "100%" }}
              src={project.acf.app_picture}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  margin-right: 2rem;
  z-index: 2;
  background-color: white;
`;
const Image = styled.img`
  &&& {
    height: calc((246 / 375) * 100) vw;
    width: calc((246 / 375) * 100) vw;
  }
`;

export default SimpleSlider;
