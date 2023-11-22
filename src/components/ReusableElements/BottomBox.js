import styled from "styled-components";
import React from "react";
import { CommonStyling } from "@/lib/CommonStyling";

const BottomBox = () => {
  return <Box />;
};

export default BottomBox;

const Box = styled.div`
  height: 20px;
  width: 100%;
  border-radius: 32px 32px 0 0;
  background-color: ${CommonStyling.backgroundColor};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
