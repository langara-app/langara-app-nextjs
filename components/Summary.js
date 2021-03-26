import React from "react";
import styled from "styled-components";
import useWindowWidth from "../components/Hooks/useWindowWidth";
import Slide from "react-reveal/Slide";

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
      <Slide ssrFadeout bottom>
        <Title type={"summary"}>{homeData.summary.title}</Title>
      </Slide>
      <SummaryContainer color={summaryData.tag} index={id}>
        <GridDivider></GridDivider>
        <GridDivider style={{ backgroundColor: "#707070" }}>
          <ImageContainer>
            <img
              style={{ display: "block", width: "100%" }}
              src="https://dummyimage.com/600x400/b8b8b8/fff"
            />
          </ImageContainer>
        </GridDivider>
        <GridDivider
          index={id}
          style={{ alignSelf: "flex-end", marginRight: "13vw" }}
        >
          <SummaryTitle color={summaryData.tag}>
            {summaryData.title}
          </SummaryTitle>
          <SummaryDescription color={summaryData.tag} index={id}>
            {summaryData.description}
          </SummaryDescription>
        </GridDivider>
      </SummaryContainer>
    </SummaryContainerWithTitle>
  ) : (
    <SummaryContainer color={summaryData.tag} index={id}>
      <GridDivider
        index={id}
        style={{ alignSelf: "center", marginLeft: "11vw", marginRight: "8vw" }}
      >
        <SummaryTitle color={summaryData.tag}>{summaryData.title}</SummaryTitle>
        <SummaryDescription color={summaryData.tag} index={id}>
          {summaryData.description}
        </SummaryDescription>
      </GridDivider>
      <GridDivider style={{ backgroundColor: "#FFF2A8" }}>
        <ImageContainer>
          <img
            style={{ display: "block", width: "100%" }}
            src="https://dummyimage.com/600x400/b8b8b8/fff"
          />
        </ImageContainer>
      </GridDivider>
      <GridDivider></GridDivider>
    </SummaryContainer>
  );
};

const SummaryContainerWithTitle = styled.div`
  @media only screen and (min-width: 768px) {
    background-color: #675d51;
    color: white;
    padding-bottom: ${(112 / 1365) * 100}vw;
    position: relative;
  }
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) =>
    color === "design" ? "#675D51" : "#EFFCFA"};
  color: white;
  padding: 35px ${(186 / 1366) * 100}vw;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: ${({ index }) =>
      index === 0 ? "1.6fr 3.3fr 5.1fr" : "5.4fr 3.5fr 1.1fr"};
    grid-column-gap: ${(57 / 1365) * 100}vw;
    align-items: unset;
    height: ${(790 / 1366) * 100}vw;
    padding: 0;
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
  top: 50%;
  left: 50%;
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
    text-align: left;
  }
`;

const GridDivider = styled.div`
  /* align-self: ${({ index }) => (index === 0 ? "flex-end" : "center")}; */
`;
const SummaryDescription = styled.p`
  font-weight: 300;
  font-size: 13px;
  text-align: center;
  color: ${({ color }) => (color === "design" ? "white" : "#675D51")};
  @media only screen and (min-width: 768px) {
    font-size: ${(19 / 1366) * 100}vw;
    text-align: left;
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  width: 30%;
  margin-top: 3rem;
`;

export default Summary;
