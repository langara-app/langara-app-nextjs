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
import { CommonStyling } from "../lib/CommonStyling";

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
  const [field, setField] = useState("developer");

  const selectedFieldStyles = {
    color: "#DE3F21",
    borderBottom: "2px solid #DE3F21",
    fontWeight: "bold",
  };

  return (
    <div>
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
          <CareerTitle>
            {HomeData.careerPath.title}
          </CareerTitle>
          <CareerDesc>{HomeData.careerPath.description}</CareerDesc>
        </div>
        <FieldSelector>
          <Field
            style={
              field === "developer" ? selectedFieldStyles : null
            }
            onClick={(e) => setField("developer")}
          >
            Developer
          </Field>
          <Field
            style={
              field === "designer" ? selectedFieldStyles : null
            }
            onClick={(e) => setField("designer")}
          >
            Designer
          </Field>
        </FieldSelector>
        {field === "developer" ? (
          <div style={{ width: "100%" }}>
            <Slide ssrFadeout left>
              <Cards>
                {HomeData.careerPath.developer.map((career, index) => (
                  <Card key={index}>
                    <IllustrationImage
                      src={career.image}
                      alt="illustration"
                    />
                    <b>{career.title}</b>
                    <p>{career.description}</p>
                  </Card>
                ))}
              </Cards>
            </Slide>
          </div>
        ) : (
          <section style={{ width: "100%" }}>
            <Slide ssrFadeout right>
              <Cards>
                {HomeData.careerPath.designer.map((career, index) => (
                  <Card key={index}>
                    <IllustrationImage
                      src={career.image}
                      alt="illustration"
                    />
                    <b>{career.title}</b>
                    <p>{career.description}</p>
                  </Card>
                ))}
              </Cards>
            </Slide>
          </section>
        )}
      </CareerPath>


      <Gradute>
        <GraduateImg src={HomeData.graduate.image} />

        <GradDescWrapper>
          <GradTitle>{HomeData.graduate.title}</GradTitle>
          <GradDesc>{HomeData.graduate.desc}</GradDesc>
          <ButtonWrapper>
            <Button
              text={"See Student Work"}
              font={CommonStyling.body2FontSize.split('r')[0]}
              color={"white"}
              bcg={"#DE3F21"}
              section={"joinWMDD"}
              borderColor={"transparent"}
              to={"project"}
            />
          </ButtonWrapper>
        </GradDescWrapper>
      </Gradute>
      <AlumniSection>
        <article style={{ textAlign: "center" }}>
          <h2>{HomeData.alumni.title}</h2>
          <p>{HomeData.alumni.description}</p>
        </article>
        <AlumniSlider data={alumni} />
      </AlumniSection>
      <AdminBox />
    </div>
  );
};

const AlumniSection = styled.section`
  background-color: #ffffff;
  padding: 3rem 5.4vw;

  article{
    h2{
      font-size: ${CommonStyling.h2FontSize};
      line-height: ${CommonStyling.h2LineHeight};
      margin: 0;
      margin-bottom: 1rem;
    }
    p {
      font-size: ${CommonStyling.body1FontSize};
      line-height: ${CommonStyling.body1LineHeight};
      margin: 0 0 2rem 0;
    }
  }

  @media screen and (min-width: 768px){
    padding: 4rem 13.5vw 5rem 13.5vw;
  }
`;

const CareerPath = styled.section`
  padding: 2vh 5.4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #f3fbff;

  @media screen and (min-width: 768px) {
    padding: 2vh 13.5vw;
  }
`;

const CareerTitle = styled.h2`
font-size: ${CommonStyling.h2FontSize};
line-height: ${CommonStyling.h2LineHeight};
color: rgba(38, 50, 56, 1);
font-weight: 700;

@media screen and (min-width: 768px) {
  margin: 0;
}
`
const CareerDesc = styled.p`
margin: 0;
font-size: ${CommonStyling.body1FontSize};
font-weight: 400;
line-height: ${CommonStyling.body1LineHeight};
color: rgba(38, 50, 56, 1);
@media screen and (min-width: 768px) {
  padding-top: 1.5vh;
}

`;

const Gradute = styled.div`
padding: 7.8vh 4.1vw 9.7vh;
background-color: #f3fbff;

@media screen and (min-width: 768px){
  display: flex;
  flex-direction: row-reverse;
  padding: 10vh 13.5vw 10.9vh 13.5vw;
  gap: 2vw;
}
`;

const GraduateImg = styled.img`
width: 100%;
object-fit: contain;

@media screen and (min-width: 768px){
  max-width: 477px;
}
`;

const GradDescWrapper = styled.div`
padding-top: 4.8vh;
`

const GradTitle = styled.h2`
  margin: 0;
  font-size: ${CommonStyling.h2FontSize};
  color: rgba(33, 38, 58, 1);
  line-height: ${CommonStyling.h2LineHeight};
  font-weight: 700;
`

const GradDesc = styled.p`
  font-size: ${CommonStyling.body1FontSize};
  font-weight: 400;
  line-height: ${CommonStyling.body1LineHeight};
  color: rgba(33, 38, 58, 1);
  margin: 0;
  padding-top: 2vh;

  @media screen and (min-width: 768px) {
    padding-top: 1.5vh;
  }
`

const ButtonWrapper = styled.div`
  padding-top: 4.8vh;

  @media screen and (min-width: 768px){
    padding-top: 3.6vh;
  }
`

const Cards = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 2rem;
  border: 1px solid #b0bec5;

  b{
    font-size: 1rem;
    padding-top: 1rem;
  }

  p{
    line-height: 1.25rem;
    margin: 0;
    padding-top: 1.6vh;
    font-weight: 400;
    font-size: 0.875rem;
  }

  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`;

const IllustrationImage = styled.img``;

const FieldSelector = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 4.9vh 0vw;
font-size: 1.25rem;
line-height: 1.875rem;

@media screen and (min-width: 768px) {
  padding: 3vh 10vw;
  justify-content: space-around;
}
`;

const Field = styled.span`
cursor: pointer;
padding-bottom: 8px;
`;

export default Home;
