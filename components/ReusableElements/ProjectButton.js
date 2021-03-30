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
        <Link href={link}>
          <a>{text}</a>
        </Link>
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
  padding: ${(5 / 365) * 100}vw ${(24 / 365) * 100}vw;

  a {
    font-size: ${({ type }) =>
      type === "category" || type === "single"
        ? (24 / 365) * 100
        : (16 / 365) * 100}vw;
    text-decoration: none;
  }

  @media only screen and (min-width: 768px) {
  }
`;

export default ProjectButton;
