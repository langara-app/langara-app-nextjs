import React from "react";
import styled from "styled-components";

const TitleBox = ({ title, desc, subtitle }) => {

  return (
    <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Paragraph>{desc}</Paragraph>
    </Wrapper>
  );
};

export default TitleBox;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #C36448;
  font-weight: 800;
  font-size: 32px;
`;

const Subtitle = styled.h2`
  font-size: 1.25em;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1em;
  text-align: left;
  color: #675D51;
  line-height: 1.4;
  font-weight: 300;
  font-size: 13px;
  padding: 2rem;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  // padding: 2em;
`;