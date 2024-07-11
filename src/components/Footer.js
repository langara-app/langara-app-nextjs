import React from "react";
import Link from "next/link";
import styled from "styled-components";
import useWindowWidth from "./Hooks/useWindowWidth";
import logo2 from "../assets/logo2.svg";

import { HomeData } from "../lib/HomeData";
import { MenuData } from "../lib/MenuData";
import { CommonStyling } from "../lib/CommonStyling";
import Image from "next/image";
import Button from "../components/ReusableElements/Button";

const Footer = () => {
  const width = useWindowWidth();

  return width < 768 ? (
    <Container>
      <LinkWrapper>
        <Logo>
          <Image src={logo2} width={87.9} height={41.65} alt="Logo" />
        </Logo>
        {MenuData.map((menu, index) => {
          return (
            <Link
              href={menu.link}
              key={index}
              className="menu-item"
              style={{ paddingLeft: "10px" }}
            >
              {menu.title}
            </Link>
          );
        })}
        <Button
          link={"https://langara.ca/admissions/apply-to-langara/index.html"}
          text="Apply"
          color="#FFFFFF"
          bcg="#F15A22"
          font={CommonStyling.body2FontSize.split("r")[0]}
        />
      </LinkWrapper>
      <CopyRight>
        <span>&copy; {(new Date()).getFullYear()} Langara College. All rights reserved.</span>
        <a
          href="https://langara.ca/about-langara/records-management-and-privacy/privacy/privacy-statement.html"
          target="_blank"
        >
          Privacy Policy
        </a>
      </CopyRight>
    </Container>
  ) : (
    <FlexContainer>
      <LinkWrapper>
        <Logo>
          <Image src={logo2} width={87.9} height={41.65} alt="Logo" />
        </Logo>
        <div className="menu-items-wrapper">
          {MenuData.map((menu, index) => {
            return (
              <Link href={menu.link} key={index} className="menu-item">
                {menu.title}
              </Link>
            );
          })}
          <a className="menu-item" href={HomeData.footer.contactLink} target="_blank">
            Contact
          </a>
          <Button
            link={"https://langara.ca/admissions/apply-to-langara/index.html"}
            text="Apply"
            color="#FFFFFF"
            bcg="#F15A22"
            font={CommonStyling.body2FontSize.split("r")[0]}
            hover={true}
          />
        </div>
      </LinkWrapper>
      <CopyRight>
        <span>&copy; {(new Date()).getFullYear()} Langara College. All rights reserved.</span>
        <a
          href="https://langara.ca/about-langara/records-management-and-privacy/privacy/privacy-statement.html"
          target="_blank"
        >
          Privacy Policy
        </a>
      </CopyRight>
    </FlexContainer>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #21263a;
  padding: 16px 48px;
`;

const FlexContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  padding: 1rem 0;
  .menu-items-wrapper {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  @media only screen and (max-width: 975px) {
    .menu-items-wrapper {
      text-align: center;
      gap: 1.25rem;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .menu-item {
    &:hover {
      color: ${CommonStyling.primaryColor};
    }
  }
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
  display: flex;
  flex-direction: column;
  font-size: ${CommonStyling.body3FontSize};
  border-top: 1px solid #cfd8dc;
  width: 100%;
  color: #546e7a;
  align-items: center;
  gap: 1rem;
  padding-top: 0;
  padding-bottom: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
  }
`;

export default Footer;
