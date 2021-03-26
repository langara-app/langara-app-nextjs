import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../../styles/OtherHeader.module.css";

import Button from "../ReusableElements/Button";

import useWindowWidth from "../Hooks/useWindowWidth";

import { Link } from "react-scroll";

const OtherHeader = ({ type, title, desc, img, page }) => {
  const width = useWindowWidth();

  return width < 768 && page === "alumni" ? (
    <div className={styles.containerAlumni}>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderP>{desc}</HeaderP>
    </div>
  ) : width >= 768 && page === "alumni" ? (
    <div className={styles.containerAlumni}>
      <div>
        <img src="hamburger.svg" />
      </div>
      <div>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderP>{desc}</HeaderP>
      </div>
      <div>
        <img src="hamburger.svg" />
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderP>{desc}</HeaderP>
    </div>
  );
};

// const HeaderContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   background-position: center;
//   background-size: cover;
//   background-color: #effcfa;
//   height: 100vh;
//   position: relative;
//   padding-top: ${(140 / 375) * 100}vw;
//   padding-left: 35px;
//   padding-right: 35px;
//   color: #c36448;
//   text-align: center;
//   /* background: url(${({ img }) => img}); */

//   @media only screen and (min-width: 768px) {
//     /* For everything bigger than 768px */
//   }

//   /* &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       height: 100vh;
//       width: 100%;
//       background: rgba(241, 90, 34, 0.3);
//       display: block; */
// `;

const HeaderTitle = styled.h1`
  text-transform: uppercase;
  margin: 0;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    font-size: ${(50 / 1365) * 100}vw;
  }
`;

const HeaderP = styled.p`
  margin: 1rem 0;
  margin-bottom: ${(36 / 375) * 100}vw;
  font-weight: 300;
  font-size: 13px;
  color: #675d51;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    margin: 0;
    font-size: ${(19 / 1365) * 100}vw;
    padding: 0 ${(100 / 1365) * 100}vw;
  }
`;

export default OtherHeader;
