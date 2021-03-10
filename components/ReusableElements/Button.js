import React from "react";
import styled from "styled-components";

const Button = ({ text, margin }) => {
  return <BtnElement margin={margin}>{text}</BtnElement>;
};

const BtnElement = styled.button`
  border: none;
  color: black;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  cursor: pointer;
  width: 80%;
  margin: ${({ margin }) => margin}rem auto;
`;

export default Button;
