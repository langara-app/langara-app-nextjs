import Head from "next/head";
import styles from "../styles/home/home.module.scss";
import Link from "next/link";
import fetch from "node-fetch";

import Alumni from "../components/Alumni/AlumniSlider";
import Work from "../components/Work/Work";

import styled from "styled-components";
import { Element } from "react-scroll";

import HomeHeader from "../components/Header/HomeHeader";
import Summary from "../components/Summary";
import SimpleSlider from "../components/Work/SimpleSlider";
import AlumniSlider from "../components/Alumni/AlumniSlider";
import AdminBox from "../components/AdminBox";

import Button from "../components/ReusableElements/Button";
import useWindowWidth from "../components/Hooks/useWindowWidth";

import { HomeData } from "../lib/HomeData";

import Slide from "react-reveal/Slide";

export async function getStaticProps() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  //   const data = getHomeData();

  const res = await fetch(
    "https://api.langara-app.ca/wp-json/acf/v3/pages/356"
  );
  const data = await res.json();

  const alumniData = await fetch(
    "https://api.langara-app.ca/wp-json/acf/v3/alumni"
  );
  const alumni = await alumniData.json();

  const workData = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=5"
  );
  const work = await workData.json();

  const homeData = await HomeData;

  return { props: { data, alumni, work, homeData } };
}

const Home = ({ data, alumni, work, homeData }) => {
  const width = useWindowWidth();

  return (
    <>
      <Head>
        <title>Home Page </title>
      </Head>
      <HomeHeader
        type={"home"}
        title={homeData.header.title}
        desc={homeData.header}
        btnText={"Get to know WMDD"}
        page={"home"}
      />

      {width < 768 ? (
        <SectionContainer margin={true}>
          <TitleBcg>
            <Slide ssrFadeout bottom>
              <Title type={"summary"}>{homeData.summary.title}</Title>
            </Slide>
          </TitleBcg>

          {HomeData.summary.contents.map((content, index) => (
            <Summary key={index} summaryData={content} id={index} />
          ))}
        </SectionContainer>
      ) : (
        <SectionContainer margin={true}>
          {HomeData.summary.contents.map((content, index) => (
            <Summary
              key={index}
              summaryData={content}
              summaryHeader={homeData.summary.title}
              homeData={homeData}
              id={index}
            />
          ))}
        </SectionContainer>
      )}

      {width < 768 ? (
        <SectionContainer margin={true} overlay={true} type={"project"}>
          <Title>{homeData.projects.title}</Title>
          <SectionDescription paddingBottom={64}>
            {homeData.projects.description}
          </SectionDescription>

          <SliderContainer>
            <SimpleSlider data={work} />
          </SliderContainer>
          <BtnBcg color={"brown"}>
            <Button
              text={"SEE MORE"}
              margin={2}
              font={24}
              size={"big"}
              color={"white"}
              bcg={"transparent"}
              to={"project"}
            />
          </BtnBcg>
        </SectionContainer>
      ) : (
        <SectionContainerProject>
          <div></div>
          <SliderContainer contents={"project"}>
            <SimpleSlider data={work} />
          </SliderContainer>
          <div>
            <BtnBcg color={"brown"}>
              <TitleContainer>
                <Title>{homeData.projects.title}</Title>
                <SectionDescription paddingBottom={64}>
                  {homeData.projects.description}
                </SectionDescription>
              </TitleContainer>
              <Button
                text={"SEE MORE"}
                margin={2}
                font={24}
                size={"big"}
                color={"white"}
                bcg={"transparent"}
                layout={"desktop"}
                to={"project"}
                section={"project"}
              />
            </BtnBcg>
          </div>
        </SectionContainerProject>
      )}

      {width < 768 ? (
        <SectionContainer margin={false} overlay={true} type={"alumni"}>
          <Title>{homeData.alumni.title}</Title>
          <SectionDescription paddingBottom={112}>
            {homeData.alumni.description}
          </SectionDescription>
          <SliderContainer>
            <AlumniSlider data={alumni} />
          </SliderContainer>
          <BtnBcg color={"orange"}>
            <Button
              text={"SEE MORE"}
              margin={2}
              font={24}
              size={"big"}
              color={"white"}
              bcg={"transparent"}
              layout={"desktop"}
              to={"alumni"}
            />
          </BtnBcg>
        </SectionContainer>
      ) : (
        <SectionContainer margin={false} overlay={true} type={"alumni"}>
          <BtnBcg color={"orange"}>
            <Title>{homeData.alumni.title}</Title>
            <SectionDescription paddingBottom={112}>
              {homeData.alumni.description}
            </SectionDescription>
            <Button
              text={"SEE MORE"}
              margin={2}
              font={24}
              size={"big"}
              color={"white"}
              bcg={"transparent"}
              layout={"desktop"}
              to={"alumni"}
              section={"alumni"}
            />
          </BtnBcg>
          <SliderContainer contents={"alumni"}>
            <AlumniSlider data={alumni} />
          </SliderContainer>
        </SectionContainer>
      )}

      <AdminBox />
    </>
  );
};

const TitleBcg = styled.div`
  background: rgb(103, 93, 81);
  background: linear-gradient(
    0deg,
    rgba(103, 93, 81, 1) 0%,
    rgba(103, 93, 81, 0.9472163865546218) 10%,
    rgba(103, 93, 81, 0.9023984593837535) 20%,
    rgba(103, 93, 81, 0.8463760504201681) 30%,
    rgba(103, 93, 81, 0.7987570028011204) 40%,
    rgba(103, 93, 81, 0.7035189075630253) 50%,
    rgba(103, 93, 81, 0.5494572829131652) 60%,
    rgba(103, 93, 81, 0.3981967787114846) 70%,
    rgba(103, 93, 81, 0.30015756302521013) 80%,
    rgba(103, 93, 81, 0.10127801120448177) 90%,
    rgba(103, 93, 81, 0) 100%
  );
  height: ${(300 / 375) * 100}vw;
  color: white;

  @media only screen and (min-width: 540px) {
    height: ${(200 / 375) * 100}vw;
  }
`;
const SectionContainer = styled.div`
  margin: ${({ margin }) => (margin ? "0 0rem 0rem" : 0)};
  position: ${({ overlay }) => (overlay ? "relative" : "static")};
  background-color: ${({ type }) =>
    type === "alumni" || type === "project" ? "white" : "#effcfa"};
  overflow-x: hidden;

  @media only screen and (min-width: 768px) {
    display: ${({ type }) => (type === "alumni" ? "grid" : "unset")};
    grid-template-columns: 1fr 1fr;
  }
`;
const SectionContainerProject = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    height: ${(694 / 1366) * 100}vw;
    background-color: white;
    overflow-x: hidden;
  }
`;

const TitleContainer = styled.div`
  color: white;
  /* margin-left: ${(153 / 1366) * 100}vw; */
`;
const Title = styled.h2`
  text-align: center;
  margin: 0 auto;
  padding-top: ${({ type }) =>
    type === "summary" ? (120 / 375) * 100 : (47 / 375) * 100}vw;
  /* padding-left: ${({ type }) => (type === "summary" ? "5.5rem" : "35px")};
  padding-right: ${({ type }) => (type === "summary" ? "5.5rem" : "35px")}; */
  width: 70%;
  max-width: 300px;

  line-height: ${({ type }) => (type === "summary" ? 1.5 : 1.1)};
  font-size: 32px;
  @media only screen and (min-width: 768px) {
    padding: 0;
    margin: 0;
    font-size: ${(50 / 1366) * 100}vw;
    text-align: left;
    color: white;
    width: 100%;
    max-width: unset;
  }
`;
const SectionDescription = styled.p`
  padding: 2rem 35px ${({ paddingBottom }) => (paddingBottom / 375) * 100}vw;
  margin: 0 auto;
  text-align: center;
  font-weight: 200;
  font-size: 15px;
  @media only screen and (min-width: 768px) {
    text-align: left;
    padding: 0;
    margin-top: ${(40 / 1366) * 100}vw;
    margin-right: ${(119 / 1366) * 100}vw;
    font-size: ${(19 / 1366) * 100}vw;
    color: white;
  }
`;
const SliderContainer = styled.div`
  position: absolute;
  width: 100vw;
  bottom: ${(140 / 375) * 100}vw;
  @media only screen and (min-width: 768px) {
    bottom: ${(107 / 1366) * 100}vw;
    position: ${({ contents }) =>
      contents === "project" ? "absolute" : "static"};
    width: ${({ contents }) => (contents === "alumni" ? 50 : 100)}vw;
  }
`;

// const SliderContainerProject = styled.div`
//   position: absolute;
//   width: 100vw;
//   bottom: ${(140 / 375) * 100}vw;
//   height: ${(479 / 1366) * 100}vw;
// `;

const BtnBcg = styled.div`
  background-color: ${({ color }) =>
    color === "orange" ? "#C36448" : color === "brown" ? "#675D51" : "white"};
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media only screen and (min-width: 768px) {
    height: ${(694 / 1366) * 100}vw;
    padding-left: ${(153 / 1366) * 100}vw;
    justify-content: center;
  }
`;

const AdmissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  background-color: #c2e5e0;
`;
const AdminTitle = styled.h2`
  margin: 0;
  text-align: center;
`;
const AdminDescription = styled.p`
  text-align: center;
  font-weight: 200;
  font-size: 18px;
`;

export default Home;
