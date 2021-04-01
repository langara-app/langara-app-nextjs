import React from "react";
import styled from "styled-components";

const WmddIntro = ({ title, desc, subtitle }) => {
  return (
    <Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Paragraph>{desc}</Paragraph>
    </Wrapper>
  );
};

export default WmddIntro;

const Subtitle = styled.h1`
    font-size: 13px;
    font-weight: 200;
    margin-bottom: 0;
    padding: 0 2.5rem;

    @media only screen and (min-width: 768px) {
      margin-bottom: 10px;
    }
`;

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
    padding-right: 150px;
  }
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #675d51;
  line-height: 1.4;
  font-weight: 200;
  font-size: 13px;
  padding: 0 2.5rem;
 
  @media only screen and (min-width: 768px) {
    font-size: ${(19 / 1365) * 100}vw;

  }
`;

const Wrapper = styled.section`
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;
