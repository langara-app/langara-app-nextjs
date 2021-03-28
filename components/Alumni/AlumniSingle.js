import React from "react";
import styled from "styled-components";

const AlumniSingle = ({ data, length, index }) => {
  return (
    <Container length={length} index={index}>
      <Iframe
        src={data.movie_link}
        title="alumna-movie"
        frameBorder="0"
      ></Iframe>

      <DescriptionContainer>
        <Name>{data.alumni_name}</Name>
        <Description>
          {data.job_position} at {data.company}
        </Description>
        <Description className="stream">
          Graduate of WMDD {data.stream} Stream
        </Description>
        <Description className="year">
          ({data.starting_year} - {data.graduation_year})
        </Description>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    width: ${(560 / 1365) * 100}vw;
    margin-bottom: ${({ length, index }) =>
      length === index ? (30 / 1365) * 100 : (228 / 1365) * 100}vw;
  }
`;

const Iframe = styled.iframe`
  width: 100vw;
  height: ${(212 / 375) * 100}vw;
  display: block;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    width: ${(560 / 1365) * 100}vw;
    height: ${(315 / 1365) * 100}vw;
  }
`;

const Name = styled.h3`
  color: #c26448;
  text-align: center;
  margin: 0.5rem;
`;
const DescriptionContainer = styled.div`
  margin-bottom: 5rem;
`;
const Description = styled.p`
  font-size: 13px;
  font-weight: 200;
  text-align: center;
  margin: 0.2rem 0;
`;

export default AlumniSingle;
