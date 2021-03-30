import React from "react";
import styled from "styled-components";
import ProjectButton from "../ReusableElements/ProjectButton";

const ProjectCategory = (props) => {
  const { title, description, color, image, slug, id } = props;
  return (
    <Container color={color} id={id}>
      <ImageContainer>
        <img src={image} alt="project category image" />
      </ImageContainer>
      <h1>{title}</h1>
      <p>{description}</p>
      <ProjectButton text={"See Projects"} type={"category"} category={slug} />
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
  color: ${({ id }) => (id === 1 ? "white" : "#675d51")};
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
    margin-bottom: ${(54 / 365) * 100}vw;
  }
`;

const ImageContainer = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export default ProjectCategory;
