import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { CommonStyling } from "../../lib/CommonStyling";

const Button = ({
  text,
  margin,
  font,
  size,
  color,
  bcg,
  layout,
  section,
  to,
  link,
  borderColor,
}) => {
  return (
    <BtnElement
      margin={margin}
      fontSize={font}
      size={size}
      color={color}
      data-bcg={bcg}
      layout={layout}
      data-section={section}
      data-bordercolor={borderColor}
    >
      {to === "overview" ? (
        <Link href={"/program-overview"}>{text}</Link>
      ) : (
        <a href={link} target="_blank">
          {text ? text : "Apply"}
        </a>
      )}
    </BtnElement>
  );
};

const BtnElement = styled.button`
  z-index: 3;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: ${({ fontSize }) => fontSize}rem;
  cursor: pointer;
  border-radius: 4px;

  font-weight: ${({ size }) =>
    size === "med" ? "bold" : size === "big" ? "bold" : "600"};

  margin: ${({ margin }) => margin}rem auto;
  font-family: ${CommonStyling.primaryFontFamily};
  border: 2px solid
    ${(allProps) =>
      allProps["data-bordercolor"]
        ? allProps["data-bordercolor"]
        : ({ color }) => color};
  background-color: ${(allProps) => allProps["data-bcg"]};
  color: ${({ color }) => color};

  a {
    padding: 12px 32px;
    display: block;
  }

  /* @media only screen and (min-width: 768px) {
    margin: ${({ layout }) => (layout === "desktop" ? 0 : (30 / 1366) * 100)}vw
      ${(allProps) =>
    allProps["data-section"] === "joinWMDD" ? (500 / 1366) * 100 : 0}vw;
    margin-top: ${(allProps) =>
    allProps["data-section"] === "project" || "alumni"
      ? (20 / 1366) * 100
      : 0}vw;

    margin-right: ${(allProps) =>
    allProps["layout"] === "desktop"
      ? (315 / 1366) * 100
      : allProps["data-section"] === "joinWMDD"
      ? (500 / 1366) * 100
      : (120 / 1366) * 100}vw;

    font-size: ${(allProps) =>
    allProps["data-section"] === "joinWMDD"
      ? (18 / 1366) * 100
      : (24 / 1366) * 100}vw;

    a {
      padding: ${(allProps) =>
    allProps["layout"] === "desktop" ? (10 / 1366) * 100 : (12 / 1366) * 100}vw
        ${(allProps) =>
    allProps["data-section"] === "joinWMDD"
      ? (10 / 1366) * 100
      : (34 / 1366) * 100}vw;
    }
  } */
`;

export default Button;
