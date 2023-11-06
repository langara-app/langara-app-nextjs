import React from "react";
import styled from "styled-components";

const InstructorsIntro = ({ title, desc }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Paragraph>{desc}</Paragraph>
    </Wrapper>
  );
};

export default InstructorsIntro;

const Title = styled.h2`
  font-size: 1.5em;
  color: #c36448;
  font-weight: 800;
  font-size: 32px;
  margin: 0 43px;
  line-height: 1.25;

  @media only screen and (min-width: 768px) {
    line-height: 1;
    font-size: ${(50 / 1365) * 100}vw;
  }
`;
const Paragraph = styled.p`
  font-size: 1em;
  color: #675d51;
  line-height: 1.4;
  font-weight: 200;
  font-size: 15px;
  padding: 0 2.5rem;

  @media only screen and (min-width: 768px) {
    font-size: ${(19 / 1365) * 100}vw;
    margin-left: 5%;
    margin-right: 5%;
  }
`;
const Wrapper = styled.section`
  text-align: center;
`;
