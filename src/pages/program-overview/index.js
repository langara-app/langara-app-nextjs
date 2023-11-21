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

      <InstructorSection>
        <article>
          <h2>{InstructorData.header.title}</h2>
          <p>{InstructorData.header.description}</p>
        </article>
        <InstructorSlider data={InstructorData.instructors} />
      </InstructorSection>
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

const InstructorSection = styled.section`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #f2f2f2;
  border-radius: 32px 32px 0px 0px;

  article {
    padding-top: 15.35vh;
    h2 {
      font-size: ${CommonStyling.h1FontSize};
      line-height: ${CommonStyling.h1LineHeight};
      font-weight: 700;
      margin: 0;
      color: ${CommonStyling.contrastColor};
      margin-bottom: 1rem;
    }
    p {
      margin: 0;
      margin-top: 1vh;
      margin-bottom: 2rem;
      font-size: ${CommonStyling.body2FontSize};
      line-height: ${CommonStyling.body2LineHeight};
      color: #000;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 5.5vh 13.5vw 8.5vh 13.5vw;
  }
`;

export default ProgramOverview;
