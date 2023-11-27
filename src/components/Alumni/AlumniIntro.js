import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

import playIcon from "../../assets/img/wmdd/playIcon2.svg";
import useWindowWidth from "../Hooks/useWindowWidth";
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

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const width = useWindowWidth();

  return (
    <Card>
      <Top>
        <Video>
          {hasWindow && (
            <ReactPlayer
              url={movie_link}
              width={"100%"}
              height={width >= 490 && width <= 768 ? "400px" : "300px"}
              light={profile_image}
              playing
            />
          )}
        </Video>
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

const Video = styled.div`
  .react-player__preview {
    border-radius: 16px;
    background-position: unset !important;

    @media screen and (max-width: 1280px) {
      background-position: center center !important;
    }

    @media screen and (min-width: 490px) and (max-width: 768px) {
      background-position: center 0.5% !important;
    }

    @media screen and (max-width: 490px) {
      background-position: center 0.1% !important;
    }
  }
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
