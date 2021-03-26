import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "../ReusableElements/Button";

import useWindowWidth from "../Hooks/useWindowWidth";

import { Link } from "react-scroll";

const OtherHeader = ({ type, title, desc, img, page }) => {
  const width = useWindowWidth();

  return (
    <HeaderContainer img={img}>
      <h1 style={{ textTransform: "uppercase", margin: 0 }}>{title}</h1>
      <HeaderP>{desc}</HeaderP>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
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

const HeaderP = styled.p`
  margin: 1rem 0;
  margin-bottom: ${(36 / 375) * 100}vw;
  font-weight: 300;
  font-size: 13px;
  color: #675d51;
`;

export default OtherHeader;