import React, { useRef, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import useWindowWidth from "../../components/Hooks/useWindowWidth";
import Link from "next/link";

import { WmddData } from "../../lib/WmddData";
import { InstructorData } from "../../lib/InstructorData";
import InstructorSlider from "../../components/Instructor/InstructorSlider";

import placeholder from "../../assets/img/wmdd/placeholder.png";
import Button from "../../components/ReusableElements/Button";
import BottomBox from "../../components/ReusableElements/BottomBox";
import { CustomSelect } from "../../components/ReusableElements/FilterBySelect";

import { CommonStyling } from "../../lib/CommonStyling";
import { HomeData } from "../../lib/HomeData";

import mainBackgroundImage from "@/assets/news-and-events/mainBackgroundImage.png";

const ProgramOverview = () => {
  const width = useWindowWidth();

  const profVidRef = useRef(null);
  const profImageRef = useRef(null);

  const handleImageClick = (event) => {
    profVidRef.current.style = "visibility: visible";
    console.log(profImageRef.current);
    profImageRef.current.style = "visibility: hidden";
    profVidRef.current.src = `${profVidRef.current.src}&autoplay=1&controls=1`;
  };

  const [selectedOption, setSelectedOption] = useState("Term 1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(selectedOption[selectedOption.length - 1]);
  const options = [
    { value: "Term 1", label: "Term 1" },
    { value: "Term 2", label: "Term 2" },
    { value: "Term 3", label: "Term 3" },
    { value: "Term 4", label: "Term 4" },
  ];
  return (
    <PageContainer>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>

      <TopSection mainBackgroundImage={mainBackgroundImage}>
        <WmddContainer>
          <WmddWebLeft>
            {width < 768 ? (
              <div>
                <WmddTitle>{WmddData.header.title}</WmddTitle>
                <Header1>{WmddData.header.subtitle}</Header1>
                <Header2>{WmddData.header.description}</Header2>

                <a
                  href="https://www.youtube.com/watch?v=BTciK1vJ8QY"
                  target="_blank"
                >
                  <WmddImg src={placeholder} alt="Program Overview Image" />
                </a>
              </div>
            ) : (
              <div>
                <WmddTitle>{WmddData.header.title} </WmddTitle>
                <Header1>{WmddData.header.subtitle}</Header1>
                <Header2>{WmddData.header.description}</Header2>
              </div>
            )}
          </WmddWebLeft>
          {width < 768 ? null : (
            <WmddImageContainer>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=BTciK1vJ8QY"
              >
                <WmddImg src={placeholder} alt="Program Overview Image" />
              </a>
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
        <BottomBox />
      </TopSection>
      <MiddleSection>
        {width > 768 ? (
          <>
            <MidLeft>
              <h1>{WmddData.programDetails.title}</h1>
              <p>{WmddData.programDetails.description}</p>
              <Button
                link={WmddData.programDetails.seeAllLink}
                text="See Details"
                color="#FFFFFF"
                bcg="#F15A22"
              />
            </MidLeft>
            <MidRight>
              <CustomSelect
                label="All"
                value={selectedOption}
                onChange={handleChange}
                options={options}
              />
              <Curriculum>
                <div className="curriculum">
                  <CurriculumTitle>
                    <h3>Developer</h3>

                    <ul>
                      {WmddData.developerSubjects
                        .filter(
                          (s) =>
                            s.term == selectedOption[selectedOption.length - 1],
                        )
                        .map((res, idx) => (
                          <CurriculumList key={idx} common={res.common}>
                            {res.course}
                          </CurriculumList>
                        ))}
                    </ul>
                  </CurriculumTitle>
                  <CurriculumTitle>
                    <h3>Designer</h3>
                    <ul>
                      {WmddData.designerSubjects
                        .filter(
                          (s) =>
                            s.term == selectedOption[selectedOption.length - 1],
                        )
                        .map((res, idx) => (
                          <CurriculumList key={idx} common={res.common}>
                            {res.course}
                          </CurriculumList>
                        ))}
                    </ul>
                  </CurriculumTitle>
                </div>
                <CommonClass>
                  Common courses between Developers and Designers
                </CommonClass>
              </Curriculum>
            </MidRight>{" "}
          </>
        ) : (
          <>
            <MidTop>
              <h1>{WmddData.programDetails.title}</h1>
              <p>{WmddData.programDetails.description}</p>
              <Button
                link={WmddData.programDetails.seeAllLink}
                text="See Details"
                color="#FFFFFF"
                bcg="#F15A22"
              />
            </MidTop>
            <MidBot>
              <ul>
                {WmddData.featuredSubjects.map((f) => (
                  <div className="wrapper" key={f.course}>
                    <div className="circle"></div>
                    <div>
                      <p className="term">{f.term}</p>
                      <li className="course">{f.course}</li>
                      <p className="stream">{f.stream}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </MidBot>
          </>
        )}
      </MiddleSection>
      {/*
      <ProgramDetails>
        <div>
          <h2>{WmddData.programDetails.title}</h2>
          <p>{WmddData.programDetails.description}</p>
        </div>
        {width < 768 ? (
          <div>
            <div className="types">{WmddData.programDetails.types[0]}</div>
            <div className="courses">
              {WmddData.programDetails.courses.map((c, index) =>
                index != 8 ? <div key={index}>{c}</div> : null,
              )}
            </div>
            <div className="seeAll">
              <a href={WmddData.programDetails.seeAllLink}>
                {WmddData.programDetails.seeAll}
              </a>
            </div>
            <div className="types">{WmddData.programDetails.types[1]}</div>
            <div className="courses">
              {WmddData.programDetails.courses.map((c, index) =>
                index != 7 ? <div key={index}>{c}</div> : null,
              )}
            </div>
            <div className="seeAll">
              <a target="_blank" href={WmddData.programDetails.seeAllLink}>
                {WmddData.programDetails.seeAll}
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="types">
              {WmddData.programDetails.types.map((t, index) => (
                <div key={index}>{t}</div>
              ))}
            </div>
            <div className="courses">
              {WmddData.programDetails.courses.map((c, index) =>
                index === 7 ? (
                  <div className="splitCourse" key={index}>
                    <div>{WmddData.programDetails.courses[7]}</div>
                    <div>{WmddData.programDetails.courses[8]}</div>
                  </div>
                ) : index != 8 ? (
                  <div key={index}>{c}</div>
                ) : null,
              )}
            </div>
            <div className="seeAll">
              <a target="_blank" href={WmddData.programDetails.seeAllLink}>
                {WmddData.programDetails.seeAll}
              </a>
            </div>
          </div>
        )}
      </ProgramDetails>
      <KickStart>
        <KickImg src={WmddData.kickStart.image} />

        <KickDescWrapper>
          <KickTitle>{WmddData.kickStart.title}</KickTitle>
          <KickDesc>{WmddData.kickStart.desc}</KickDesc>
        </KickDescWrapper>
      </KickStart>

      <InstructorSection>
        <article>
          <h2>{InstructorData.header.title}</h2>
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
              font={CommonStyling.body2FontSize.split("r")[0]}
              color={"#37474F"}
              bcg={"white"}
              section={"joinWMDD"}
              borderColor={"transparent"}
              link={"https://langara.ca/admissions/apply-to-langara/index.html"}
            />
          </ButtonWrapper>
        </NextStepDetails>
      </NextStepContainer> */}
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const TopSection = styled.section`
  background: url(${({ mainBackgroundImage }) => mainBackgroundImage});
  padding-top: 15.35vh;
  padding-bottom: 15.35vh;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-position: center;
  background-size: cover;
  position: relative;

  @media only screen and (min-width: 768px) {
    padding: 5.5vh 13.5vw 8.5vh 13.5vw;
  }
`;
const WmddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${CommonStyling.backgroundColor};
  text-align: left;
  gap: 2rem;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: unset;
    align-items: unset;
    height: unset;
  }
`;

const WmddWebLeft = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const WmddTitle = styled.h1`
  margin: 0;
  font-size: ${CommonStyling.body2FontSize} !important;
  line-height: ${CommonStyling.body2LineHeight};
  font-weight: 400;
  font-family: ${CommonStyling.primaryFontFamily};
  margin-bottom: 1rem;
`;

const Header1 = styled.p`
  font-weight: 700;
  font-size: ${CommonStyling.h1FontSize};
  margin-bottom: 1rem;
  line-height: ${CommonStyling.h1LineHeight};

  @media only screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 1.5rem;
  }
`;

const Header2 = styled.p`
  font-size: ${CommonStyling.body1FontSize};
  font-weight: 400;
  line-height: ${CommonStyling.body1LineHeight};

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const WmddImageContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      flex: 1;
    }
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${CommonStyling.backgroundColor};
  border-radius: 0.5rem;
  div:nth-child(1) {
    font-weight: 400;
    font-size: ${CommonStyling.body2FontSize};
    line-height: ${CommonStyling.body2LineHeight};
    color: ${CommonStyling.primaryColor};
  }

  div:nth-child(2) {
    font-size: ${CommonStyling.body1FontSize};
    line-height: ${CommonStyling.body1LineHeight};
    font-weight: 700;
    color: ${CommonStyling.contrastColor};
  }
`;

const WmddImg = styled.img`
  width: 100%;
  cursor: pointer;
  margin: 2rem 0;
  object-fit: contain;
`;

const ProgramInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding-top: 2rem;
`;

const MiddleSection = styled.section`
  background-color: ${CommonStyling.backgroundColor};

  padding-top: 15.35vh;
  padding-bottom: 15.35vh;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-position: center;
  background-size: cover;
  gap: 8.542vw;

  .mid-top {
    font-size:;
  }

  @media only screen and (min-width: 768px) {
    padding: 5.5vh 13.5vw 8.5vh 13.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const MidLeft = styled.div`
  color: #000;
  h1 {
    font-size: ${CommonStyling.h1FontSize};
    line-height: ${CommonStyling.h1LineHeight};
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${CommonStyling.body1FontSize};
    line-height: ${CommonStyling.body1LineHeight};
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

const MidTop = styled.div`
  color: #000;
  h1 {
    font-size: ${CommonStyling.h2FontSize};
    line-height: ${CommonStyling.h2LineHeight};
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${CommonStyling.body1FontSize};
    line-height: ${CommonStyling.body1LineHeight};
    font-weight: 400;
    margin-bottom: 2rem;
  }
  button {
    width: 100%;
    margin-bottom: 64px;
  }
`;
const MidBot = styled.div`
  .wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .circle {
    height: 15px;
    width: 15px;
    background-color: ${CommonStyling.primaryColor};
    border-radius: 50%;
  }

  .term {
    font-size: ${CommonStyling.body2FontSize};
    line-height: ${CommonStyling.body2LineHeight};
    color: ${CommonStyling.primaryColor};
  }

  .course {
    font-size: ${CommonStyling.body1FontSize};
    line-height: ${CommonStyling.body1LineHeight};
    color: ${CommonStyling.contrastColor};
    font-weight: 700;
  }

  .stream {
    font-size: ${CommonStyling.body2FontSize};
    line-height: ${CommonStyling.body2LineHeight};
    color: ${CommonStyling.contrastColor};
    opacity: 0.5;
  }
`;
const MidRight = styled.div`
  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const Curriculum = styled.div`
  padding: 0 16px;
  .curriculum {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    ul {
      padding-left: 1rem;
    }
  }
`;

const CurriculumList = styled.li`
  margin: 0.5rem 0;
  list-style-type: disc;
  font-weight: 400;
  font-size: ${CommonStyling.body2FontSize};
  line-height: ${CommonStyling.body2LineHeight};
  &::marker {
    color: ${(props) =>
      props.common ? CommonStyling.primaryColor : "rgba(7, 7, 7, 0.2)"};
  }
`;

const CommonClass = styled.li`
  margin-top: 26px;
  color: rgba(7, 7, 7, 0.2);
  font-size: ${CommonStyling.body3FontSize};
  line-height: ${CommonStyling.body3LineHeight};
  &::marker {
    color: ${CommonStyling.primaryColor};
  }
`;

const CurriculumTitle = styled.div`
  font-size: ${CommonStyling.h3FontSize};
  line-height: ${CommonStyling.h3LineHeight};
  font-weight: 700;
`;

const NextStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9.8vh 5.4vw;
  background-color: #f15a22;
  color: #ffffff;
  align-items: flex-start;

  @media only screen and (min-width: 768px) {
    padding: 7vh 13.5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const NextStepDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: ${CommonStyling.h2FontSize};
  line-height: ${CommonStyling.h2LineHeight};
`;

const NextDesc = styled.p`
  text-align: center;
  font-weight: 200;
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight};
  padding-top: 1rem;
  padding-bottom: 4.6vh;
  margin: 0;

  @media only screen and (min-width: 768px) {
    padding-left: 18vw;
    padding-right: 18vw;
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
`;

const KickStart = styled.div`
  padding: 7.8vh 4.1vw 9.7vh;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 10vh 13.5vw 10.9vh 13.5vw;
    gap: 2vw;
  }
`;

const KickImg = styled.img`
  width: 100%;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    max-width: 477px;
  }
`;

const KickDescWrapper = styled.div`
  padding-top: 4.8vh;

  @media only screen and (min-width: 768px) {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
const KickTitle = styled.h2`
  margin: 0;
  font-size: ${CommonStyling.h2FontSize};
  line-height: ${CommonStyling.h2LineHeight};
  color: rgba(33, 38, 58, 1);
  font-weight: 700;
`;

const KickDesc = styled.p`
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight};
  font-weight: 400;
  color: rgba(33, 38, 58, 1);
  margin: 0;
  padding-top: 2vh;

  @media screen and (min-width: 768px) {
    padding-top: 1.5vh;
  }
`;

const InstructorSection = styled.section`
  padding: 5vh 5.4vw;

  @media only screen and (min-width: 768px) {
    padding: 4rem 13.5vw 5rem 13.5vw;
  }
  background-color: #ffffff;
  article {
    text-align: center;
    h2 {
      font-size: ${CommonStyling.h2FontSize};
      line-height: ${CommonStyling.h2LineHeight};
      margin: 0;
    }
    p {
      margin: 0;
      margin-top: 1vh;
      margin-bottom: 2vh;
      font-size: ${CommonStyling.body1FontSize};
      line-height: ${CommonStyling.body1LineHeight};
    }
  }
`;

const ProgramDetails = styled.div`
  margin: 5vh 5.4vw 2vh 5.4vw;

  @media only screen and (min-width: 768px) {
    margin: 2vh 13.5vw;
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      font-size: ${CommonStyling.h2FontSize};
      line-height: ${CommonStyling.h2LineHeight};
      font-weight: 700;
      margin: 0;
    }
    p {
      font-size: ${CommonStyling.body1FontSize};
      line-height: ${CommonStyling.body1LineHeight};
      font-weight: 400;
      margin: 0;
      margin-bottom: 3rem;
      padding-top: 1.5vh;
    }
  }

  .types {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 1rem;
  }

  .courses {
    background-color: #ffffff;
    border: 1px solid #b0bec5;
    margin-bottom: 1rem;
    > div {
      width: 100%;
      padding: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    > div:nth-child(n) {
      border-top: 1px solid #b0bec5;
    }
    > div:nth-child(1) {
      border-top: none;
    }
    .splitCourse {
      padding: 0;
      display: flex;
      flex-direction: row;
      div {
        width: 50%;
        padding: 1.2rem;
      }
      div:nth-child(2) {
        border-left: 1px solid #b0bec5;
      }
    }
  }

  .seeAll {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5px;
    text-align: center;
    color: #f15a22;
    margin: 2rem;
    cursor: pointer;
  }
`;

export default ProgramOverview;
