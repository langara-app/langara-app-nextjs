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
  hover,
  mobile,
}) => {
  return (
    <BtnElement
      margin={margin}
      font={font}
      size={size}
      color={color}
      bcg={bcg}
      layout={layout}
      section={section}
      borderColor={borderColor}
      hover={hover}
      mobile={mobile}
    >
      {to === "overview" ? (
        <Link href={"/program-overview"}>
          <a> {text}</a>
        </Link>
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
  font-size: ${({ font }) => font}rem;
  cursor: pointer;
  border-radius: 4px;

  font-weight: ${({ size }) =>
    size === "med" ? "bold" : size === "big" ? "bold" : "600"};

  margin: ${({ margin }) => margin}rem auto;
  font-family: ${CommonStyling.primaryFontFamily};
  border: 2px solid
    ${({ borderColor }) => (borderColor ? borderColor : ({ color }) => color)};
  background-color: ${({ bcg }) => bcg};
  color: ${({ color }) => color};

  a {
    padding: 12px 32px;
    display: block;
  }

  ${({ hover }) =>
    hover &&
    `
    &:hover {
      color: #f15a22;
      background-color: #ffffff;
      box-shadow: 0px 0px 0px 1px #f15a22 inset;
    }
  `} /* @media only screen and (min-width: 768px) {
    margin: ${({ layout }) => (layout === "desktop" ? 0 : (30 / 1366) * 100)}vw
      ${({ section }) => (section === "joinWMDD" ? (500 / 1366) * 100 : 0)}vw;
    margin-top: ${({ section }) =>
    section === "project" || "alumni" ? (20 / 1366) * 100 : 0}vw;

    margin-right: ${({ layout, section }) =>
    layout === "desktop"
      ? (315 / 1366) * 100
      : section === "joinWMDD"
      ? (500 / 1366) * 100
      : (120 / 1366) * 100}vw;

    font-size: ${({ section }) =>
    section === "joinWMDD" ? (18 / 1366) * 100 : (24 / 1366) * 100}vw;

    a {
      padding: ${({ layout, section }) =>
    layout === "desktop" ? (10 / 1366) * 100 : (12 / 1366) * 100}vw
        ${({ section }) =>
    section === "joinWMDD" ? (10 / 1366) * 100 : (34 / 1366) * 100}vw;
    }
  } */

  @media screen and (max-width: 425px) {
    ${({ mobile }) => mobile && `width: 100%`}
  }
`;

export default Button;
