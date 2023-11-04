import React from "react";
import Link from "next/link";
import styled from "styled-components";
import useWindowWidth from "./Hooks/useWindowWidth";
import logo from "../assets/logo.svg";

import { HomeData } from "../lib/HomeData";
import { MenuData } from "../lib/MenuData";
import { CommonStyling } from "../lib/CommonStyling";

const Footer = () => {
  const width = useWindowWidth();

  return width < 768 ? (
    <Container>
      <LinkWrapper>
        <Logo>
          <img src={logo} style={{ display: "block", width: "100%" }} />
        </Logo>
        {MenuData.map((menu, index) => {
          if (index != 0) {
            return (<Link href={menu.link} key={index}>
              <a className="menu-item">{menu.title}</a>
            </Link>)
          }
        })}
        <a href="https://langara.ca/programs-and-courses/programs/web-and-mobile-app/admission-requirements.html" target="_blank">Apply</a>
        <a href={HomeData.footer.contactLink}>
          Contact
        </a>
      </LinkWrapper>
      <CopyRight>
        <span>
          &copy; 2022 Langara College. All rights reserved.
        </span>
        <a href="https://langara.ca/about-langara/records-management-and-privacy/privacy/privacy-statement.html" target="_blank">
          Privacy Policy
        </a>
      </CopyRight>
    </Container>
  ) : (
    <FlexContainer>
      <LinkWrapper>
        <Logo>
          <img src={logo} style={{ display: "block", width: "100%" }} />
        </Logo>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {MenuData.map((menu, index) => {
            if (index != 0) {
              return (<Link href={menu.link} key={index}>
                <a className="menu-item">{menu.title}</a>
              </Link>)
            }
          })}
          <a href="https://langara.ca/programs-and-courses/programs/web-and-mobile-app/admission-requirements.html" target="_blank">Apply</a>
          <a href={HomeData.footer.contactLink} target="_blank">
            Contact
          </a>
        </div>
      </LinkWrapper>
      <CopyRight>
        <span>
          &copy; 2022 Langara College. All rights reserved.
        </span>
        <a href="https://langara.ca/about-langara/records-management-and-privacy/privacy/privacy-statement.html" target="_blank">
          Privacy Policy
        </a>
      </CopyRight>
    </FlexContainer>
  );
};

const Container = styled.div`
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #21263A;
  font-weight: 300;
`;

const LinkWrapper = styled.div`
  padding: 4vh 5.4vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4vh 13.5vw;
  }
`;

const FlexContainer = styled.div`
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 30%;
  height: 41.65px;
  width: 87.9px;

  @media only screen and (min-width: 768px) {
    height: 41.65px;
    width: 87.9px;
    margin: 0;
  }
`;

const CopyRight = styled.div`
  padding: 2vh 6vw;
  display: flex;
  flex-direction: column;
  font-size: ${CommonStyling.body3FontSize};
  border-top: 1px solid #CFD8DC;
  width: 100%;
  color: #546E7A;
  align-items: center;
  gap: 1rem;
  font-family: ${CommonStyling.secondaryFontFamily};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2vh 13.5vw;
  }
`;

export default Footer;
