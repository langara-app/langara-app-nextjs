
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../Hooks/useWindowWidth";
import { CommonStyling } from "../../lib/CommonStyling";



const ProjectCard = ({ cardData, showOutline }) => {
  const {slug, picture, name, description } = cardData;
  return (
    <Container data-cardborder={showOutline}>
      <div className="card">
        <Link href={`/projects/${slug}`}>
          <div className="imgWrap">
            <img src={picture} alt="project image" />
          </div>
          <div className="imgTextWrap">
            <p className="projectTitle">{name}</p>
            <p className="projectDesc">{description}</p>
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
  border: ${props => (props['data-cardborder'] ? '2px solid #E6E6E6' : 'none')};

}
.imgTextWrap {
  padding: 1rem;
}

.imgTextWrap > .projectTitle {
  color: ${CommonStyling.primaryColor};
  font-size: ${CommonStyling.h3FontSize};
  margin-bottom: .2rem;
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