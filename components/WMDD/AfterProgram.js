import React from "react";
import styled from "styled-components";
import useWindowWidth from "../Hooks/useWindowWidth";
import { WmddData } from '../../lib/WmddData';
import Image from "next/image";
import instructorTyler from '../../assets/img/wmdd/instructorTyler.jpg';

const AfterProgram = (props) => {
  const width = useWindowWidth();

  return (
    <Container>
        <AfterProgramContainer>
          <Title>{WmddData.complete_program.title}</Title>
          <Image src={instructorTyler} width={1000} height={700} />
        </AfterProgramContainer>
        <Body>{WmddData.complete_program.description}</Body>
    </Container>
  )
};

const Container = styled.div`
//   position: relative;
//   background-color: white;
//   margin: 4rem 0 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0 1rem 1rem;

  @media only screen and (min-width: 768px) {
    // margin: 0;
    // padding: ${(149 / 1366) * 100}vw;
    // padding-bottom: 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const AfterProgramContainer = styled.div`

`;

const Title = styled.h1`
    color: white;
    font-size: 32px;
    background-color: #C36448;
    padding-top: 50px;
    padding-bottom: 20px;
    margin-bottom: 0;

    @media only screen and (min-width: 768px) {
        height: 50%;
        font-size: ${(50 / 1366) * 100}vw;
      }
`;

const Body = styled.p`
    padding: 0 2.5rem;

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
