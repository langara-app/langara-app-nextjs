import React from "react";
import styled, { keyframes } from "styled-components";
import style from "styled-components";
import { GoArrowDown } from "react-icons/Go";
import Link from "next/link";

const ScrollArrow = () => {
  return (
    <ArrowContainer>
      <GoArrowDown />
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  z-index: 3;
  color: #c36448;
  margin-top: calc((20 / 375) * 100) vw;

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    width: 3.8vw;
    height: 4.4vw;
  }
`;

export default ScrollArrow;
