import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { CommonStyling } from "@/lib/CommonStyling";

const SliderAds = ({ slides }) => {
  return (
    <SliderContainer>
      <div className="slide-track">
        {slides?.map((slide, index) => (
          <div className="slide" key={index}>
            <Image
              src={slide.image}
              alt={slide.message}
              width={100}
              height={100}
              className="advert-images"
            />
            <div className="right">
              <div className="message">{slide.message}</div>
              <div className="community-type">{slide.communityType}</div>
            </div>
          </div>
        ))}
      </div>
    </SliderContainer>
  );
};

const AnimationKeyframes = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-417px * 7));
  }
`;

const SliderContainer = styled.div`
  background: transparent;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 100%;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0%,
      ${CommonStyling.primaryColor} 100%
    );
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0%,
      ${CommonStyling.primaryColor} 100%
    );
  }

  .slide-track {
    animation: ${AnimationKeyframes} 40s linear infinite;
    display: flex;
    width: calc(417px * 14);
    gap: 1rem;
  }

  .slide {
    width: 417px;
    border-radius: 1rem;
    display: flex;
    gap: 1rem;
    background-color: ${CommonStyling.backgroundColor};
    justify-content: flex-start;
    padding: 1rem;

    .advert-images {
      width: 100px;
      height: 100px;
      border-radius: 1rem;
    }
    .message {
      color: ${CommonStyling.contrastColor};
      font-size: ${CommonStyling.body1FontSize};
      line-height: ${CommonStyling.body1LineHeight};
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .community-type {
      color: ${CommonStyling.contrastColor};
      font-size: ${CommonStyling.body2FontSize};
      line-height: ${CommonStyling.body2LineHeight};
      font-weight: 400;
    }
  }
`;
export default SliderAds;
