import React from "react";
import styled from "styled-components";
import Button from "../components/ReusableElements/Button";
import useWindowWidth from "./Hooks/useWindowWidth";
import btmImage from '../assets/img/wmdd/Homebtm.png'

import { HomeData } from "../lib/HomeData";
import { CommonStyling } from "../lib/CommonStyling";

const AdminBox = () => {
  const width = useWindowWidth();
  return (
    <AdmissionContainer>
      <BtmImg src={btmImage}></BtmImg>
      <AdminBoxDetails>
        <AdminTitle>{HomeData.lastMessage.title}</AdminTitle>
        <AdminDescription>{HomeData.lastMessage.description}</AdminDescription>
        <ButtonWrapper>
          <Button
            text={"Explore Program Overview"}
            font={CommonStyling.body2FontSize.split('r')[0]}
            color={"#37474F"}
            bcg={"white"}
            section={"joinWMDD"}
            borderColor={"transparent"}
          />
        </ButtonWrapper>
      </AdminBoxDetails>
    </AdmissionContainer>
  );
};

const ButtonWrapper = styled.div`
  /* width: 80%; */

  @media only screen and (min-width: 768px){
    /* width: auto; */
  }
`;

const AdmissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8vh 5.4vw;
  background-color: rgba(222, 63, 33, 1);
  padding-bottom: 70px;
  color: #FFFFFF;
  align-items: flex-start;
  gap: 2rem;

  @media only screen and (min-width: 768px){
    padding: 7vh 13.5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const AdminTitle = styled.h2`
  margin: 0;
  text-align: left;
  font-weight: bold;
  font-size: ${CommonStyling.h2FontSize};
  line-height: ${CommonStyling.h2LineHeight};
  @media only screen and (min-width: 768px) {
  }
`;
const AdminDescription = styled.p`
  text-align: left;
  font-weight: 200;
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight};
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  margin: 0;
  @media only screen and (min-width: 768px) {
  }
`;

const AdminBoxDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const BtmImg = styled.img`
  width: 100%;
  padding-bottom: 2.5rem;

  @media only screen and (min-width: 768px){
    max-width: 429px;
  }
`

export default AdminBox;
