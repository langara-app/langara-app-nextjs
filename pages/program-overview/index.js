import React from "react";
import Head from "next/head";
import { WmddData } from '../../lib/WmddData';
import styled from "styled-components";
import useWindowWidth from "../../components/Hooks/useWindowWidth";
import placeholder from '../../assets/img/wmdd/placeholder.svg'
import Button from "../../components/ReusableElements/Button";


const AboutUs = () => {
  const width = useWindowWidth();
  return (
    <div>
      <Head>
        <title>{WmddData.header.title}</title>
      </Head>

      <WmddContainer>
        <WmddWebLeft>
          {width < 768 ? (
            <div>
              <WmddTitle>{WmddData.header.title}</WmddTitle>
              <Header1>{WmddData.header.subtitle}</Header1>
              <Header2>{WmddData.header.description}</Header2>
              <WmddImg src={placeholder} alt="Program Overview Image" />
            </div>
          ) : (
            <div>
              <WmddTitle>{WmddData.header.title}</WmddTitle>
              <Header1>{WmddData.header.subtitle}</Header1>
              <Header2>{WmddData.header.description}</Header2>
            </div>
          )}
        </WmddWebLeft>
        {width < 768 ? null : (
          <WmddImageContainer>
            <WmddImg src={placeholder} alt="Program Overview Image" />
          </WmddImageContainer>
        )}
      </WmddContainer>

      <KickStart>
        <KickImg src={WmddData.kickStart.image} />

        <KickDescWrapper>
          <KickTitle>{WmddData.kickStart.title}</KickTitle>
          <KickDesc>{WmddData.kickStart.desc}</KickDesc>
        </KickDescWrapper>
      </KickStart>

      <NextStepContainer>
        <NextStepDetails>
          <NextTitle>{WmddData.nextStep.title}</NextTitle>
          <NextDesc>{WmddData.nextStep.desc}</NextDesc>

          <ButtonWrapper>
            <Button
              text={"Apply now"}
              font={16}
              color={"#37474F"}
              bcg={"white"}
              section={"joinWMDD"}
              borderColor={"transparent"}
            />
          </ButtonWrapper>
        </NextStepDetails>
      </NextStepContainer>
    </div>
  );
};

const NextStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9.8vh 5.4vw;
  background-color: rgba(222, 63, 33, 1);
  color: #FFFFFF;
  align-items: flex-start;

  @media only screen and (min-width: 768px){
    padding: 10vh 13.5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const NextStepDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const NextTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 2.375rem;
  line-height: 3.125rem;
  @media only screen and (min-width: 768px) {
    font-size: ${(45 / 1366) * 100}vw;
    margin-bottom: ${(20 / 1366) * 100}vw;
  }
`

const NextDesc = styled.p`
  text-align: center;
  font-weight: 200;
  font-size: 1.25rem;
  line-height: 1.875rem;
  padding-top: 1rem;
  padding-bottom: 4.6vh;
  margin: 0;

  @media only screen and (min-width: 768px) {
    padding-left: 18vw;
    padding-right: 18vw;
  }
`

const ButtonWrapper = styled.div`
  margin: 0 auto;

  @media only screen and (min-width: 768px){
    /* width: auto; */
  }
`;

const KickStart = styled.div`
  padding: 7.8vh 4.1vw 9.7vh;

@media screen and (min-width: 768px){
  display: flex;
  flex-direction: row-reverse;
  padding: 10vh 13.5vw 10.9vh 13.5vw;
  gap: 2vw;
}
`

const KickImg = styled.img`
  width: 100%;

@media screen and (min-width: 768px){
  max-width: 477px;
}
`

const KickDescWrapper = styled.div`
  padding-top: 4.8vh;

  @media only screen and (min-width: 768px) {
    padding-top:0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`
const KickTitle = styled.h2`
  margin: 0;
  font-size: 2.375rem;
  color: rgba(33, 38, 58, 1);
  line-height: 3.125rem;
  font-weight: 700;
`

const KickDesc = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: rgba(33, 38, 58, 1);
  margin: 0;
  padding-top: 2vh;

  @media screen and (min-width: 768px) {
    padding-top: 1.5vh;
  }
`

const WmddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background: url(${({ img }) => img});
  background-color: #F3FBFF;
  position: relative;
  padding-top: 5.7vh;
  padding-left: 5.2vw;
  padding-right: 4.4vw;
  color: rgba(55, 71, 79, 1);
  text-align: left;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    padding: 11.5vh 13vw 8.5vh 13.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "pic desc";
    justify-content: unset;
    align-items: unset;
    height: unset;
  }
`

const WmddWebLeft = styled.div`
  @media only screen and (min-width: 768px) {
    grid-area: desc;
  }
`

const WmddTitle = styled.h1`
  margin: 0;
  font-size: 0.85rem;
  line-height: 18px;
  font-weight: 400;
  font-family: "Ubuntu Mono";

  @media only screen and (min-width: 768px) {
    font-size: 0.85rem;
  }
`

const Header1 = styled.p`
    margin-top: 0.5rem;
  font-weight: 700;
  font-size: 2.3rem;
  color: rgba(38, 50, 56, 1);
  margin-bottom: 1.5rem;
  line-height: 3.125rem;

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
    text-align: left;
    margin-bottom: 1.5rem;
    line-height: 4rem;
  }
`

const Header2 = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.875rem;

@media only screen and (min-width: 768px) {
  font-size: ${((463 / 1366) * 100)} vw;
  text-align: left;
  font-size: 1.25rem;
  margin-bottom: 0;
}
`

const WmddImageContainer = styled.div`
    @media only screen and (min-width: 768px) {
    grid-area: pic;
    max-width: 540px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const WmddImg = styled.img`
  padding-top: 5.7vh;
  width: 100%;
@media only screen and (min-width: 768px) {
  padding-top: 0;
  display: block;
  width: 100%;
  height: auto;
  padding-right: 1.6vw;
  margin: 0 auto;
}
`

export default AboutUs;
