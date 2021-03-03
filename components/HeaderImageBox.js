import React from "react";
import styled from "styled-components";
import Button from "./ReusableElements/Button";
// import banner from "../assets/img/home-banner-mobile.jpg";

const HeaderImageBox = ({ type, title, desc, btnText, img }) => {
  return (
    <HeaderContainer img={img}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <Button text={btnText} />
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
`;

export default HeaderImageBox;
