import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Link from "next/link";

import Button from "../ReusableElements/Button";
import ScrollArrow from "../ReusableElements/ScrollArrow";
import useWindowWidth from "../Hooks/useWindowWidth";

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
          <HomeTitle>{title}</HomeTitle>
        ) : (
          <HomeTitle>
            Web & <br /> Mobile APP <br /> Development & <br /> Design
          </HomeTitle>
        )}

        <HeaderP>{desc}</HeaderP>
        <ButtonArrowContainer>
          <Button
            text={btnText}
            margin={0.5}
            font={18}
            size={"med"}
            bcg={"transparent"}
            color={"#675D51"}
          />
          <Link
            activeClass="active"
            to={scrollTo}
            spy={true}
            smooth={true}
            duration={500}
          >
            <ScrollArrow />
          </Link>
        </ButtonArrowContainer>
      </HeaderLeftWeb>
      {width < 768 ? null : (
        <HomeImageContainer>
          <HomeImage
            src={"https://dummyimage.com/721x694/000/fff"}
            alt="WMDD Top Image"
          />
        </HomeImageContainer>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url(${({ img }) => img});
  /* background-position: center; */
  /* background-size: cover; */
  background-color: #effcfa;
  height: 100vh;
  position: relative;
  padding-top: ${(140 / 375) * 100}vw;
  padding-left: 35px;
  padding-right: 35px;
  color: #c36448;
  text-align: center;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: unset;
    align-items: unset;
    padding-top: 0;
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
    padding: 0 ${(74 / 1366) * 100}vw;
  }
`;

const HomeTitle = styled.h1`
  texttransform: uppercase;
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: ${(60 / 1366) * 100}vw;
    text-align: left;
    line-height: ${(60 / 1280) * 100}vw;
  }
`;

const HeaderP = styled.p`
  margin: 1rem 0;
  margin-bottom: ${(36 / 375) * 100}vw;
  font-weight: 300;
  font-size: 13px;
  color: #675d51;

  @media only screen and (min-width: 768px) {
    font-size: $((463 / 1366) * 100) vw;
    text-align: left;
    font-size: ${(19 / 1366) * 100}vw;
    margin-bottom: 0;
  }
`;

const ButtonArrowContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const HomeImageContainer = styled.div`
  /* @media only screen and (min-width: 768px) {
   
  } */
`;

const HomeImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export default HomeHeader;
