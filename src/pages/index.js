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
import MarqueeCarousel from "@/components/ReusableElements/MarqueeCarousel";

export async function getStaticProps() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  // const data = getHomeData();

  const res = await fetch(`${process.env.BASE_URL}/wp-json/acf/v3/pages/356`);
  const data = await res.json();

  const alumniData = await fetch(
    `${process.env.BASE_URL}/wp-json/acf/v3/langara-alumni`,
  );

  const alumni = await alumniData.json();

  const homeData = HomeData;

  return {
    props: { data, alumni, homeData },
    revalidate: 60 * 60 * 24,
  };
}

const Home = ({ data, alumni, homeData }) => {
  const width = useWindowWidth();
  const [field, setField] = useState("developer");

  const newAlumni = [];

  newAlumni.push(alumni[4]);
  newAlumni.push(alumni[2]);
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
              className="cursor-animate"
              style={field === "developer" ? selectedFieldStyles : null}
              onClick={(e) => setField("developer")}
            >
              Developer
            </Field>
            <Field
              className="cursor-animate"
              style={field === "designer" ? selectedFieldStyles : null}
              onClick={(e) => setField("designer")}
            >
              Designer
            </Field>
          </FieldSelector>
        </CareerHeader>
        {field === "developer" ? (
          <div style={{ width: "100%" }}>
            <Slide ssrFadeout left direction="left">
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
            <Slide ssrFadeout right direction="right">
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

      <EarnDiploma>
        <EarnDiplomaDetails>
          <EarnDiplomaTitle>{homeData.earnDiploma.title}</EarnDiplomaTitle>
          <EarnDiplomaDesc>
            <p
              dangerouslySetInnerHTML={{
                __html: homeData.earnDiploma.description,
              }}
            ></p>
          </EarnDiplomaDesc>
          <ButtonWrapper>
            <Button
              link={"https://langara.ca/admissions/apply-to-langara/index.html"}
              text="Apply Now"
              color="#FFFFFF"
              bcg="#F15A22"
              hover={true}
              font={CommonStyling.body2FontSize.split("r")[0]}
            />
          </ButtonWrapper>
        </EarnDiplomaDetails>
        <MarqueeTextWrapper>
          <MarqueeCarousel items={homeData.earnDiploma.marqueeText} />
        </MarqueeTextWrapper>
      </EarnDiploma>

      <Graduate>
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
              to={"/projects"}
              hover={true}
              mobile={true}
              navigate={"/projects"}
            />
          </ButtonWrapper>
        </GradDescWrapper>

        <ImageDiv>
          <GraduateImg src={HomeData.graduate.image} />
        </ImageDiv>
        <Box />
      </Graduate>

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
  background-color: ${CommonStyling.backgroundColor};
  // margin: 3rem 5.4vw;
  color: ${CommonStyling.contrastColor};

  // @media screen and (min-width: 768px) {
  //   margin: 10.97vh 12.5vw;
  // }
`;

const AlumniSectionArticle = styled.article`
  text-align: left;
  margin-bottom: 2rem;
  margin: 3rem 5.4vw;

  @media screen and (min-width: 768px) {
    margin: 10.97vh 12.5vw;
  }
`;

const AlumniTitle = styled.h2`
  padding-bottom: 1rem;
  @media screen and (min-width: 768px) {
    font-size: ${CommonStyling.h1FontSize};
  }
  font-size: ${CommonStyling.h1FontSize};
  color: ${CommonStyling.contrastColor};
  font-weight: 700;
  margin: 0;
`;

const AlumniDesc = styled.p`
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight};
  margin: 0;
`;

const CareerPath = styled.section`
  padding: 2vh 5.4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${CommonStyling.backgroundColor};
  padding-bottom: 8.33vh;

  @media screen and (min-width: 768px) {
    // padding: 2vh 13.5vw;
    max-width: 80vw;
    margin: auto;
    padding-bottom: 8.75vh;
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
  color: ${CommonStyling.contrastColor};
  font-weight: 700;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: ${CommonStyling.h1FontSize};
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

const EarnDiploma = styled.div`
  background-color: ${CommonStyling.contrastColor};
  text-align: center;
  color: ${CommonStyling.backgroundColor};
  button {
    margin: 0 auto;
  }
  display: flex;
  flex-direction: column;
  min-height: 60vh;

  .earn-diploma-highlight {
    color: ${CommonStyling.primaryColor};
    font-weight: 700;
  }
`;
const EarnDiplomaDetails = styled.div`
  padding: 9.79vh 12.5vw;
  @media screen and (min-width: 768px) {
  }
`;
const EarnDiplomaTitle = styled.h2`
  font-size: ${CommonStyling.h1FontSize};
  color: ${CommonStyling.backgroundColor};
  font-weight: 700;
  margin: 0;
  padding-bottom: 1rem;
`;
const EarnDiplomaDesc = styled.div`
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight}
  font-weight: 400;
  margin: 0;
  padding-top: 1rem;
`;

const MarqueeTextWrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  margin-bottom: 6rem;
`;

const Graduate = styled.div`
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  @media screen and (min-width: 768px) {
    max-height: 95vh;
    display: flex;
  }
  position: relative;
  margin-top: -32px;
`;

const Box = styled.div`
  height: 20px;
  width: 100%;
  border-radius: 32px 32px 0 0;
  background-color: ${CommonStyling.backgroundColor};
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
`;
const ImageDiv = styled.div`
  line-height: 0%;
  width: 100%;
  border-top-right-radius: 32px;

  @media only screen and (min-width: 768px) {
    max-width: 50vw;
  }
`;
const GraduateImg = styled.img`
  object-fit: cover;
  height: 60vh;
  max-width: 100vw;
  width: 100%;

  @media only screen and (min-width: 768px) {
    object-position: 70% 30%;
    max-width: 50vw;
    border-top-right-radius: 32px;
    height: 100%;
  }
`;

const GradDescWrapper = styled.div`
  padding: 7.8vh 4.1vw 9.7vh;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;

  background-color: #f2f2f2;
  @media screen and (min-width: 768px) {
    padding: 19.79vh 5.5556vw;
    max-width: 50vw;
    border-top-right-radius: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const GradTitle = styled.h2`
  font-size: ${CommonStyling.h1FontSize};
  color: ${CommonStyling.contrastColor};
  font-weight: 700;
  margin: 0;
`;

const GradDesc = styled.p`
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight}
  font-weight: 400;
  color: ${CommonStyling.contrastColor};
  margin: 0;
  padding-top: 1rem;
`;

const ButtonWrapper = styled.div`
  padding-top: 2rem;
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

  padding: 4.9vh 0vw;
  font-size: 1.25rem;
  line-height: 1.875rem;
  @media screen and (min-width: 769px) {
    padding: 3vh 0;
    justify-content: end;
  }
`;

const Field = styled.span`
  // cursor: pointer;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding-right: 10px;

  &:last-child {
    border-right: none;
    padding-left: 10px;
  }
`;

export default Home;
