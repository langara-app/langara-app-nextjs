import React from "react";
import styled from "styled-components";
import ProjectButton from "../ReusableElements/ProjectButton";
import useWindowWidth from "../../components/Hooks/useWindowWidth";

const ProjectCategory = (props) => {
  const { title, description, color, image, slug, id } = props;
  const width = useWindowWidth();

  return width < 768 ? (
    <Container color={color} id={id}>
      <ImageContainer>
        <img src={image} alt="project category image" />
      </ImageContainer>
      <h1>{title}</h1>
      <p>{description}</p>
      <ProjectButton text={"See Projects"} type={"category"} category={slug} />
    </Container>
  ) : (
    <Container color={color} id={id}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <ImageContainer>
        <img src={image} alt="project category image" />
        <ProjectButton
          text={"See Projects"}
          type={"category"}
          category={slug}
        />
      </ImageContainer>
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
  color: ${({ id }) => (id === 1 ? "white" : "#675d51")};
  h1 {
    margin: ${(30 / 375) * 100}vw 0 ${(23 / 375) * 100}vw;
    font-size: ${(24 / 365) * 100}vw;
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: 15px;
    font-weight: 200;
    text-align: center;
    margin-bottom: ${(54 / 375) * 100}vw;
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
      font-size: ${(45 / 1365) * 100}vw;
      margin: 0;
      text-align: left;
    }

    p {
      font-size: ${(21 / 1365) * 100}vw;
      margin: 0;
      margin-top: ${(21 / 1365) * 100}vw;
      text-align: left;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;

    img {
      margin-bottom: ${(30 / 1365) * 100}vw;
      width: ${(350 / 1365) * 100}vw;
    }
  }
`;

export default ProjectCategory;
