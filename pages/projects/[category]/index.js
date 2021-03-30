import React from "react";
import Link from "next/link";
import styled from "styled-components";

import ProjectIntro from "../../../components/Project/ProjectIntro";

const Category = ({ projectLists, category }) => {
  return (
    <Container>
      {category === "native-app" ? (
        <h1>Native Mobile Apps</h1>
      ) : category === "hybrid" ? (
        <h1>Hybrid Mobile Apps</h1>
      ) : (
        <h1>Full Stack Web Applications with Data Visualization</h1>
      )}

      {projectLists.map((project) => (
        <ProjectIntro {...project} category={category} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  h1 {
    text-align: center;
  }
`;

export default Category;

export async function getStaticPaths() {
  const res = await fetch("https://api.langara-app.ca/wp-json/wp/v2/projects");
  const projects = await res.json();

  return {
    paths: projects.map((project) => ({
      params: { category: project.categories_slugs[0] },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const res = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=100"
  );
  const projects = await res.json();

  return {
    props: {
      projectLists: projects.filter(
        (project) => project.categories_slugs[0] === category
      ),
      category: category,
    },
  };
}
