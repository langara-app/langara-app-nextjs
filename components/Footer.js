import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { HomeData } from "../lib/HomeData";

const Footer = () => {
  return (
    <Container>
      <Logo>
        <img
          src="https://dummyimage.com/300x200/000/fff"
          style={{ display: "block", width: "100%" }}
        />
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
  font-weight: 300;
`;
const Logo = styled.div`
  margin: 1rem auto;
  width: 30%;
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
`;

const CopyRight = styled.p`
  font-size: 10px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export default Footer;