import React from "react";
import styled from "styled-components";
import { WmddData } from "../../lib/WmddData";
import instructorTylerCropped from "../../assets/img/wmdd/instructorTylerCropped.jpg";

const AfterProgram = () => {
  return (
    <Container>
      <AfterProgramContainer>
        <Title>{WmddData.complete_program.title}</Title>
        <InstructorImage src={instructorTylerCropped} />
      </AfterProgramContainer>
      <Body>{WmddData.complete_program.description}</Body>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }
`;
const AfterProgramContainer = styled.div``;

const InstructorImage = styled.img`
  max-width: 100%;
  height: auto;
`;
const Title = styled.h1`
  color: white;
  font-size: 32px;
  background-color: #c36448;
  padding-top: 50px;
  padding-bottom: 20px;
  margin-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (min-width: 768px) {
    height: 50%;
    font-size: ${(50 / 1366) * 100}vw;
    margin-top: 0;
  }
`;
const Body = styled.p`
  padding: 0 2.5rem;
  margin-bottom: 0;
  padding-bottom: 2.5rem;
  font-size: 15px;

  @media only screen and (min-width: 768px) {
    margin-top: auto;
    margin-bottom: auto;
    text-align: left;
    font-size: ${(19 / 1366) * 100}vw;
    grid-column: 2;
    text-align: left;
  }
`;

export default AfterProgram;
