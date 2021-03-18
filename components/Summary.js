import React from "react";
import styled from "styled-components";

const Summary = ({ summaryData }) => {
  return (
    <SummaryContainer color={summaryData.tag}>
      <CircleContainer>
        {summaryData.tag === "design" ? (
          <Circle color={"#596C69"}></Circle>
        ) : (
          <Circle color={"#FFF2A8"}></Circle>
        )}
        <SummaryTitle color={summaryData.tag}>{summaryData.title}</SummaryTitle>
      </CircleContainer>
      <SummaryDescription color={summaryData.tag}>
        {summaryData.description}
      </SummaryDescription>
      <ImageContainer>
        <img
          style={{ display: "block", width: "100%" }}
          src="https://dummyimage.com/600x400/b8b8b8/fff"
        />
      </ImageContainer>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) =>
    color === "design" ? "#675D51" : "#EFFCFA"};
  color: white;
  padding: 36px 32px;
`;
const CircleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Circle = styled.div`
  height: ${(151 / 375) * 100}vw;
  width: ${(151 / 375) * 100}vw;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const SummaryTitle = styled.h3`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 32px;
  width: 100%;
  text-align: center;
  color: ${({ color }) => (color === "design" ? "white" : "#675D51")};
`;
const SummaryDescription = styled.p`
  font-weight: 300;
  font-size: 13px;
  text-align: center;
  color: ${({ color }) => (color === "design" ? "white" : "#675D51")};
`;
const ImageContainer = styled.div`
  width: 30%;
  margin-top: 3rem;
`;

export default Summary;
