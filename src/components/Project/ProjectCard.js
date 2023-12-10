import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";

const ProjectCard = ({ cardData, showOutline }) => {
  const { slug, picture, name, description } = cardData;
  return (
    <Container data-cardborder={showOutline}>
      <div className="card">
        <Link href={`/projects/${slug}`}>
          <div className="imgWrap">
            <Image
              loading="lazy"
              unoptimized={true}
              src={picture}
              width={280}
              height={280}
              alt={`${name} app cover`}
            />
          </div>
          <div className="imgTextWrap">
            <h3 className="projectTitle">{name}</h3>
            <p className="projectDesc">{description}</p>
          </div>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .card {
    width: 300px;
    height: 480px;
    border-radius: 1rem;
    background-color: ${CommonStyling.backgroundColor};
    border: ${(props) =>
      props["data-cardborder"] ? "2px solid #E6E6E6" : "none"};
  }
  .imgTextWrap {
    padding: 1rem;
  }

  .imgTextWrap > .projectTitle {
    color: ${CommonStyling.primaryColor};
    font-size: ${CommonStyling.h3FontSize};
    font-weight: 500;
    margin-bottom: 0.2rem;
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

export default ProjectCard;
