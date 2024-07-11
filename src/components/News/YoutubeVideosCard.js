import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { CommonStyling } from "../../lib/CommonStyling";

// import cards
// import ProjectCard from "./ProjectCard";
import ArticlesCard from "./ArticlesCard";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const YoutubeVideosCard = ({ videos }) => {
  return (
    <Container>
      <div className="recentArticles-wrapper">
        {videos.map((video) => (
          <TopVideo key={video.id.videoId}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              width={"100%"}
              height={"100%"}
            />
          </TopVideo>
        ))}
      </div>
      <div className="youtube-channel-wrapper">
        <Link href="#explore">Visit WMDD Youtube Channel</Link>
      </div>
    </Container>
  );
};

const TopVideo = styled.div`
  aspect-ratio: 16/9;
  iframe {
    border-radius: 16px;
  }
  .react-player__preview {
    border-radius: 16px;
  }

  @media screen and (min-width: 768px) {
    height: 100% !important;
  }
`;

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  .recentArticles-wrapper {
    display: flex;
    flex-direction: row-wrap;
    gap: 2rem;
  }

  .recentArticles-wrapper > div {
    margin: 0 auto;
    flex: 1;
  }

  .youtube-channel-wrapper {
    padding: 4rem;
    text-align: center;
    font-size: ${CommonStyling.body1FontSize};
    font-weight: bold;
  }
  .youtube-channel-wrapper > a {
    color: ${CommonStyling.primaryColor};
    text-decoration-line: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2.5px;
  }
  .youtube-channel-wrapper > a:hover {
    text-decoration: none;
  }

  @media only screen and (max-width: 1020px) {
    .recentArticles-wrapper {
      height: unset;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .recentArticles-wrapper > div {
      width: 60%;
      flex: 1;
    }
  }

  @media only screen and (max-width: 690px) {
    .recentArticles-wrapper > div {
      width: 80%;
    }
  }
  @media only screen and (max-width: 460px) {
    .recentArticles-wrapper > div {
      width: 90%;
      flex: 1;
    }
  }
`;

export default YoutubeVideosCard;
