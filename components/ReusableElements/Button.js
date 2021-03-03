import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return <BtnElement>{text}</BtnElement>;
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
  margin: 0.5rem auto;
`;

export default Button;
