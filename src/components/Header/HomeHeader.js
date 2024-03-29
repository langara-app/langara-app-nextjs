import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "../ReusableElements/Button";
import ScrollArrow from "../ReusableElements/ScrollArrow";
import useWindowWidth from "../Hooks/useWindowWidth";
import homeImg from "../../assets/home.svg";
import topImg from "../../assets/img/wmdd/homeHero.png";
import square from "../../assets/rectangle.svg";

import { Link } from "react-scroll";
import { CommonStyling } from "../../lib/CommonStyling";
import Image from "next/image";

const HomeHeader = ({ type, title, desc, btnText, img, page }) => {
  const [scrollTo, setScrollTo] = useState("home");
  const width = useWindowWidth();

  useEffect(() => {
    setScrollTo(type);
  }, [type]);

  return (
    <HeaderContainer img={topImg}>
      <ContentContainer>
        <Square src={square} alt="rectangle" />
        <HomeTitle>{title}</HomeTitle>
        <HeaderP>{desc.description1}</HeaderP>
        <HeaderQ>{desc.description2}</HeaderQ>
      </ContentContainer>
      <Box />
    </HeaderContainer>
  );
};

const Box = styled.div`
  height: 20px;
  width: 100%;
  border-radius: 32px 32px 0 0;
  background-color: ${CommonStyling.backgroundColor};
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
`;

const HeaderContainer = styled.div`
  background: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  color: ${CommonStyling.backgroundColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2vh 5.4vw;
  // gap: 0.75rem;
  @media only screen and (min-width: 768px) {
    padding: 2vh 13.5vw;
  }
  position: relative;
`;

const DownArrow = styled.img`
  height: 12px;
  width: 24px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  text-align: left;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media only screen and (min-width: 768px) {
    max-width: 50vw;
    position: relative;
  }
`;
const Square = styled.img`
  width: 61px;
  height: 61px;

  @media only screen and (min-width: 768px) {
    position: absolute;
    left: -91px;
  }
`;

const HomeTitle = styled.h1`
  margin: 0;
  font-size: ${CommonStyling.body2FontSize};
  line-height: ${CommonStyling.body2LineHeight};
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    font-size: ${CommonStyling.body2FontSize};
  }
`;

const HeaderP = styled.p`
  font-weight: 700;
  font-size: ${CommonStyling.h2FontSize};
  color: ${CommonStyling.backgroundColor};
  margin: 0;
  @media only screen and (min-width: 768px) {
    text-align: left;
    font-size: ${CommonStyling.h1FontSize};
  }
`;

const HeaderQ = styled.p`
  margin: 0;
  font-size: ${CommonStyling.body1FontSize};
  font-weight: 400;
  line-height: ${CommonStyling.body1LineHeight};

  @media only screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const ButtonArrowContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${(55 / 1365) * 100}vw;
  }
`;

const HomeImageContainer = styled.div`
  @media only screen and (min-width: 768px) {
    grid-area: pic;
    max-width: 540px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HomeImg = styled.img`
  padding-top: 5.7vh;
  width: 100%;
  @media only screen and (min-width: 768px) {
    padding-top: 0;
    display: block;
    width: 100%;
    height: auto;
    padding-right: 1.6vw;
    margin: 0 auto;
  }
`;

export default HomeHeader;
