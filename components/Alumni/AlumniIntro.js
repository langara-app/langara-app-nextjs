import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const AlumniIntro = (props) => {
  const {
    profile_image,
    alumni_name,
    comment,
    stream,
    graduation_year,
  } = props;

  return (
    <Container>
      <AlumniImageTopContainer>
        <AlumniImageTop src={profile_image} />
      </AlumniImageTopContainer>
      <AlumniComment>"{comment}"</AlumniComment>
      <PersonalInfo size={"big"}>{alumni_name}</PersonalInfo>
      <PersonalInfo>Stream chosen - {stream}</PersonalInfo>
      <PersonalInfo>{graduation_year}</PersonalInfo>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: white;
  margin: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const AlumniImageTopContainer = styled.div`
  position: absolute;
  top: -${(50 / 375) * 100}vw;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 40%;

  @media only screen and (min-width: 415px) {
    top: -${(60 / 375) * 100}vw;
  }
  @media only screen and (min-width: 540px) {
    top: -${(75 / 375) * 100}vw;
  }
`;
const AlumniImageTop = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;

const AlumniComment = styled.p`
  padding-top: ${(55 / 375) * 100}vw;
  font-weight: 300;
  font-size: 13px;
  color: #707070;
  text-align: center;
`;

const PersonalInfo = styled.span`
  display: block;
  font-size: ${({ size }) => (size === "big" ? 18 : 13)}px;
  font-weight: ${({ size }) => (size === "big" ? 600 : 300)};
  color: #707070;
`;

export default AlumniIntro;
