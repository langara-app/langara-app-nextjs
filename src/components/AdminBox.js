import React from "react";
import styled from "styled-components";
import Button from "../components/ReusableElements/Button";
import useWindowWidth from "./Hooks/useWindowWidth";
import btmImage from "../assets/img/wmdd/homeBottom.png";

import { HomeData } from "../lib/HomeData";
import { CommonStyling } from "../lib/CommonStyling";

const AdminBox = () => {
  const width = useWindowWidth();
  return (
    <AdmissionContainer>
      <ImageDiv>
        <BtmImg src={btmImage} />
      </ImageDiv>
      <AdminBoxDetails>
        <AdminTitle>{HomeData.lastMessage.title}</AdminTitle>
        <AdminDescription>{HomeData.lastMessage.description}</AdminDescription>
        <ButtonWrapper>
          <Button
            text={"Explore Program Overview"}
            font={CommonStyling.body2FontSize.split("r")[0]}
            color={"#F15A22"}
            bcg={"#FFFFFF"}
            section={"joinWMDD"}
            borderColor={"transparent"}
            to={"overview"}
            mobile={true}
            hover={true}
          />
        </ButtonWrapper>
      </AdminBoxDetails>
    </AdmissionContainer>
  );
};

const AdmissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const ImageDiv = styled.div`
  line-height: 0%;

  @media only screen and (min-width: 768px) {
    max-width: 50vw;
  }
`;

const BtmImg = styled.img`
  object-fit: cover;
  height: 60vh;
  max-width: 100vw;
  width: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  object-position: 95%;

  @media only screen and (min-width: 768px) {
    max-width: 50vw;
    border-top-right-radius: 0px;
    object-position: 70% 30%;
    height: 100%;
  }
`;

const AdminBoxDetails = styled.div`
  background-color: ${CommonStyling.primaryColor};

  padding: 3rem 5.4vw;
  @media screen and (min-width: 768px) {
    padding: 19.79vh 5.5556vw;
    max-width: 50vw;
    border-top-right-radius: 32px;
  }
`;

const AdminTitle = styled.h2`
  margin: 0;
  padding-top: 4.7222vh;
  font-weight: bold;
  font-size: ${CommonStyling.h1FontSize};
  @media only screen and (min-width: 768px) {
    padding-top: unset;
  }
`;

const AdminDescription = styled.p`
  font-weight: 400;
  font-size: ${CommonStyling.body1FontSize};
  line-height: ${CommonStyling.body1LineHeight};
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 2.5rem;

  @media only screen and (min-width: 768px) {
    padding-top: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export default AdminBox;
