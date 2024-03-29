import React from "react";
import styled from "styled-components";
import { WmddData } from "../../lib/WmddData";
import styles from "../../styles/WMDD.module.css";

const ProgramCurriculum = () => {
  const curriculumInfo = WmddData.curriculum;
  const curriculumDetails = curriculumInfo.map((curriculum, index) => (
    <div key={index}>
      <p>{curriculum.description}</p>
    </div>
  ));

  return (
    <Container>
      <Title>Program Curriculum</Title>
      <Body>
        <Movie className="intro-movie">
          <iframe
            frameBorder="0"
            className={styles.iframe}
            src="https://www.youtube.com/embed/BTciK1vJ8QY?rel=0"
            title="intro-movie"
          ></iframe>
        </Movie>
      </Body>
      <Details>{curriculumDetails}</Details>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 50px 0;
  font-size: 15px;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: ${(19 / 1366) * 100}vw;
    text-align: left;
    padding-right: 3rem;
  }
`;
const Title = styled.h3`
  grid-column: 2;
  text-align: center;
  font-size: 32px;

  @media only screen and (min-width: 768px) {
    height: 50%;
    font-size: ${(50 / 1366) * 100}vw;
    text-align: left;
    margin-bottom: 0;
  }
`;
const Body = styled.div`
  @media only screen and (min-width: 768px) {
    margin-top: auto;
    margin-bottom: auto;
    text-align: left;
    font-size: ${(19 / 1366) * 100}vw;
  }
`;
const Details = styled.div`
  padding: 0 2.5rem;
  text-align: left;

  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`;
const Movie = styled.div``;

export default ProgramCurriculum;
