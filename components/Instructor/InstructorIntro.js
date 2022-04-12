import React, { useRef } from "react";
import styled from "styled-components";

const AlumniIntro = (props) => {
  const {
    image,
    name,
    title
  } = props;

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
  gap: 1rem;
`;

const ImageBlock = styled.div`
  border: 1px solid #000000;
  background-color: #000000;
  border-radius: 4px;
  height: 30vw;
  width: 30vw;
  position: relative;

  @media only screen and (min-width: 768px) {
    height: 15vw;
    width: 15vw;
  }
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:nth-child(1) {
    font-weight: bold;
    font-size: 1.25rem;
  }

  div:nth-child(2) {
    font-size: 0.875rem;
    color: #37474f;
    line-height: 1.25rem;
  }
`;

export default AlumniIntro;
