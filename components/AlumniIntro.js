import React from "react";
import styled from "styled-components";

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
      <div>
        <img src={profile_image} style={{ display: "block", width: "100%" }} />
      </div>
      <PersonalInfo size={"big"}>{alumni_name}</PersonalInfo>
      <PersonalInfo>Stream chosen - {stream}</PersonalInfo>
      <PersonalInfo>{graduation_year}</PersonalInfo>
      <p>{comment}</p>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  border: 1px black solid;
`;
const PersonalInfo = styled.span`
  display: block;
`;

export default AlumniIntro;
