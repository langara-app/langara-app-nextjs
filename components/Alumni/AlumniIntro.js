import React, { useRef } from "react";
import styled from "styled-components";

import playIcon from "../../assets/img/wmdd/playIcon.svg";

import { CommonStyling } from "../../lib/CommonStyling";

const AlumniIntro = (props) => {
  const {
    profile_image,
    alumni_name,
    comment,
    stream,
    graduation_year,
    company,
    job_position,
    movie_link,
  } = props;

  const profVidRef = useRef(null);

  const handleImageClick = (event) => {
    profVidRef.current.style = "z-index: 5";
    profVidRef.current.src = `${profVidRef.current.src}`;
  };

  return (
    <Card>
      <Top>
        <VideoBlock>
          <ProfileImage
            src={profile_image}
            onClick={(e) => handleImageClick(e)}
          />
          <PlayIcon
            src={playIcon}
            onClick={(e) => handleImageClick(e)}
          ></PlayIcon>
          <Video
            src={movie_link}
            ref={profVidRef}
            allow="autoplay; encrypted-media"
          ></Video>
        </VideoBlock>
        <DepartmentBlock>
          <span>{stream + " Stream"}</span>
          <span> ∙ </span>
          <span>{graduation_year}</span>
        </DepartmentBlock>
        <Comment>{comment}</Comment>
      </Top>
      <DescriptionBlock>
        <div>{alumni_name}</div>
        <div>
          {job_position} at {company}
        </div>
      </DescriptionBlock>
    </Card>
  );
};

const Card = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Top = styled.div``;

const Comment = styled.p`
  line-height: 1.5rem;
  margin: 0 0 2rem 0;
`;

const VideoBlock = styled.div`
  box-shadow: 5px -5px #00adf8;
  border: 1px solid #000000;
  background-color: #000000;
  border-radius: 4px;
  height: 40vw;
  width: 100%;
  position: relative;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    height: 12vw;
  }
`;

const PlayIcon = styled.img`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const DepartmentBlock = styled.div`
  padding: 1rem 0;
  font-family: ${CommonStyling.secondaryFontFamily};
  color: #546e7a;
  font-size: 0.875rem;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  div:nth-child(1) {
    font-weight: bold;
    font-size: 1.25rem;
  }

  div:nth-child(2) {
    font-size: 0.875rem;
    color: #37474f;
    line-height: 1.25rem;
  }
`;
export default AlumniIntro;
