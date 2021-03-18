import React from "react";
import styled, { keyframes } from "styled-components";
import style from "styled-components";
import { GoArrowDown } from "react-icons/Go";
import Link from "next/link";

const ScrollArrow = () => {
  return (
    <div className="arrow-container">
      <GoArrowDown />
    </div>
  );
};

export default ScrollArrow;
