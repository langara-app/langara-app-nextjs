import { CommonStyling } from "@/lib/CommonStyling";
import React, { useRef } from "react";
import styled from "styled-components";

const AlumniIntro = (props) => {
  const { image, name, title } = props;

  return (
    <Card>
      <ImageBlock>
        <ProfileImage src={image} />
      </ImageBlock>
      <DescriptionBlock>
        <div>{name}</div>
        <div>{title}</div>
      </DescriptionBlock>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageBlock = styled.div`
  // border: 1px solid #000000;
  background-color: #000000;
  border-radius: 16px;
  height: 300px;
  width: 175px;
  position: relative;
  margin-bottom: 1rem;

  // @media only screen and (min-width: 768px) {
  //   height: 300px;
  //   width: 175px;
  // }
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 2;
  border-radius: 16px;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div:nth-child(1) {
    font-weight: 700;
    font-size: ${CommonStyling.body1FontSize}
    line-height: normal;
    color: #000;

  }

  div:nth-child(2) {
    font-weight: 400;
    font-size: ${CommonStyling.body2FontSize}
    line-height: normal;
    color: #000;

  }
`;

export default AlumniIntro;
