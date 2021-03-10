import React from "react";
import styled from "styled-components";
import Button from "./ReusableElements/Button";
import ScrollArrow from "./ReusableElements/ScrollArrow";

const HeaderImageBox = ({ type, title, desc, btnText, img }) => {
  const scrollDown = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };
  return (
    <HeaderContainer img={img}>
      <h1>{title}</h1>
      <HeaderP>{desc}</HeaderP>
      <Button text={btnText} margin={0.5} />
      <ScrollArrow onClick={scrollDown} />
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
  &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background: rgba(241, 90, 34, 0.3);
      display: block;
`;

const HeaderP = styled.p`
  margin: 3rem 0;
`;

export default HeaderImageBox;
