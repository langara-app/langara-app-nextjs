import Head from "next/head";
import styles from "../styles/home/home.module.scss";
import Link from "next/link";
import fetch from "node-fetch";

import Alumni from "../components/Alumni/AlumniSlider";
import Work from "../components/Work/Work";

import styled from "styled-components";
import { Element } from "react-scroll";

import HeaderImageBox from "../components/HeaderImageBox";
import Summary from "../components/Summary";
import SimpleSlider from "../components/Work/SimpleSlider";
import AlumniSlider from "../components/Alumni/AlumniSlider";
import AdminBox from "../components/AdminBox";

import Button from "../components/ReusableElements/Button";

import { HomeData } from "../lib/HomeData";
import banner from "../assets/img/home-banner-mobile.jpg";

import Fade from "react-reveal/Fade";
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
  return (
    <>
      <Head>
        <title>Home Page </title>
      </Head>
      <HeaderImageBox
        type={"home"}
        title={homeData.header.title}
        desc={homeData.header.description}
        btnText={"Get to know WMDD"}
        page={"home"}
      />
      <Element name="home" className="element">
        <SectionContainer margin={true} gradient={true}>
          <Title>{homeData.summary.title}</Title>
          {HomeData.summary.contents.map((content, index) => (
            <Summary key={index} summaryData={content} />
          ))}
        </SectionContainer>
      </Element>

      <SectionContainer margin={true} overlay={true}>
        <Title>{homeData.projects.title}</Title>
        <SectionDescription paddingBottom={"4rem"}>
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
          />
        </BtnBcg>
      </SectionContainer>

      <SectionContainer margin={false} overlay={true}>
        <Title>{homeData.alumni.title}</Title>
        <SectionDescription paddingBottom={"7rem"}>
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
          />
        </BtnBcg>
      </SectionContainer>

      <AdminBox />
    </>
  );
};

const SectionContainer = styled.div`
  margin: ${({ margin }) => (margin ? "0 0rem 2rem" : 0)};
  position: ${({ overlay }) => (overlay ? "relative" : "static")};
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;
const SectionDescription = styled.p`
  margin: 2rem 3rem ${({ paddingBottom }) => paddingBottom} 3rem;
  text-align: center;
  font-weight: 300;
  font-size: 13px;
`;
const SliderContainer = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 140px;
`;
const BtnBcg = styled.div`
  background-color: ${({ color }) =>
    color === "orange" ? "#C36448" : color === "brown" ? "#675D51" : "white"};
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* position: absolute;
  bottom: 400;
  right: 0;
  left: 0; */
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
  font-weight: 300;
  font-size: 18px;
`;

export default Home;
