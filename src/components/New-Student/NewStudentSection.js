import React from "react";
import styled from "styled-components";
import Button from "../ReusableElements/Button";
import { CommonStyling } from "@/lib/CommonStyling";

const NewStudentSection = ({
  title,
  description,
  order,
  btnTxt,
  link,
  imgSrc,
}) => {
  return (
    <Container order={order}>
      <Left order={order}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonWrapper>
          <Button
            text={btnTxt}
            font={CommonStyling.body2FontSize.split("r")[0]}
            color={"#FFFFFF"}
            bcg={"#F15A22"}
            section={"newStudents"}
            borderColor={"transparent"}
            link={link}
            mobile={true}
            hover={true}
          />
        </ButtonWrapper>
      </Left>
      <Right>
        <RightImg src={imgSrc} alt={title} />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: ${({ order }) => (!order ? "45% 1fr" : "1fr 45%")};
    // grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const Left = styled.div`
  order: ${({ order }) => (!order ? 0 : 1)};
`;

const ButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
  @media screen and (max-width: 768px) {
    margin-bottom: 2.5625rem;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: ${CommonStyling.h1FontSize} !important;
  line-height: ${CommonStyling.h1LineHeight};
  font-weight: 700;
  font-family: ${CommonStyling.primaryFontFamily};
  color: ${CommonStyling.contrastColor};
`;
const Description = styled.div`
  font-size: ${CommonStyling.body1FontSize} !important;
  line-height: ${CommonStyling.body1LineHeight};
  color: ${CommonStyling.contrastColor};
  font-weight: 400;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;
const Right = styled.div`
  line-height: 0%;
  height: 100%;

  @media screen and (max-width: 426px) {
    height: 376px;
  }
`;

const RightImg = styled.img`
  border-radius: 16px;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export default NewStudentSection;
