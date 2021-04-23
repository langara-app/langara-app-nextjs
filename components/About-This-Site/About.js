import React from "react";
import styled from "styled-components";
import { AboutThisSiteData } from '../../lib/AboutThisSiteData';

const AboutThisSite = () => {
    const team = AboutThisSiteData.team;

    const teamDetails = team.map((member, index) => 
      <MemberWrapper key={index}>
        <MemberImage src={member.image} />
        <MemberName>{member.name}</MemberName>
        <MemberDetails>{member.title}</MemberDetails>
        <MemberDetails>{member.year}</MemberDetails>
        <MemberLinkedIn>{member.linkedIn}</MemberLinkedIn>
      </MemberWrapper>
    );

  return (
    <Wrapper>
        <Title>{AboutThisSiteData.header.title}</Title>
        <Paragraph>{AboutThisSiteData.header.description}</Paragraph>
        <TeamWrapper>
          <TeamTitle>Our Team</TeamTitle>
          {teamDetails}
        </TeamWrapper>
        <Des_Wrapper>
          <DesTitle>{AboutThisSiteData.wireframe.title}</DesTitle>
          <DesParagraph>{AboutThisSiteData.wireframe.description}</DesParagraph>
          <DesButton>{AboutThisSiteData.wireframe.button}</DesButton>
        </Des_Wrapper>

        <Dev_Wrapper>
          <DevTitle>{AboutThisSiteData.development.title}</DevTitle>
          <DevParagraph>{AboutThisSiteData.development.description}</DevParagraph>
          <DevButton>{AboutThisSiteData.development.button}</DevButton>
        </Dev_Wrapper>
    </Wrapper>
  );
};

export default AboutThisSite;

const MemberWrapper = styled.div``

const MemberImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%`

const MemberName = styled.h3`
  color: #C36448;
  font-weight: 400;
  font-size: 20px;
  
  `;

const MemberDetails = styled.p`
  font-size: 13px;
  font-weight: 200;
  
  `;

const MemberLinkedIn = styled.p``

const TeamWrapper = styled.div`
  background-color: #FFFFFF;

 `;

const Title = styled.h1`
  color: #C36448;
  font-size: 32px;
`;

const Paragraph = styled.p`
    font-weight: 200;
    font-size: 15px;
`;

const TeamTitle = styled.h2`
  font-size: 32px;
  
  `;

const Des_Wrapper = styled.div`
  background-color: #675D51;
  
  `;

const Dev_Wrapper = styled.div`
  background-color: #FFFFFF;
  
  `;

const DevTitle = styled.h2`
  color: #C36448;
  font-size: 32px;
  `;
const DesTitle = styled.h2`
  color: #FFF2A8;
  font-size: 32px;
  
  `;
const DesParagraph = styled.p`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 200;
  
  `;
const DevParagraph = styled.p`
  font-size: 15px;
  font-weight: 200;

`
const DesButton = styled.button``
const DevButton = styled.button``


// const FullWrapper = styled.div`
//     align-items: center;
//     display: flex;
//     margin: 15px 17px;
//     margin-bottom: 0;
//     padding-bottom: 15px;
//     margin-left: auto;
//     margin-right: auto;
//     width: 50%;
// `

// const DetailsWrapper = styled.div`
//     font-size: 13px;

//     @media only screen and (min-width: 768px) {
//         font-size: ${(20 / 1365) * 100}vw;
//       }
    
// `

// const InstructorImage = styled.img`
//     width: 67px;
//     height: 67px;
//     border-radius: 50px;`

// const InstructorName = styled.p`
//     font-weight: 700;
//     padding-left: 20px;
//     margin: 0;
//     align-items: center;
// `

const Wrapper = styled.section`

// @media only screen and (min-width: 768px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//   }
`;
