import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

const Summary = ({ summaryData }) => {
  return (
    <Slide ssrFadeout bottom>
      <SummaryContainer>
        <h3>{summaryData.title}</h3>
        <p style={{ textAlign: "center" }}>{summaryData.description}</p>
        <ImageContainer>
          <img
            style={{ display: "block", width: "100%" }}
            src="https://dummyimage.com/600x400/b8b8b8/fff"
          />
        </ImageContainer>
      </SummaryContainer>
    </Slide>
  );
};

const ImageContainer = styled.div`
  width: 30%;
  margin: 0.5rem auto;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem 1rem;
`;

export default Summary;
