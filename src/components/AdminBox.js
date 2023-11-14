import React from "react";
import styled from "styled-components";
import Button from "../components/ReusableElements/Button";
import useWindowWidth from "./Hooks/useWindowWidth";
import btmImage from "../assets/img/wmdd/homeBottom.png";
import btmImage1920 from "../assets/img/wmdd/homeBtm1920.png";
import btmImage1440 from "../assets/img/wmdd/homeBtm1440.png";

import { HomeData } from "../lib/HomeData";
import { CommonStyling } from "../lib/CommonStyling";

const AdminBox = () => {
  const width = useWindowWidth();

  const srcImage = () => {
    if (width >= 1920) {
      return btmImage1920;
    } else if (width < 1920 && width >= 1440) {
      return btmImage1440;
    } else if (width < 1440 && width >= 1024) {
      return btmImage;
    } else if (width < 1024 && width >= 768) {
      return btmImage;
    } else if (width < 768 && width >= 695) {
      return btmImage1440;
    } else if (width < 669 && width > 425) {
      return btmImage;
    } else {
      return btmImage;
    }
  };
  return (
    <AdmissionContainer>
      <ImageDiv>
        <BtmImg src={srcImage()} />
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

  @media only screen and (min-width: 768px) {
    max-width: 50vw;
    border-top-right-radius: 0px;
    height: 100%;
  }

  @media screen and (max-width: 1439px) and (min-width: 1155px) {
    object-position: right;
  }
  @media screen and (max-width: 1154px) and (min-width: 870px) {
    object-position: 90%;
  }

  @media screen and (max-width: 869px) and (min-width: 768px) {
    object-position: 80%;
  }
  @media screen and (max-width: 768) and (min-width: 695px) {
    object-position: 80%;
  }

  @media screen and (max-width: 694px) and (min-width: 527px) {
    object-position: right;
  }

  @media screen and (max-width: 526px) and (min-width: 425px) {
    object-position: 85%;
  }

  @media screen and (max-width: 424px) and (min-width: 0px) {
    object-position: 80%;
  }
`;

const AdminBoxDetails = styled.div`
  background-color: ${CommonStyling.primaryColor};
  width: 100%;
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
