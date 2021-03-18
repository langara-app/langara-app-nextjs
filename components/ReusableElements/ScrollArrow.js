import React from "react";
import styled, { keyframes } from "styled-components";
import style from "styled-components";
import { ImArrowDown } from "react-icons/Im";
import Link from "next/link";

const ScrollArrow = () => {
  return (
    <div className="arrow-container">
      <ImArrowDown />
    </div>
  );
};

export default ScrollArrow;
