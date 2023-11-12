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
          <span>{graduation_year}</span>
        </DepartmentBlock>
        <Comment>&quot;{comment}&quot;</Comment>
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
  font-size: ${CommonStyling.body2FontSize};
  line-height: ${CommonStyling.body2LineHeight};
  font-weight: 400;
  padding: 0 1rem;
  margin: 0;
`;

const VideoBlock = styled.div`
  height: 40vw;
  width: 100%;
  position: relative;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    height: 12vw;
  }

  & > iframe {
    border-radius: 16px;
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
  border-radius: 16px;
`;

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const DepartmentBlock = styled.div`
  padding: 0.5rem 0 1rem 0;
  color: ${CommonStyling.primaryColor};
  font-size: ${CommonStyling.body2FontSize};
  line-height: ${CommonStyling.body2LineHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.5rem;

  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  div:nth-child(1) {
    font-weight: 700;
    font-size: ${CommonStyling.body1FontSize};
  }

  div:nth-child(2) {
    font-size: ${CommonStyling.body2FontSize};
    max-width: 70%;
  }
`;
export default AlumniIntro;
