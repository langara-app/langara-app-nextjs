import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
// import ProjectButton from "../ReusableElements/ProjectButton";

const Project = ({ project }) => {
  const data = project[0];

  return (
    <div>
      <div>
        <Image src={data.acf.app_picture} width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Project;

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=100"
  );
  const projects = await res.json();

  return {
    paths: projects.map((project) => ({
      params: { category: project.categories_slugs[0], project: project.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.project;
  const res = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=100"
  );
  const projects = await res.json();

  return {
    props: {
      project: projects.filter((project) => project.slug === slug),
    },
  };
}
