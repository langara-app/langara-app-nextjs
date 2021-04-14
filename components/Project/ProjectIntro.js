import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ProjectButton from "../ReusableElements/ProjectButton";
import useWindowWidth from "../../components/Hooks/useWindowWidth";

const ProjectIntro = (props) => {
  const { acf, category, slug } = props;
  const width = useWindowWidth();

  return width < 768 ? (
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
      <p dangerouslySetInnerHTML={{ __html: acf.app_short_description }}></p>
      <ProjectButton
        text={"See project details"}
        data={props}
        type={"intro"}
        category={category}
        project={slug}
      />
    </Container>
  ) : (
    <Container>
      <ImageContainer>
        <ImageStyle
          src={acf.app_picture}
          alt="project image"
          width={1000}
          height={1000}
        />
      </ImageContainer>
      <div>
        <h1>{acf.name_of_the_project}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: acf.app_short_description }}
          style={{ marginBottom: "0.8vw" }}
        ></p>
        <ProjectButton
          text={"See project details"}
          data={props}
          type={"intro"}
          category={category}
          project={slug}
        />
      </div>
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
  margin: ${(30 / 375) * 100}vw ${(24 / 375) * 100}vw;
  border-radius: 30px;
  h1 {
    margin: ${(30 / 375) * 100}vw 0 ${(23 / 375) * 100}vw;
    font-size: ${(24 / 375) * 100}vw;
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: ${(13 / 375) * 100}vw;
    font-weight: 200;
    text-align: center;
    margin-bottom: ${(11 / 375) * 100}vw;
  }

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${(145 / 1365) * 100}vw;
    padding: ${(64 / 1365) * 100}vw ${(127 / 1365) * 100}vw
      ${(48 / 1365) * 100}vw ${(72 / 1365) * 100}vw;
    margin: ${(30 / 1365) * 100}vw ${(24 / 1365) * 100}vw;

    h1 {
      font-size: ${(33 / 1365) * 100}vw;
      margin: 0;
      text-align: left !important;
    }

    p {
      font-size: ${(12 / 1365) * 100}vw;
      margin: 0;
      margin-top: ${(21 / 1365) * 100}vw;
      text-align: left;
    }
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
  /* display: block; */
  /* width: 100%; */
  height: auto !important;
  min-height: auto !important;
  border-radius: 10px;
`;

export default ProjectIntro;
