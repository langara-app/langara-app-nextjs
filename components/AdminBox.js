import React from "react";
import styled from "styled-components";
import Button from "../components/ReusableElements/Button";
import useWindowWidth from "./Hooks/useWindowWidth";

import { HomeData } from "../lib/HomeData";

const AdminBox = () => {
  const width = useWindowWidth();
  return (
    <AdmissionContainer>
      <AdminTitle>{HomeData.lastMessage.title}</AdminTitle>
      <AdminDescription>{HomeData.lastMessage.description}</AdminDescription>
      <Button
        text={"See Admission Requirements"}
        margin={0}
        font={18}
        color={"#675D51"}
        bcg={"white"}
        section={"joinWMDD"}
      />
    </AdmissionContainer>
  );
};

const AdmissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  background-color: #c2e5e0;
  padding-top: 70px;
  padding-bottom: 70px;
`;
const AdminTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: bold;
  @media only screen and (min-width: 768px) {
    font-size: ${(45 / 1366) * 100}vw;
    margin-bottom: ${(20 / 1366) * 100}vw;
  }
`;
const AdminDescription = styled.p`
  text-align: center;
  font-weight: 200;
  font-size: 13px;
  padding-bottom: ${(41 / 375) * 100}vw;
  @media only screen and (min-width: 768px) {
    font-size: ${(19 / 1366) * 100}vw;
    padding-bottom: ${(97 / 1366) * 100}vw;
    width: ${(510 / 1366) * 100}vw;
    margin: 0 auto;
  }
`;

export default AdminBox;
