import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../../styles/OtherHeader.module.css";

import Button from "../ReusableElements/Button";

import facultyLeftImg from "../../assets/faculty1.svg";
import facultyRightImg from "../../assets/faculty2.svg";

import useWindowWidth from "../Hooks/useWindowWidth";

import { Link } from "react-scroll";

const OtherHeader = ({ type, title, desc, img, page }) => {
  const width = useWindowWidth();

  return width < 768 && page === "alumni" ? (
    <div className={styles.containerAlumni}>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderP>{desc}</HeaderP>
    </div>
  ) : width < 768 && page === "faq" ? (
    <div className={styles.containerFaq}>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderP>{desc}</HeaderP>
    </div>
  ) : width >= 768 && page === "faq" ? (
    <div className={styles.containerFaq}>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderP>{desc}</HeaderP>
    </div>
  ) : width >= 768 && page === "alumni" ? (
    <div className={styles.containerAlumni}>
      <ImageContainer side={"left"}>
        <img src={facultyLeftImg} />
      </ImageContainer>
      <div>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderP>{desc}</HeaderP>
      </div>
      <ImageContainer side={"right"}>
        <img src={facultyRightImg} />
      </ImageContainer>
    </div>
  ) : (
    <div className={styles.container}>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderP>{desc}</HeaderP>
    </div>
  );
};

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
  font-weight: 200;
  font-size: 15px;
  color: #675d51;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    margin: 0;
    font-size: ${(19 / 1365) * 100}vw;
    padding: 0 ${(100 / 1365) * 100}vw;
  }
`;

const ImageContainer = styled.div`
  width: ${({ side }) =>
    side === "left" ? (174 / 1365) * 100 : (131 / 1365) * 100}vw;
  height: ${({ side }) =>
    side === "left" ? (344 / 1365) * 100 : (346 / 1365) * 100}vw;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export default OtherHeader;
