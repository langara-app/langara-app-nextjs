import Head from "next/head";
import styles from "../styles/home/home.module.scss";
import Link from "next/link";
import fetch from "node-fetch";

import Alumni from "../components/Alumni";
import Work from "../components/Work";

import styled from "styled-components";
import { Element } from "react-scroll";

import HeaderImageBox from "../components/HeaderImageBox";
import Summary from "../components/Summary";
import SimpleSlider from "../components/SimpleSlider";
import AlumniIntro from "../components/AlumniIntro";
import Footer from "../components/Footer";

import Button from "../components/ReusableElements/Button";

import { HomeData } from "../lib/HomeData";
import banner from "../assets/img/home-banner-mobile.jpg";

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
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=100"
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
      />
      <Element name="home" className="element">
        <SectionContainer margin={true}>
          <Title>{homeData.summary.title}</Title>
          {HomeData.summary.contents.map((content, index) => (
            <Summary key={index} description={content.title} />
          ))}
        </SectionContainer>
      </Element>

      <SectionContainer margin={true}>
        <Title>{homeData.projects.title}</Title>
        <SectionDescription>{homeData.projects.description}</SectionDescription>
        <SimpleSlider />
        <Button text={"SEE MORE"} margin={2} font={24} size={"big"} />
      </SectionContainer>

      <SectionContainer margin={true}>
        <Title>{homeData.alumni.title}</Title>
        <SectionDescription>{homeData.alumni.description}</SectionDescription>
        {alumni.map((alumna, index) =>
          alumna.acf.alumni_name === "Harmanpreet Kaur" ? (
            <AlumniIntro key={index} {...alumna.acf} />
          ) : null
        )}
        <Button text={"SEE MORE"} margin={2} font={24} size={"big"} />
      </SectionContainer>

      <SectionContainer
        style={{
          backgroundColor: "#C2E5E0",
          color: "#675d51",
          paddingBottom: "1px",
        }}
        margin={false}
      >
        <Title>{homeData.lastMessage.title}</Title>
        <SectionDescription>
          {homeData.lastMessage.description}
        </SectionDescription>

        <Button
          text={"See Admission Requirements"}
          margin={2}
          font={18}
          size={"med"}
        />
      </SectionContainer>
      <Footer />
    </>
  );
};

const SectionContainer = styled.div`
  margin: ${({ margin }) => (margin ? "0 0rem 5rem" : 0)};
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;
const SectionDescription = styled.p`
  margin: 2rem 0;
  text-align: center;
`;

export default Home;
