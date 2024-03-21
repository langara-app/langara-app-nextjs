import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import useWindowWidth from "../../components/Hooks/useWindowWidth";

import { WmddData } from "../../lib/WmddData";
import { InstructorData } from "../../lib/InstructorData";
import InstructorSlider from "../../components/Instructor/InstructorSlider";

import Button from "../../components/ReusableElements/Button";
import BottomBox from "../../components/ReusableElements/BottomBox";
import { CustomSelect } from "../../components/ReusableElements/FilterBySelect";

import { CommonStyling } from "../../lib/CommonStyling";
import { HomeData } from "../../lib/HomeData";
import ReactPlayer from "react-player/youtube";
import mainBackgroundImage from "@/assets/news-and-events/mainBackgroundImage.png";
import placeholder1 from "../../assets/img/placeholder1.jpg";

const ProgramOverview = () => {
  const width = useWindowWidth();

  const [selectedOption, setSelectedOption] = useState("Term 1");
  const handleChange = (value) => {
    console.log(value);
    setSelectedOption(value);
  };

  const options = [
    { value: "Term 1", label: "Term 1" },
    { value: "Term 2", label: "Term 2" },
    { value: "Term 3", label: "Term 3" },
    { value: "Term 4", label: "Term 4" },
  ];

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const url = "https://youtu.be/jB5kt2GPND0?si=mk9aJu4t8v0IQykn";

  return (
    <PageContainer>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>

      <TopSection mainBackgroundImage={mainBackgroundImage}>
        <WmddContainer>
          {hasWindow ? (
            <>
              <WmddWebLeft>
                <div>
                  <WmddTitle>{WmddData.header.title} </WmddTitle>
                  <Header1>{WmddData.header.subtitle}</Header1>
                  <Header2>{WmddData.header.description}</Header2>
                </div>
              </WmddWebLeft>
              <WmddImageContainer>
                <ReactPlayer
                  url={url}
                  width={"100%"}
                  height={"400px"}
                  light={placeholder1}
                  playing
                />
              </WmddImageContainer>
            </>
          ) : null}
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
                hover={true}
              />
              <p className="handbook-url-container">
                <Link
                  className="handbook-url"
                  target="_blank"
                  href={WmddData.handbook_url}
                >
                  Download Handbook Summer 24
                </Link>
              </p>
            </MidLeft>
            <MidRight>
              <CustomSelect
                filterByText="Filter by Term"
                label="All"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                outlineColor={CommonStyling.primaryColor}
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
              <p className="handbook-url-container">
                <Link
                  className="handbook-url"
                  target="_blank"
                  href={WmddData.handbook_url}
                >
                  Download Handbook Summer 24
                </Link>
              </p>
            </MidTop>
            <MidBot>
              <CustomSelect
                filterByText="Filter by Term"
                label="All"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                outlineColor={CommonStyling.primaryColor}
              />
              <div className="curriculum-mobile">
                <CurriculumTitleMobile style={{ marginBottom: "32px" }}>
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
                </CurriculumTitleMobile>
                <CurriculumTitleMobile>
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
                </CurriculumTitleMobile>
                <ul className="common">
                  <li className="common-mobile">
                    Common courses between Developers and Designers
                  </li>
                </ul>
              </div>
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

const PageContainer = styled.div`
  .handbook-url-container {
    margin-top: 2rem;
  }
  .handbook-url {
    color: ${CommonStyling.primaryColor};
    text-decoration: underline;
    text-decoration-thickness: 2.5px;
    font-weight: bold;
  }
  .handbook-url:hover {
    text-decoration: none;
  }
`;

const TopSection = styled.section`
  background: url(${({ mainBackgroundImage }) => mainBackgroundImage});
  padding-top: 9.362vh;
  padding-bottom: 15.35vh;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-position: center;
  background-size: cover;
  position: relative;

  @media only screen and (min-width: 768px) {
    padding: 15.319vh 13.5vw 15.319vh 13.5vw;
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
  iframe {
    border-radius: 16px;
  }
  .react-player__preview {
    border-radius: 16px;
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
  gap: 1rem;
  padding-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media screen and (min-width: 1919px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

const MiddleSection = styled.section`
  background-color: ${CommonStyling.backgroundColor};

  padding-top: 10.383vh;
  padding-bottom: 7.404vh;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-position: center;
  background-size: cover;
  gap: 8.542vw;

  .mid-top {
    font-size:;
  }

  @media only screen and (min-width: 768px) {
    padding: 25.213vh 13.5vw 21.702vh 13.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
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
  margin-bottom: 3rem;
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
  }
`;
const MidBot = styled.div`
  & > div:nth-child(1) {
    margin-bottom: 3rem;
  }

  .select-btn {
    width: 100%;
    padding: 1rem;
  }

  ul {
    padding-left: 1.25rem;
  }

  .common {
    padding-left: 1.15rem;
    list-style: disc;
    .common-mobile {
      color: ${CommonStyling.contrastColor};
      font-size: ${CommonStyling.body3FontSize};
      line-height: ${CommonStyling.body3LineHeight};
      margin-top: 26px;
    }
    .common-mobile::marker {
      color: ${CommonStyling.primaryColor};
    }
  }
`;
const MidRight = styled.div`
  & > div:nth-child(1) {
    margin-bottom: 3rem;
  }
  .select-btn {
    width: 100%;
    padding: 1rem;
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
  color: ${CommonStyling.contrastColor};
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

const CurriculumTitleMobile = styled.div`
  font-size: ${CommonStyling.h3FontSize};
  line-height: ${CommonStyling.h3LineHeight};
  font-weight: 700;
`;

const InstructorSection = styled.section`
  background-color: #f2f2f2;
  border-radius: 32px 32px 0px 0px;

  article {
    padding-top: 9.319vh;
    // padding-bottom: 2.789vh;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    @media only screen and (min-width: 769px) {
      padding: 18.191vh 13.5vw 0 13.5vw;
    }

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
`;

export default ProgramOverview;
