import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ProjectButton from "../ReusableElements/ProjectButton";

const ProjectIntro = (props) => {
  const { acf, category, slug } = props;

  return (
    <Container>
      <ImageContainer>
        <ImageStyle
          src={acf.app_picture}
          alt="project image"
          width={1000}
          height={1000}
        />
      </ImageContainer>
      <h1>{acf.name_of_the_project}</h1>
      <p dangerouslySetInnerHTML={{ __html: acf.app_description }}></p>
      <ProjectButton
        text={"See project details"}
        data={props}
        type={"intro"}
        category={category}
        project={slug}
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${(56 / 375) * 100}vw ${(28 / 375) * 100}vw ${(41 / 375) * 100}vw;
  margin: ${(30 / 365) * 100}vw ${(24 / 365) * 100}vw;
  border-radius: 30px;
  h1 {
    margin: ${(30 / 365) * 100}vw 0 ${(23 / 365) * 100}vw;
    font-size: ${(24 / 365) * 100}vw;
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: ${(13 / 365) * 100}vw;
    font-weight: 200;
    text-align: center;
    margin-bottom: ${(11 / 365) * 100}vw;
  }
`;

const ImageContainer = styled.div`
  /* img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
  } */
`;

const ImageStyle = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export default ProjectIntro;
