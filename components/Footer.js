import React from "react";
import Link from "next/link";
import styled from "styled-components";
import useWindowWidth from "./Hooks/useWindowWidth";
import logo from "../assets/logo-white.svg";

import { HomeData } from "../lib/HomeData";
import { MenuData } from "../lib/MenuData";

const Footer = () => {
  const width = useWindowWidth();

  return width < 768 ? (
    <Container>
      <Logo>
        <img src={logo} style={{ display: "block", width: "100%" }} />
      </Logo>
      <LinkWrapper>
        <Link href="/about-this-site">About this site</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/FAQs">FAQs</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="https://www.langara-app.ca/">Privacy Policy</Link>
      </LinkWrapper>

      <ContactInfo>
        <span>CONTACT</span>
        <p>100 W 49th Ave, Vancouver, BC V5Y 2Z6</p>
        <a
          href={HomeData.footer.contactLink}
          style={{ textDecoration: "underline" }}
        >
          {HomeData.footer.contactDesc}
        </a>
      </ContactInfo>
      <CopyRight>&copy; 2021 Langara College. All rights reserved.</CopyRight>
    </Container>
  ) : (
    <Container>
      <FlexContainer>
        <Logo>
          <img src={logo} style={{ display: "block", width: "100%" }} />
        </Logo>
        <FlexLinks>
          {MenuData.map((menu) => (
            <Link href={menu.link}>
              <a className="menu-item">{menu.title}</a>
            </Link>
          ))}
        </FlexLinks>
        <FlexLinks>
          <Link href="/about-this-site">About this site</Link>
          <Link href="/FAQs">FAQs</Link>
          <Link href="https://www.langara-app.ca/">Privacy Policy</Link>
        </FlexLinks>
        <ContactInfo>
          <span>CONTACT</span>
          <p>100 W 49th Ave, Vancouver, BC V5Y 2Z6</p>
          <a
            href={HomeData.footer.contactLink}
            style={{ textDecoration: "underline" }}
          >
            {HomeData.footer.contactDesc}
          </a>
        </ContactInfo>
      </FlexContainer>
      <CopyRight>&copy; 2021 Langara College. All rights reserved.</CopyRight>
    </Container>
  );
};
const Container = styled.div`
  background-color: #675d51;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 130vw;
  color: white;
  font-size: 13px;
  font-weight: 200;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */

    height: auto;
    align-items: unset;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${(54 / 1365) * 100}vw;
`;

const FlexLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: ${(19 / 1365) * 100}vw;
    font-weight: 200;
    margin-bottom: ${(16 / 1365) * 100}vw;
  }
`;

const Logo = styled.div`
  margin: 1rem auto;
  width: 30%;

  @media only screen and (min-width: 768px) {
    width: ${(167 / 1360) * 100}vw;
    height: ${(79 / 1365) * 100}vw;
    margin: 0;
  }
`;

const LinkWrapper = styled.div`
  margin: 1rem 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  span {
    font-size: 15px;
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    align-items: flex-start;

    span {
      font-size: ${(22 / 1365) * 100}vw;
      margin-bottom: ${(16 / 1365) * 100}vw;
    }
    p {
      font-size: ${(13 / 1365) * 100}vw;
      margin-bottom: ${(32 / 1365) * 100}vw;
    }
    a {
      font-size: ${(13 / 1365) * 100}vw;
      margin-bottom: ${(32 / 1365) * 100}vw;
    }
  }
`;

const CopyRight = styled.p`
  font-size: 10px;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    margin: ${(42 / 1365) * 100}vw auto ${(11 / 1365) * 100}vw;
    font-size: ${(13 / 1365) * 100}vw;
    font-weight: 200;
  }
`;

export default Footer;
