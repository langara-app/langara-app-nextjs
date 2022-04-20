import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ProjectButton from "../ReusableElements/ProjectButton";
import useWindowWidth from "../../components/Hooks/useWindowWidth";

const ProjectIntro = (props) => {
  const { acf, slug } = props;
  const width = useWindowWidth();

  return (
    <Container>
      <Link href={`/projects/${slug}`}>
        <div className="card">
          <div className="imgWrap">
            <img src={acf.app_picture} alt="project image" />
          </div>
          <p className="projectTitle">{acf.name_of_the_project}</p>
          <p className="projectDesc">{acf.app_short_description}</p>
        </div>
      </Link>
    </Container>
  )
};

const Container = styled.div`
  overflow: hidden;

  .imgWrap{
    max-width: 358px;
    height: 236px;


    @media only screen and (min-width: 768px){
      max-width: 100%;
    }

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  .card{
    width: 358px;
    height: 399px;
    border-radius: 4px;
    border: 1px solid #B0BEC5;
    background-color: #FFFFFF;
    margin-top: 3.8vh;
  }

  .projectTitle{
    padding: 32px 32px 8px 32px;
    font-size:1.25rem;
    font-weight: 700;
    margin: 0;
  }

  .projectDesc{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin: 0 32px 32px 32px;
    font-size:0.875rem;
    line-height: 1.25rem;
  }

  @media only screen and (min-width: 768px) {
    .card{
      width: 100%;
      cursor: pointer;
    }
  }
`;

export default ProjectIntro;
