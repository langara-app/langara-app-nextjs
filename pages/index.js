import Head from "next/head";
import styles from "../styles/home/home.module.scss";
import Link from "next/link";
import fetch from "node-fetch";

import { useState } from "react";

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
  console.log(alumni);

  const workData = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=5"
  );
  const work = await workData.json();

  const homeData = await HomeData;

  return { props: { data, alumni, work, homeData } };
}

const Home = ({ data, alumni, work, homeData }) => {
  const width = useWindowWidth();
  const [field, setField] = useState('developer');

  const selectedFieldStyles = {
    color: "#DE3F21",
    borderBottom: "1px solid #DE3F21",
    fontWeight: "bold",
  };

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

      <CareerPath>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.4rem" }}>{HomeData.careerPath.title}</h2>
          <p>{HomeData.careerPath.description}</p>
        </div>
        <FieldSelector>
          <Field style={field === "developer" ? selectedFieldStyles : null}
            onClick={e => setField('developer')}
          >Developer</Field>
          <Field style={field === "designer" ? selectedFieldStyles : null}
            onClick={e => setField('designer')}
          >Designer</Field>
        </FieldSelector>
        {field === 'developer' ?
          <div style={{ width: '100%' }}>
            <Slide ssrFadeout left>
              <Cards>
                {HomeData.careerPath.developer.map(career => (
                  <Card>
                    <IllustrationImage src={career.image} alt="illustration" />
                    <b>{career.title}</b>
                    <p>{career.description}</p>
                  </Card>
                ))}
              </Cards>
            </Slide>
          </div>
          :
          <section style={{ width: '100%' }}>
            <Slide ssrFadeout right>
              <Cards>
                {HomeData.careerPath.designer.map(career => (
                  <Card>
                    <IllustrationImage src={career.image} alt="illustration" />
                    <b>{career.title}</b>
                    <p>{career.description}</p>
                  </Card>
                ))}
              </Cards>
            </Slide>
          </section>
        }
      </CareerPath>

      <AlumniSection>
        <article style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.4rem" }}>{HomeData.alumni.title}</h2>
          <p>{HomeData.alumni.description}</p>
        </article>
        <AlumniSlider data={alumni} />
      </AlumniSection>
      <AdminBox />
    </>
  );
};

const AlumniSection = styled.section`
  background-color: #ffffff;
  padding: 3rem 5.4vw;

  article{
    h2{
      margin: 0;
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 768px){
    padding: 3rem 13.5vw;
  }
`;

const CareerPath = styled.section`
  padding: 2vh 5.4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px){
    padding: 2vh 13.5vw;
  }
`;

const Cards = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;

  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  align-items: flex-start;
  background-color: #FFFFFF;
  padding: 2rem;
  border: 1px solid #B0BEC5;

  @media screen and (min-width: 768px){
    width: 30vw;
  }
`;

const IllustrationImage = styled.img``;

const FieldSelector = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3vh 0vw;

  @media screen and (min-width: 768px){
    padding: 3vh 10vw;
    justify-content: space-around;
  }
`;

const Field = styled.span`
  cursor: pointer;
`;

export default Home;
