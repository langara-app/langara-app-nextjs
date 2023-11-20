import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../../components/Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";

const ProjectIntro = (props) => {
  const { acf, slug } = props;
  const width = useWindowWidth();

  return (
    <Container>
      <div className="card">
        <Link href={`/projects/${slug}`}>
          <div className="imgWrap">
            <img src={acf.app_picture} alt="project image" />
          </div>
          <div className="imgTextWrap">
            <p className="projectTitle">{acf.name_of_the_project}</p>
            <p className="projectDesc">{acf.app_short_description}</p>
          </div>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .card {
    width: 260px;
    height: 450px;
    border-radius: 1rem;
    background-color: ${CommonStyling.backgroundColor};
  }

  .imgTextWrap {
    padding: 1rem;
  }

  .imgTextWrap > .projectTitle {
    color: ${CommonStyling.primaryColor};
    font-size: ${CommonStyling.h3FontSize};
  }

  p.projectDesc {
    font-size: ${CommonStyling.body2FontSize};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 5; /* Set the number of lines to display */
  }

  .imgWrap {
    overflow: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .imgWrap img {
    display: block;
    aspect-ratio: 1/1;
    object-fit: cover;
    transform: scale(1.5);
  }
`;

export default ProjectIntro;
