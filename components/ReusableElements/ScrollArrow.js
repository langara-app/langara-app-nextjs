import React from "react";
import styled, { keyframes } from "styled-components";
import style from "styled-components";
import { BiDownArrowCircle } from "react-icons/bi";
import Link from "next/link";

const ScrollArrow = ({ onClick }) => {
  return (
    <div className="arrow-container">
      <BiDownArrowCircle />
    </div>
  );
};

export default ScrollArrow;
