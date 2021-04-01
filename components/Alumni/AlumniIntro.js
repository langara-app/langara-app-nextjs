import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import useWindowWidth from "../Hooks/useWindowWidth";
import Image from "next/image";

const AlumniIntro = (props) => {
  const width = useWindowWidth();
  const {
    profile_image,
    alumni_name,
    comment,
    stream,
    graduation_year,
  } = props;

  return width < 768 ? (
    <Container>
      <AlumniImageTopContainer>
        {!profile_image ? null : (
          <img src={profile_image} width={1000} height={1000} />
        )}
        {/* <img src={profile_image} width={1000} height={1000} /> */}
      </AlumniImageTopContainer>
      <AlumniComment>"{comment}"</AlumniComment>
      <PersonalInfo size={"big"}>{alumni_name}</PersonalInfo>
      <PersonalInfo>Stream chosen - {stream}</PersonalInfo>
      <PersonalInfo>{graduation_year}</PersonalInfo>
    </Container>
  ) : (
    <Container>
      <AlumniImageTopContainer>
        {!profile_image ? null : (
          <img src={profile_image} width={1000} height={1000} />
        )}
        {/* <img src={profile_image} width={1000} height={1000} /> */}
      </AlumniImageTopContainer>

      <PersonalInfo size={"big"} style={{ color: "#C36448" }}>
        {alumni_name}
      </PersonalInfo>
      <AlumniComment>"{comment}"</AlumniComment>
      <PersonalInfo>Stream chosen - {stream}</PersonalInfo>
      <PersonalInfo>{graduation_year}</PersonalInfo>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: white;
  margin: 4rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 1rem;

  /* justify-content: center; */
  @media only screen and (min-width: 768px) {
    margin: 0;
    padding: ${(149 / 1366) * 100}vw;
    padding-bottom: 5vw;
  }
`;

const AlumniImageTopContainer = styled.div`
  position: absolute;
  top: -${(50 / 375) * 100}vw;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 40%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media only screen and (min-width: 415px) {
    top: -${(60 / 375) * 100}vw;
  }
  @media only screen and (min-width: 540px) {
    top: -${(75 / 375) * 100}vw;
  }
  @media only screen and (min-width: 768px) {
    position: static;
    width: ${(164 / 1366) * 100}vw;
    -webkit-transform: unset;
    margin-bottom: 1rem;
  }
`;

// const CachedImage = styled(Image)`
//   display: block;
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
// `;

const AlumniComment = styled.p`
  padding-top: 20vw;
  font-weight: 200;
  font-size: 13px;
  color: #707070;
  text-align: center;
  @media only screen and (min-width: 768px) {
    padding-top: 0vw;
    font-size: ${(19 / 1366) * 100}vw;
  }
`;

const PersonalInfo = styled.span`
  display: block;
  font-size: ${({ size }) => (size === "big" ? 18 : 13)}px;
  font-weight: ${({ size }) => (size === "big" ? 600 : 300)};
  color: #707070;
  @media only screen and (min-width: 768px) {
    font-size: ${({ size }) =>
      size === "big" ? (25 / 1366) * 100 : (19 / 1366) * 100}vw;
  }
`;

export default AlumniIntro;
