import React from "react";
import styled from "styled-components";

const Button = ({ text, margin, font, size, color, bcg, layout, section }) => {
  return (
    <BtnElement
      margin={margin}
      font={font}
      size={size}
      color={color}
      bcg={bcg}
      layout={layout}
      section={section}
    >
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
    margin: ${({ layout }) => (layout === "desktop" ? 0 : (30 / 1366) * 100)}vw
      ${({ section }) => (section === "joinWMDD" ? (500 / 1366) * 100 : 0)}vw;

    margin-right: ${({ layout, section }) =>
      layout === "desktop"
        ? (315 / 1366) * 100
        : section === "joinWMDD"
        ? (500 / 1366) * 100
        : (120 / 1366) * 100}vw;

    padding: ${({ layout, section }) =>
        layout === "desktop" ? (10 / 1366) * 100 : (12 / 1366) * 100}vw
      ${({ section }) =>
        section === "joinWMDD" ? (10 / 1366) * 100 : (34 / 1366) * 100}vw;

    font-size: ${({ section }) =>
      section === "joinWMDD" ? (18 / 1366) * 100 : (24 / 1366) * 100}vw;
  }
`;

export default Button;
