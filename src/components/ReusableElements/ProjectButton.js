import React from "react";
import Link from "next/link";
import styled from "styled-components";

const ProjectButton = ({ text, type, category, project, link }) => {
  return (
    <BtnElement type={type}>
      {type === "category" ? (
        <Link href={`/projects/${category}`}>
          <a>{text}</a>
        </Link>
      ) : type === "intro" ? (
        <Link href={`/projects/${category}/${project}`}>
          <a>{text}</a>
        </Link>
      ) : (
        <a href={link} target="_blank">
          {text}
        </a>
      )}
    </BtnElement>
  );
};

const BtnElement = styled.button`
  text-align: center;
  text-decoration: none;
  display: block;
  cursor: pointer;
  border: 2px solid #675d51;
  background-color: white;
  color: #675d51;
  font-weight: 700;
  font-family: "Kanit";

  a {
    font-size: ${({ type }) =>
      type === "category" || type === "single"
        ? (24 / 375) * 100
        : (16 / 375) * 100}vw;
    text-decoration: none;
    padding: ${(5 / 375) * 100}vw ${(24 / 375) * 100}vw;
    display: block;
  }

  @media only screen and (min-width: 768px) {
    a {
      font-size: ${({ type }) =>
        type === "category" || type === "single"
          ? (24 / 1365) * 100
          : (16 / 1365) * 100}vw;
      padding: ${(10 / 1365) * 100}vw ${(72 / 1365) * 100}vw;
      padding-left: ${({ type }) =>
        type === "intro" ? (17 / 1365) * 100 : (72 / 1365) * 100}vw;
      padding-right: ${({ type }) =>
        type === "intro" ? (17 / 1365) * 100 : (72 / 1365) * 100}vw;

      display: block;
    }
  }
`;

export default ProjectButton;
