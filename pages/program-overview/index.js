import React from "react";
import Head from "next/head";
import styled from "styled-components";
import useWindowWidth from "../../components/Hooks/useWindowWidth"

import { WmddData } from '../../lib/WmddData';
import { InstructorData } from '../../lib/InstructorData';
import InstructorSlider from '../../components/Instructor/InstructorSlider';

const AboutUs = () => {
  const width = useWindowWidth();

  return (
    <PageContainer>
      <Head>
        <title>{WmddData.header.title}</title>
      </Head>
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
          <>
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
          </>
          :
          <>
            <div className="types">
              {WmddData.programDetails.types.map(t => <div>{t}</div>)}
            </div>
            <div className="courses">
              {WmddData.programDetails.courses.map((c, index) => (index === 7 ?
                <div className="splitCourse">
                  <div>{WmddData.programDetails.courses[7]}</div>
                  <div>{WmddData.programDetails.courses[8]}</div>
                </div>
                : <div>{c}</div>))}
            </div>
            <div className="seeAll"><a href={WmddData.programDetails.seeAllLink}>{WmddData.programDetails.seeAll}</a></div>
          </>
        }
      </ProgramDetails>
      <InstructorSection>
        <article style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.4rem" }}>{InstructorData.header.title}</h2>
          <p>{InstructorData.header.description}</p>
        </article>
        <InstructorSlider data={InstructorData.instructors} />
      </InstructorSection>
    </PageContainer>
  );
};

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

const PageContainer = styled.div`
  /* margin: 2vh 5.4vw;

  @media only screen and (min-width: 768px) {
    margin: 2vh 13.5vw;
  } */
    `

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

  div:nth-child(1){
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
export default AboutUs;
