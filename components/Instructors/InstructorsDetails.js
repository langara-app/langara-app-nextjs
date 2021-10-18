import React from "react";
import styled from "styled-components";
import {InstructorData} from '../../lib/InstructorData';

const InstructorsIntro = () => {
    const instructors = InstructorData.instructors;
    const instructorDetails = instructors.map((instructor, index) => (
      <FullWrapper key={index}>
        <InstructorImage src={instructor.image} />
        <DetailsWrapper>
          <InstructorName>{instructor.name}</InstructorName>
          <Paragraph>{instructor.title}</Paragraph>
        </DetailsWrapper>
      </FullWrapper>
    ));

  return (
    <Wrapper>
        {instructorDetails}
    </Wrapper>
  );
};

export default InstructorsIntro;

const FullWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 15px 17px;
  margin-bottom: 0;
  padding-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 315px;
  
  @media only screen and (min-width: 768px) {
    width: 330px;
}
@media only screen and (min-width: 1000px) {
  width: 350px;
}
`;
const DetailsWrapper = styled.div`
  font-size: 15px;

  @media only screen and (min-width: 768px) {
      /*font-size: ${(20 / 1365) * 100}vw;*/
      font-size: 18px;
  }
`;
const InstructorImage = styled.img`
  width: 67px;
  height: 67px;
  border-radius: 50px;

  @media only screen and (min-width: 1000px) {
    width: 100px;
    height: 100px;
}
`;
const InstructorName = styled.p`
  font-weight: 700;
  padding-left: 20px;
  margin: 0;
  align-items: center;
`;
const Paragraph = styled.p`
  font-weight: 200;
  padding-left: 20px;
  margin: 0;
  align-items: center;
  font-size: 15px;
`;
const Wrapper = styled.section`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
