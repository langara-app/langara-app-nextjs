import React, { useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
import useWindowWidth from "../../components/Hooks/useWindowWidth"

import { WmddData } from '../../lib/WmddData';
import { InstructorData } from '../../lib/InstructorData';
import InstructorSlider from '../../components/Instructor/InstructorSlider';

import placeholder from '../../assets/img/wmdd/placeholder.svg'
import Button from "../../components/ReusableElements/Button";


const AboutUs = () => {
  const width = useWindowWidth();

  const profVidRef = useRef(null);

  const handleImageClick = (event) => {
    profVidRef.current.style = "visibility: visible";
    profVidRef.current.src = `${profVidRef.current.src}&autoplay=1&controls=1`;
  }

  return (
    <>
      <Head>
        <title>{WmddData.header.title}</title>
      </Head>

      <WmddContainer>
        <WmddWebLeft>
          {width < 768 ? (
            <div>
              <WmddTitle>{WmddData.header.title}</WmddTitle>
              <Header1>{WmddData.header.subtitle}</Header1>
              <Header2>{WmddData.header.description}</Header2>
              <VideoBlock>
                <WmddImg src={placeholder} alt="Program Overview Image" onClick={e => handleImageClick(e)} />
                <Video src={"https://www.youtube.com/embed/BTciK1vJ8QY?rel=0"} ref={profVidRef} allow="autoplay; encrypted-media"></Video>
              </VideoBlock>
            </div>
          ) : (
            <div>
              <WmddTitle>{WmddData.header.title}</WmddTitle>
              <Header1>{WmddData.header.subtitle}</Header1>
              <Header2>{WmddData.header.description}</Header2>
            </div>
          )}
        </WmddWebLeft>
        {width < 768 ? null : (
          <WmddImageContainer>
            <VideoBlock>
              <WmddImg src={placeholder} alt="Program Overview Image" onClick={e => handleImageClick(e)} />
              <Video src={"https://www.youtube.com/embed/BTciK1vJ8QY?rel=0"} ref={profVidRef} allow="autoplay; encrypted-media"></Video>
            </VideoBlock>
          </WmddImageContainer>
        )}
      </WmddContainer>
      <ProgramInfo>
        {WmddData.programInfo.map((i, index) => (
          <InfoBlock key={index}>
            <div>{i.field}</div>
            <div>{i.value}</div>
          </InfoBlock>
        ))}
      </ProgramInfo>
      <ProgramDetails>
        <div>
          <h2>{WmddData.programDetails.title}</h2>
          <p>{WmddData.programDetails.description}</p>
        </div>
        {width < 768 ?
          <div>
            <div className="types">
              {WmddData.programDetails.types[0]}
            </div>
            <div className="courses">
              {WmddData.programDetails.courses.map((c, index) => (index != 8 ?
                <div>{c}</div>
                : null))}
            </div>
            <div className="seeAll"><a href={WmddData.programDetails.seeAllLink}>{WmddData.programDetails.seeAll}</a></div>
            <div className="types">
              {WmddData.programDetails.types[1]}
            </div>
            <div className="courses">
              {WmddData.programDetails.courses.map((c, index) => (index != 7 ?
                <div>{c}</div>
                : null))}
            </div>
            <div className="seeAll"><a href={WmddData.programDetails.seeAllLink}>{WmddData.programDetails.seeAll}</a></div>
          </div>
          :
          <div>
            <div className="types">
              {WmddData.programDetails.types.map((t, index) => <div key={index}>{t}</div>)}
            </div>
            <div className="courses">
              {WmddData.programDetails.courses.map((c, index) => (index === 7 ?
                <div className="splitCourse" key={index}>
                  <div>{WmddData.programDetails.courses[7]}</div>
                  <div>{WmddData.programDetails.courses[8]}</div>
                </div>
                : <div key={index}>{c}</div>))}
            </div>
            <div className="seeAll"><a href={WmddData.programDetails.seeAllLink}>{WmddData.programDetails.seeAll}</a></div>
          </div>
        }
      </ProgramDetails>
      <KickStart>
        <KickImg src={WmddData.kickStart.image} />

        <KickDescWrapper>
          <KickTitle>{WmddData.kickStart.title}</KickTitle>
          <KickDesc>{WmddData.kickStart.desc}</KickDesc>
        </KickDescWrapper>
      </KickStart>

      <InstructorSection>
        <article style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.4rem" }}>{InstructorData.header.title}</h2>
          <p>{InstructorData.header.description}</p>
        </article>
        <InstructorSlider data={InstructorData.instructors} />
      </InstructorSection>

      <NextStepContainer>
        <NextStepDetails>
          <NextTitle>{WmddData.nextStep.title}</NextTitle>
          <NextDesc>{WmddData.nextStep.desc}</NextDesc>

          <ButtonWrapper>
            <Button
              text={"Apply now"}
              font={16}
              color={"#37474F"}
              bcg={"white"}
              section={"joinWMDD"}
              borderColor={"transparent"}
            />
          </ButtonWrapper>
        </NextStepDetails>
      </NextStepContainer>

    </>
  );
};

const NextStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9.8vh 5.4vw;
  background-color: rgba(222, 63, 33, 1);
  color: #FFFFFF;
  align-items: flex-start;

  @media only screen and (min-width: 768px){
    padding: 10vh 13.5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const NextStepDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const NextTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 2.375rem;
  line-height: 3.125rem;
  @media only screen and (min-width: 768px) {
    font-size: ${(45 / 1366) * 100}vw;
    margin-bottom: ${(20 / 1366) * 100}vw;
  }
`

const NextDesc = styled.p`
  text-align: center;
  font-weight: 200;
  font-size: 1.25rem;
  line-height: 1.875rem;
  padding-top: 1rem;
  padding-bottom: 4.6vh;
  margin: 0;

  @media only screen and (min-width: 768px) {
    padding-left: 18vw;
    padding-right: 18vw;
  }
`

const ButtonWrapper = styled.div`
  margin: 0 auto;
`;

const KickStart = styled.div`
  padding: 7.8vh 4.1vw 9.7vh;

@media screen and (min-width: 768px){
  display: flex;
  flex-direction: row-reverse;
  padding: 10vh 13.5vw 10.9vh 13.5vw;
  gap: 2vw;
}
`

const KickImg = styled.img`
  width: 100%;

@media screen and (min-width: 768px){
  max-width: 477px;
}
`

const KickDescWrapper = styled.div`
  padding-top: 4.8vh;

  @media only screen and (min-width: 768px) {
    padding-top:0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`
const KickTitle = styled.h2`
  margin: 0;
  font-size: 2.375rem;
  color: rgba(33, 38, 58, 1);
  line-height: 3.125rem;
  font-weight: 700;
`

const KickDesc = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: rgba(33, 38, 58, 1);
  margin: 0;
  padding-top: 2vh;

  @media screen and (min-width: 768px) {
    padding-top: 1.5vh;
  }
`

const WmddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url(${({ img }) => img});
  background-color: #F3FBFF;
  position: relative;
  padding-top: 5.7vh;
  padding-left: 5.2vw;
  padding-right: 4.4vw;
  color: rgba(55, 71, 79, 1);
  text-align: left;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    padding: 0 13vw 0 13.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "pic desc";
    justify-content: unset;
    align-items: unset;
    height: unset;
  }
`

const WmddWebLeft = styled.div`
  @media only screen and (min-width: 768px) {
    grid-area: desc;
    display: flex;
    align-items: center;
  }
`

const WmddTitle = styled.h1`
  margin: 0;
  font-size: 0.85rem;
  line-height: 18px;
  font-weight: 400;
  font-family: "Ubuntu Mono";

  @media only screen and (min-width: 768px) {
    font-size: 0.85rem;
  }
`

const Header1 = styled.p`
    margin-top: 0.5rem;
  font-weight: 700;
  font-size: 2.3rem;
  color: rgba(38, 50, 56, 1);
  margin-bottom: 1.5rem;
  line-height: 3.125rem;

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
    text-align: left;
    margin-bottom: 1.5rem;
    line-height: 4rem;
  }
`

const Header2 = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.875rem;

@media only screen and (min-width: 768px) {
  font-size: ${((463 / 1366) * 100)} vw;
  text-align: left;
  font-size: 1.25rem;
  margin-bottom: 0;
}
`

const WmddImageContainer = styled.div`
    @media only screen and (min-width: 768px) {
    grid-area: pic;
    max-width: 540px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`

const WmddImg = styled.img`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
`

const InstructorSection = styled.section`
  padding: 5vh 5.4vw;

  @media only screen and (min-width: 768px) {
    padding: 5vh 13.5vw;
  }
  background-color: #ffffff;
  article{
    h2{
      margin: 0;
      margin-bottom: 2rem;
    }
  }
`;

const ProgramInfo = styled.div`
  padding: 2.3rem;
  background-color: #ffffff;
  border: 1px solid #B0BEC5;
  border-radius: 4px;
  display: flex;
  gap: 4.5vw;
  flex-direction: column;

  margin: 2vh 5.4vw;

  @media only screen and (min-width: 768px) {
    margin: 2vh 13.5vw;
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-areas: '1fr 1fr 1fr';
    height: 16rem;
  }
`;

const InfoBlock = styled.div`

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div:nth-child(1){
    font-family: Ubuntu Mono;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0em;
    text-align: center;
  }
  div:nth-child(2){
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.875rem;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const ProgramDetails = styled.div`
  margin: 2vh 5.4vw;

  @media only screen and (min-width: 768px) {
    margin: 2vh 13.5vw;
  }

  >div:nth-child(1){
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2{
      font-size: 2.375rem;
      font-weight: 700;
      line-height: 3.125rem;
      letter-spacing: 0em;
    }
    p{
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
    }
  }

  .types{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.875rem;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 1rem;
  }

  .courses{
    background-color: #ffffff;
    border: 1px solid #B0BEC5;
    margin-bottom: 1rem;
    >div{
      width: 100%;
      padding: 1.875rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    >div:nth-child(n){
      border-top: 1px solid #B0BEC5;
    }
    >div:nth-child(1){
      border-top: none;
    }
    .splitCourse{
      padding: 0;
      display: flex;
      flex-direction: row;
      div{
        width: 50%;
        padding: 1.875rem 1rem;
      }
      div:nth-child(2) {
        border-left: 1px solid #B0BEC5;
      }
    }
  }

  .seeAll{
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5px;
    text-align: center;
    color: #DE3F21;
    margin: 2rem;
    cursor: pointer;
  }
`;

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  visibility: hidden;
  z-index: 5;
`;

const VideoBlock = styled.div`
  padding-top: 5.7vh;
  border-radius: 4px;
  width: 100%;
  height: 50vh;
  position: relative;

  @media only screen and (min-width: 768px) {
    padding-top: 0;
    display: block;
    width: 100%;
    margin: 0 auto;
    margin-right: 1.6vw;
  }
`;

export default AboutUs;
