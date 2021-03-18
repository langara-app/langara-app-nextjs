import React from "react";
import styled from "styled-components";
import useWindowWidth from "../components/Hooks/useWindowWidth";

const Summary = ({ summaryData, homeData, id }) => {
  const width = useWindowWidth();

  return width < 768 ? (
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
  ) : id === 0 ? (
    <SummaryContainerWithTitle>
      <Title type={"summary"}>{homeData.summary.title}</Title>
      <SummaryContainer color={summaryData.tag} index={id}>
        <div>
          <ImageContainer>
            <img
              style={{ display: "block", width: "100%" }}
              src="https://dummyimage.com/600x400/b8b8b8/fff"
            />
          </ImageContainer>
        </div>
        <div>
          <SummaryTitle color={summaryData.tag}>
            {summaryData.title}
          </SummaryTitle>
          <SummaryDescription color={summaryData.tag}>
            {summaryData.description}
          </SummaryDescription>
        </div>
      </SummaryContainer>
    </SummaryContainerWithTitle>
  ) : (
    <SummaryContainer color={summaryData.tag} index={id}>
      <div>
        <SummaryTitle color={summaryData.tag}>{summaryData.title}</SummaryTitle>
        <SummaryDescription color={summaryData.tag}>
          {summaryData.description}
        </SummaryDescription>
      </div>
      <div>
        <ImageContainer>
          <img
            style={{ display: "block", width: "100%" }}
            src="https://dummyimage.com/600x400/b8b8b8/fff"
          />
        </ImageContainer>
      </div>
    </SummaryContainer>
  );
};

const SummaryContainerWithTitle = styled.div`
  @media only screen and (min-width: 768px) {
    background-color: #675d51;
    color: white;
    height: ${(902 / 1366) * 100}vw;
  }
`;
const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) =>
    color === "design" ? "#675D51" : "#EFFCFA"};
  color: white;
  padding: 35px;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: unset;
    height: ${(902 / 1366) * 100}vw;
  }
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

const Title = styled.h2`
  text-align: center;
  margin-top: 0;
  padding-top: ${({ type }) =>
    type === "summary" ? (120 / 375) * 100 : (47 / 375) * 100}vw;
  padding-left: ${({ type }) => (type === "summary" ? "5.5rem" : "35px")};
  padding-right: ${({ type }) => (type === "summary" ? "5.5rem" : "35px")};
  line-height: ${({ type }) => (type === "summary" ? 1.5 : 1.1)};
  font-size: 32px;
  @media only screen and (min-width: 768px) {
    padding-top: 0;
    font-size: ${(43 / 1366) * 100}vw;
  }
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

  @media only screen and (min-width: 768px) {
    position: static;
    top: unset;
    left: unset;
    transform: unset;
    font-size: ${(40 / 1366) * 100}vw;
  }
`;
const SummaryDescription = styled.p`
  font-weight: 300;
  font-size: 13px;
  text-align: center;
  color: ${({ color }) => (color === "design" ? "white" : "#675D51")};
  @media only screen and (min-width: 768px) {
    font-size: ${(19 / 1366) * 100}vw;
  }
`;
const ImageContainer = styled.div`
  width: 30%;
  margin-top: 3rem;
`;

export default Summary;
