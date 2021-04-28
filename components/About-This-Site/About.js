import React from "react";
import styled from "styled-components";
import { AboutThisSiteData } from '../../lib/AboutThisSiteData';
import Link from "next/link";

const AboutThisSite = () => {

    const team = AboutThisSiteData.team;
    const teamDetails = team.map((member, index) => 
      <MemberWrapper key={index}>
        <MemberImage src={member.image} />
        <MemberName>{member.name}</MemberName>
        <MemberDetails>{member.title}</MemberDetails>
        <MemberDetails>{member.year}</MemberDetails>
        <Link href={member.linkedIn}>
                <a>
                    <MemberLinkedIn>Link to LinkedIn</MemberLinkedIn>
                </a>
          </Link>
      </MemberWrapper>
    );

  return (
    <Wrapper>
        <IntroWrapper>
          <Title>{AboutThisSiteData.header.title}</Title>
          <Paragraph>{AboutThisSiteData.header.description}</Paragraph>
          <Paragraph>{AboutThisSiteData.header.description2}</Paragraph>
        </IntroWrapper>
        
        <TeamWrapper>
          <TeamTitle>Our Team</TeamTitle>
          <Team>
            {teamDetails}
          </Team>
        </TeamWrapper>

        <Des_Wrapper>
          <DesTitle>{AboutThisSiteData.wireframe.title}</DesTitle>
          <DesParagraph>{AboutThisSiteData.wireframe.description}</DesParagraph>
          <ButtonWrapper>
            <DesButton>
              <Link href={AboutThisSiteData.wireframe.button}>
                <a>
                    <ButtonDetails>Link to Mockup</ButtonDetails>
                </a>
              </Link>
            </DesButton>
          </ButtonWrapper>
        </Des_Wrapper>

        <Dev_Wrapper>
          <DevTitle>{AboutThisSiteData.development.title}</DevTitle>
          <DevParagraph>{AboutThisSiteData.development.description}</DevParagraph>
          <ButtonWrapper>
            <DevButton>
              <Link href={AboutThisSiteData.development.button}>
                <a>
                    <ButtonDetails>Link to GitHub</ButtonDetails>
                </a>
              </Link>
            </DevButton>
          </ButtonWrapper>
        </Dev_Wrapper>
    </Wrapper>
  );
};

export default AboutThisSite;

const IntroWrapper = styled.div`
  margin: 0 32px;
  padding-bottom: 20px;
`;
const MemberWrapper = styled.div`
  margin-bottom: 40px;
`;
const MemberImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%
`;
const MemberName = styled.h3`
  color: #C36448;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 0;

  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
const MemberDetails = styled.p`
  font-size: 13px;
  font-weight: 200;
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;
const MemberLinkedIn = styled.p`
  margin: 0;
  text-decoration: underline;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;
const TeamWrapper = styled.div`
  background-color: #FFFFFF;
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
`;
 const Team = styled.div`
  @media only screen and (min-width: 768px) {
    width: 750px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const Title = styled.h1`
  color: #C36448;
  font-size: 32px;
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    width: 725px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    font-size: ${(50 / 1366) * 100}vw;
  }
`;
const Paragraph = styled.p`
    font-weight: 200;
    font-size: 15px;

    @media only screen and (min-width: 768px) {
      width: 725px;
      margin-left: auto;
      margin-right: auto;
      font-size: ${(19 / 1366) * 100}vw;
    }
`;
const TeamTitle = styled.h2`
  font-size: 32px;
  padding-top: 25px;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    text-align: left;
    font-size: ${(50 / 1366) * 100}vw;
    width: 750px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Des_Wrapper = styled.div`
  background-color: #675D51;
  padding-top: 5px;
  padding-bottom: 50px;
`;
const Dev_Wrapper = styled.div`
  background-color: #FFFFFF;
  padding-top: 5px;
  padding-bottom: 50px;
`;
const DevTitle = styled.h2`
  color: #C36448;
  font-size: 32px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
    width: 725px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${(50 / 1366) * 100}vw;
  }
`;
const DesTitle = styled.h2`
  color: #FFF2A8;
  font-size: 32px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
    width: 725px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${(50 / 1366) * 100}vw;
  }
`;
const DesParagraph = styled.p`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 200;
  margin: 0 32px;

  @media only screen and (min-width: 768px) {
    width: 725px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${(19 / 1366) * 100}vw;
  }
`;
const DevParagraph = styled.p`
  font-size: 15px;
  font-weight: 200;
  margin: 0 32px;

  @media only screen and (min-width: 768px) {
    width: 725px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${(19 / 1366) * 100}vw;
  }
`;
const DesButton = styled.div`
  color: #FFFFFF;
  text-align: center;
  width: 200px;
  height: 53px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #FFFFFF;
  margin-top: 30px;
  font-size: 20px;

  @media only screen and (min-width: 768px) {
    margin-left: 0;
  }
`;
const DevButton = styled.div`
  text-align: center;
  width: 200px;
  height: 53px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #675D51;
  margin-top: 30px;
  font-size: 20px;

  @media only screen and (min-width: 768px) {
    margin-left: 0;
  }
`;
const ButtonDetails = styled.p`
  margin-top: 8px;
  font-weight: 600;
`;
const ButtonWrapper = styled.div`

@media only screen and (min-width: 768px) {
  width: 725px;
  margin-left: auto;
  margin-right: auto;
}
`;
const Wrapper = styled.section``;
