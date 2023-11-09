// packages imports
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

// constants and styling
import styles from "../styles/home/home.module.scss";
import { HomeData } from "../lib/HomeData";
import { CommonStyling } from "../lib/CommonStyling";

// components imports
import HomeHeader from "../components/Header/HomeHeader";
import AlumniSlider from "../components/Alumni/AlumniSlider";
import AdminBox from "../components/AdminBox";
import Button from "../components/ReusableElements/Button";
import useWindowWidth from "../components/Hooks/useWindowWidth";

export async function getStaticProps() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  // const data = getHomeData();

  const res = await fetch(`${process.env.BASE_URL}/wp-json/acf/v3/pages/356`);
  const data = await res.json();

  const alumniData = await fetch(
    `${process.env.BASE_URL}/wp-json/acf/v3/alumni`,
  );

  const alumni = await alumniData.json();

  const workData = await fetch(
    `${process.env.BASE_URL}/wp-json/wp/v2/projects?per_page=5`,
  );
  const work = await workData.json();

  const homeData = await HomeData;

  return {
    props: { data, alumni, work, homeData },
    revalidate: 60 * 60 * 24 * 10,
  };
}

const Home = ({ data, alumni, work, homeData }) => {
  const width = useWindowWidth();
  const [field, setField] = useState("developer");

  const newAlumni = [];

  newAlumni.push(alumni[2]);
  newAlumni.push(alumni[4]);
  newAlumni.push(alumni[3]);
  newAlumni.push(alumni[1]);
  newAlumni.push(alumni[0]);

  const selectedFieldStyles = {
    color: "#F15A22",
    fontWeight: "bold",
  };

  return (
    <div>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>
      <HomeHeader
        type={"home"}
        title={homeData.header.title}
        desc={homeData.header}
        btnText={"Get to know WMDD"}
        page={"home"}
      />

      <CareerPath>
        <CareerHeader>
          <CareerTitleDesc>
            <CareerTitle>{HomeData.careerPath.title}</CareerTitle>
            <CareerDesc>{HomeData.careerPath.description}</CareerDesc>
          </CareerTitleDesc>
          <FieldSelector>
            <Field
              style={field === "developer" ? selectedFieldStyles : null}
              onClick={(e) => setField("developer")}
            >
              Developer
            </Field>
            <Field
              style={field === "designer" ? selectedFieldStyles : null}
              onClick={(e) => setField("designer")}
            >
              Designer
            </Field>
          </FieldSelector>
        </CareerHeader>
        {field === "developer" ? (
          <div style={{ width: "100%" }}>
            <Slide ssrFadeout left>
              <Cards>
                {HomeData.careerPath.developer.map((career, index) => (
                  <Card key={index}>
                    <IllustrationImage src={career.image} alt="illustration" />
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
                    <IllustrationImage src={career.image} alt="illustration" />
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
              font={CommonStyling.body2FontSize.split("r")[0]}
              color={"white"}
              bcg={"#F15A22"}
              section={"joinWMDD"}
              borderColor={"transparent"}
              to={"project"}
              hover={true}
              mobile={true}
            />
          </ButtonWrapper>
        </GradDescWrapper>
      </Gradute>
      <AlumniSection>
        <AlumniSectionArticle>
          <AlumniTitle>{HomeData.alumni.title}</AlumniTitle>
          <AlumniDesc>{HomeData.alumni.description}</AlumniDesc>
        </AlumniSectionArticle>
        <AlumniSlider data={newAlumni} />
      </AlumniSection>
      <AdminBox />
    </div>
  );
};

const AlumniSection = styled.section`
  background-color: #ffffff;
  padding: 3rem 5.4vw;

  @media screen and (min-width: 768px) {
    padding: 4rem 13.5vw 5rem 13.5vw;
  }
`;

const AlumniSectionArticle = styled.article`
  text-align: center;
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

const AlumniTitle = styled.h2`
  font-size: ${CommonStyling.h2FontSize};
  line-height: ${CommonStyling.h2LineHeight};
`;

const AlumniDesc = styled.p`
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight};
`;

const CareerPath = styled.section`
  padding: 2vh 5.4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${CommonStyling.backgroundColor};

  @media screen and (min-width: 768px) {
    // padding: 2vh 13.5vw;
    max-width: 80vw;
    margin: auto;
  }
`;

const CareerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 2.625rem;

  margin-bottom: 5.25vh;
  margin-top: 12.75vh;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    margin-top: 24.75vh;
    margin-bottom: 3.5vh;
  }
`;

const CareerTitleDesc = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
`;

const CareerTitle = styled.h2`
  font-size: ${CommonStyling.h2FontSize};
  line-height: ${CommonStyling.h2LineHeight};
  color: ${CommonStyling.contrastColor};
  font-weight: 700;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: ${CommonStyling.h1FontSize};
    line-height: ${CommonStyling.h1LineHeight};
  }
`;

const CareerDesc = styled.p`
  margin: 0;
  font-size: ${CommonStyling.body1FontSize};
  font-weight: 400;
  line-height: ${CommonStyling.body1LineHeight};
  color: ${CommonStyling.contrastColor};
  @media screen and (min-width: 768px) {
    // padding-top: 1.5vh;
  }
`;

const Gradute = styled.div`
  padding: 7.8vh 4.1vw 9.7vh;
  background-color: #f3fbff;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 10vh 13.5vw 10.9vh 13.5vw;
    gap: 2vw;
  }
`;

const GraduateImg = styled.img`
  width: 100%;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    max-width: 477px;
  }
`;

const GradDescWrapper = styled.div`
  padding-top: 4.8vh;
`;

const GradTitle = styled.h2`
  margin: 0;
  font-size: ${CommonStyling.h2FontSize};
  color: rgba(33, 38, 58, 1);
  line-height: ${CommonStyling.h2LineHeight};
  font-weight: 700;
`;

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
`;

const ButtonWrapper = styled.div`
  padding-top: 4.8vh;
  @media screen and (min-width: 768px) {
    padding-top: 3.6vh;
  }
  @media screen and (max-width: 425px) {
    .btn {
      width: 100%;
      border: 1px solid red;
    }
  }
`;

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

  border-radius: 1rem;
  border: 2px solid ${CommonStyling.primaryColor};

  b {
    font-size: ${CommonStyling.body1FontSize};
    padding-top: 1rem;
    color: ${CommonStyling.primaryColor};
    font-weight: 700;
  }

  p {
    margin: 0;
    padding-top: 0.5rem;
    font-weight: 400;
    font-size: ${CommonStyling.body2FontSize};
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
  justify-content: center;

  // justify-content: space-between;
  padding: 4.9vh 0vw;
  font-size: 1.25rem;
  line-height: 1.875rem;
  @media screen and (min-width: 769px) {
    padding: 3vh 0;
    // justify-content: space-around;
    justify-content: end;
  }
`;

const Field = styled.span`
  cursor: pointer;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding-right: 10px;

  &:last-child {
    border-right: none;
    padding-left: 10px;
  }
`;

export default Home;
