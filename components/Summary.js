import React from "react";
import styled from "styled-components";

const Summary = ({ description }) => {
  return (
    <SummaryContainer>
      <ImageContainer>
        <img
          style={{ display: "block", width: "100%" }}
          src="https://dummyimage.com/600x400/b8b8b8/fff"
        />
      </ImageContainer>
      <p style={{ textAlign: "center" }}>{description}</p>
    </SummaryContainer>
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
