import React from "react";
import styled from "styled-components";

const Button = ({ text, margin, font, size }) => {
  return (
    <BtnElement margin={margin} font={font} size={size}>
      {text}
    </BtnElement>
  );
};

const BtnElement = styled.button`
  color: #665c50;
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
  border: 2px solid #665c50;
  background-color: white;
`;

export default Button;
