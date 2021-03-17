import React from "react";
import styled from "styled-components";
import Button from "../components/ReusableElements/Button";

import { HomeData } from "../lib/HomeData";

const AdminBox = () => {
  return (
    <AdmissionContainer>
      <AdminTitle>{HomeData.lastMessage.title}</AdminTitle>
      <AdminDescription>{HomeData.lastMessage.description}</AdminDescription>
      <Button
        text={"See Admission Requirements"}
        margin={0}
        font={18}
        size={"med"}
        color={"#675D51"}
        bcg={"white"}
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
`;
const AdminTitle = styled.h2`
  margin: 0;
  text-align: center;
`;
const AdminDescription = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 18px;
`;

export default AdminBox;
