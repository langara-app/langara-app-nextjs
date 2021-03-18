import React from "react";
import styled from "styled-components";

const Button = ({ text, margin, font, size, color, bcg }) => {
  return (
    <BtnElement margin={margin} font={font} size={size} color={color} bcg={bcg}>
      {text}
    </BtnElement>
  );
};

const BtnElement = styled.button`
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: ${({ font }) => font}px;
  cursor: pointer;
  padding: ${({ size }) =>
    size === "med"
      ? "8px 24px"
      : size === "big"
      ? "10px 53px"
      : size === "long"
      ? "14px 10px"
      : "14px 10px"};
  font-weight: ${({ size }) =>
    size === "med" ? "bold" : size === "big" ? "bold" : "600"};

  margin: ${({ margin }) => margin}rem auto;
  font-family: Kanit;
  border: 2px solid ${({ color }) => color};
  background-color: ${({ bcg }) => bcg};
  color: ${({ color }) => color};

  @media only screen and (min-width: 768px) {
    margin: ${(30 / 1366) * 100}vw 0;
    margin-right: ${(120 / 1366) * 100}vw;
    padding: ${(12 / 1366) * 100}vw ${(34 / 1366) * 100}vw;
    font-size: ${(24 / 1366) * 100}vw;
  }
`;

export default Button;
