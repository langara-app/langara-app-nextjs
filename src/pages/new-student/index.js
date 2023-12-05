import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useWindowWidth from "../../components/Hooks/useWindowWidth";
import { NewStudentData } from "../../lib/NewStudentData";
import { HomeData } from "../../lib/HomeData";
import newStudentBgImg from "@/assets/new-student/newStudentBgImg.png";
import { CommonStyling } from "../../lib/CommonStyling";
import ReactPlayer from "react-player/youtube";
import placeholder1 from "../../assets/img/placeholder1.jpg";
import registerImg from "@/assets/new-student/registerImg.png";
import orientationImg from "@/assets/new-student/orientationImg.png";
import bookingImg from "@/assets/new-student/bookingImg.png";
import campusMapImg from "@/assets/new-student/campusMapImg.png";
import socialBgImg from "@/assets/new-student/socialBgImg.png";
import NewStudentSection from "@/components/New-Student/NewStudentSection";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import twitterX from "@/assets/twitterX.svg";
import youtube from "@/assets/youtube.svg";
import SliderAds from "@/components/New-Student/SlideAds";

const NewStudent = () => {
  const width = useWindowWidth();

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const url = "https://youtu.be/jB5kt2GPND0?si=mk9aJu4t8v0IQykn";
  const { explore, social, slides } = NewStudentData;
  const { registration, orientation, booking, campusMap } = explore;
  const { links } = social;
  return (
    <NewStudentContainer>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>

      <TopSection newStudentBgImg={newStudentBgImg}>
        <TopWrapper>
          {hasWindow ? (
            <>
              <TopLeft>
                <TopLeftTitle>{NewStudentData.header.title}</TopLeftTitle>
                <Greetings>
                  <div className="salutation">
                    {NewStudentData.header.salutation}
                  </div>
                  <div className="description">
                    {NewStudentData.header.description}
                  </div>
                  <Link className="explore" href="#explore">
                    Explore
                  </Link>
                </Greetings>
              </TopLeft>
              <TopVideo>
                <ReactPlayer
                  url={url}
                  width={"100%"}
                  height={"100%"}
                  light={placeholder1}
                  playing
                />
              </TopVideo>
            </>
          ) : null}
        </TopWrapper>
        <SlideAdverts>
          <SliderAds slides={slides} />
        </SlideAdverts>
      </TopSection>

      <MiddleSection id="explore">
        <NewStudentSection
          title={registration.title}
          description={registration.description}
          btnTxt="Request Now"
          imgSrc={registerImg}
          link={registration.link}
        />
        <NewStudentSection
          title={orientation.title}
          description={orientation.description}
          btnTxt="Participate Now"
          imgSrc={orientationImg}
          link={orientation.link}
          order={1}
        />
        <NewStudentSection
          title={booking.title}
          description={booking.description}
          btnTxt="Book Now"
          imgSrc={bookingImg}
          link={booking.link}
        />
        <NewStudentSection
          title={campusMap.title}
          description={campusMap.description}
          btnTxt="Explore Now"
          imgSrc={campusMapImg}
          link={campusMap.link}
          order={1}
        />
      </MiddleSection>

      <SocialSection socialBgImg={socialBgImg}>
        <SocialWrapper>
          <SocialTitle>Get Social</SocialTitle>
          <div>
            <SocialDesc>{social.description1}</SocialDesc>
            <SocialIcons>
              <Link
                href={links.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={facebook} alt="facebook" width={40} height={40} />
              </Link>
              <Link
                href={links.twitterX}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={twitterX} alt="twitterX" width={40} height={40} />
              </Link>
              <Link
                href={links.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={instagram} alt="instagram" width={40} height={40} />
              </Link>
            </SocialIcons>
          </div>
          <div>
            <Subscribe>{social.description2}</Subscribe>
            <YtIcon>
              <Link
                href={links.youtube}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={youtube} alt="youtube" width={40} height={40} />
              </Link>
            </YtIcon>
          </div>
        </SocialWrapper>
      </SocialSection>
    </NewStudentContainer>
  );
};

const NewStudentContainer = styled.div``;

const TopSection = styled.section`
  background: url(${({ newStudentBgImg }) => newStudentBgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${CommonStyling.backgroundColor};
  text-align: left;
  gap: 2rem;

  // margin-top: 9.362vh;
  // margin-bottom: 15.35vh;
  // margin-left: 1.25rem;
  // margin-right: 1.25rem;
  background-size: cover;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: unset;
    align-items: unset;
    height: unset;
    padding: 15.319vh 13.5vw 15.319vh 13.5vw;
  }
`;

const TopLeft = styled.div``;
const TopLeftTitle = styled.h1`
  margin: 0;
  font-size: ${CommonStyling.h1FontSize} !important;
  line-height: ${CommonStyling.h1LineHeight};
  font-weight: 700;
  font-family: ${CommonStyling.primaryFontFamily};
  margin-bottom: 1.5rem;
`;

const Greetings = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${CommonStyling.backgroundColor};
  color: ${CommonStyling.contrastColor};
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight};
  font-weight: 700;

  // TODO tooltip arrow

  .description {
    padding-top: 1.5rem;
    padding-bottom: 0.625rem;
    font-weight: 400;
  }

  .explore {
    display: flex;
    justify-content: flex-end;
    color: ${CommonStyling.primaryColor};
    text-decoration-line: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2.5px;
  }
`;
const TopVideo = styled.div`
  height: 395px;
  .react-player__preview {
    border-radius: 16px;
  }

  @media screen and (min-width: 768px) {
    height: 100% !important;
  }
`;

const SlideAdverts = styled.div`
  padding-bottom: 70px;
  padding-top: 80px;

  @media only screen and (min-width: 768px) {
    padding-top: 0px;
    padding-bottom: 110px;
  }
`;

const MiddleSection = styled.section`
  padding-top: 9.362vh;
  padding-bottom: 15.35vh;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 200px;
  @media only screen and (min-width: 768px) {
    padding: 15.319vh 5.2vw 15.319vh 5.2vw;
  }
`;
const SocialSection = styled.section`
  background: url(${({ socialBgImg }) => socialBgImg});
  padding-top: 9.362vh;
  padding-bottom: 15.35vh;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 15.319vh 13.5vw 15.319vh 13.5vw;
  }
`;
const SocialWrapper = styled.div`
  background-color: ${CommonStyling.backgroundColor};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 2rem;
  max-width: 529px;
  margin: auto;
`;
const SocialTitle = styled.h1`
  margin: 0;
  font-size: ${CommonStyling.h1FontSize} !important;
  line-height: ${CommonStyling.h1LineHeight};
  font-weight: 700;
  font-family: ${CommonStyling.primaryFontFamily};
  color: ${CommonStyling.primaryColor};
  padding: 1rem;
`;

const SocialDesc = styled.div`
  padding: 1rem;
  font-size: ${CommonStyling.body1FontSize} !important;
  line-height: ${CommonStyling.body1LineHeight};
  font-weight: 400;
  color: ${CommonStyling.contrastColor};
`;
const SocialIcons = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-start;
`;
const YtIcon = styled.div`
  padding: 1rem;
`;
const Subscribe = styled.div`
  padding: 1rem;
  font-size: ${CommonStyling.body1FontSize} !important;
  line-height: ${CommonStyling.body1LineHeight};
  font-weight: 400;
  color: ${CommonStyling.contrastColor};
`;

export default NewStudent;
