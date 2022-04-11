import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "../ReusableElements/Button";
import ScrollArrow from "../ReusableElements/ScrollArrow";
import useWindowWidth from "../Hooks/useWindowWidth";
import homeImg from "../../assets/home.svg";
import topImg from "../../assets/img/wmdd/HomeImage.png"

import { Link } from "react-scroll";

const HomeHeader = ({ type, title, desc, btnText, img, page }) => {
  const [scrollTo, setScrollTo] = useState("home");
  const width = useWindowWidth();

  useEffect(() => {
    setScrollTo(type);
  }, [type]);

  return (
    <HeaderContainer img={img}>
      <HeaderLeftWeb>
        {width < 768 ? (
          <div>
            <HomeTitle>{title}</HomeTitle>
            <HeaderP>{desc.description1}</HeaderP>
            <HeaderQ>{desc.description2}</HeaderQ>
            <HomeImg src={topImg} alt="WMDD Top Image" />
          </div>
        ) : (
          <div>
            <HomeTitle>{title}</HomeTitle>
            <HeaderP>{desc.description1}</HeaderP>
            <HeaderQ>{desc.description2}</HeaderQ>
          </div>
        )}
      </HeaderLeftWeb>
      {width < 768 ? null : (
        <HomeImageContainer>
          <HomeImg src={topImg} alt="WMDD Top Image" />
        </HomeImageContainer>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background: url(${({ img }) => img});
  background-color: #F3FBFF;
  position: relative;
  padding-top: 5.7vh;
  padding-left: 5.2vw;
  padding-right: 4.4vw;
  color: rgba(55, 71, 79, 1);
  text-align: left;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    padding: 5.5vh 13vw 8.5vh 13.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "pic desc";
    justify-content: unset;
    align-items: unset;
    height: unset;

  }

  /* &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background: rgba(241, 90, 34, 0.3);
      display: block; */
`;

const HeaderLeftWeb = styled.div`
  @media only screen and (min-width: 768px) {
    grid-area: desc;
  }
`;

const HomeTitle = styled.h1`
  margin: 0;
  font-size: 0.85rem;
  line-height: 18px;
  font-weight: 400;
  font-family: "Ubuntu Mono";

  @media only screen and (min-width: 768px) {
    margin-top: 2.75rem;
    font-size: 0.85rem;
  }
`;

const HeaderP = styled.p`
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 2.3rem;
  color: rgba(38, 50, 56, 1);
  margin-bottom: 1.5rem;
  line-height: 3.125rem;

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
    text-align: left;
    margin-bottom: 1.5rem;
    line-height: 4rem;
  }
`;

const HeaderQ = styled.p`
margin: 0;
font-size: 1.3rem;
font-weight: 400;
line-height: 1.875rem;

@media only screen and (min-width: 768px) {
  font-size: ${((463 / 1366) * 100)} vw;
  text-align: left;
  font-size: 1.25rem;
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
`

export default HomeHeader;
