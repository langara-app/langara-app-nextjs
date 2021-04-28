import React from "react";
import styled from "styled-components";
import ataglance from '../../assets/ataglance.svg';

const WmddIntro = ({ title, desc, subtitle }) => {
  return (
    <Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Paragraph>{desc}</Paragraph>
      <Illustration src={ataglance} />
    </Wrapper>
  );
};

export default WmddIntro;

const Illustration = styled.img`
  width: 315px;
  height: 333px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Subtitle = styled.h1`
  font-size: 13px;
  font-weight: 200;
  margin-bottom: 0;

  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
const Title = styled.h2`
  font-size: 1.5em;
  color: #c36448;
  font-weight: 800;
  font-size: 32px;
  line-height: 1.25;
  margin: 0;

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
  font-size: 13px;
 
  @media only screen and (min-width: 768px) {
    font-size: ${(19 / 1365) * 100}vw;
  }
`;
const Wrapper = styled.section`
  text-align: left;
  padding: 0 2.5rem;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;
