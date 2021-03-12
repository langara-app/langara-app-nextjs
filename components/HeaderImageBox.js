import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Link from "next/link";

import Button from "./ReusableElements/Button";
import ScrollArrow from "./ReusableElements/ScrollArrow";

import { Link } from "react-scroll";

const HeaderImageBox = ({ type, title, desc, btnText, img }) => {
  const [scrollTo, setScrollTo] = useState("home");

  useEffect(() => {
    setScrollTo(type);
  }, [type]);

  return (
    <HeaderContainer img={img}>
      <h1>{title}</h1>
      <HeaderP>{desc}</HeaderP>
      <Button text={btnText} margin={0.5} font={18} size={"med"} />
      <Link
        activeClass="active"
        to={scrollTo}
        spy={true}
        smooth={true}
        duration={500}
      >
        <ScrollArrow />
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
  padding: 1rem;
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
  font-weight: 300;
`;

export default HeaderImageBox;
