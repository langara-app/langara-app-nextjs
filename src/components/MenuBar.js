import React, { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/MenuBar.module.css";
import { MenuData } from "../lib/MenuData";
import Button from "../components/ReusableElements/Button";

import logo2 from "../assets/logo2.svg";
import logowhite from "../assets/logo-white.svg";
import hamburger from "../assets/hamburgerMenu.svg";

import useWindowWidth from "./Hooks/useWindowWidth";
import styled from "styled-components";
import { CommonStyling } from "../lib/CommonStyling";
import Image from "next/image";

const MenuBar = () => {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);
  const [checkedIndex, setCheckedIndex] = useState(0);

  const openMenu = () => {
    setOpen(!open);
  };

  const scrutinizer = (val) => {
    return parseInt(val.split(" ")[2]);
  };

  const setCat = (values) => {
    console.log(values.className);
    setCheckedIndex(scrutinizer(values.className));
  };

  return width < 768 ? (
    <MobileMenuContainer>
      <div>
        <Link href="/">
          <Image
            className={styles.langara_logo}
            src={logo2}
            alt="Langara College Logo"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <Menu
        right
        stack
        isOpen={open}
        onOpen={openMenu}
        onClose={openMenu}
        customBurgerIcon={<img src={hamburger} />}
        width={"100%"}
      >
        <div>
          <Link href="/">
            <Image
              className={styles.langara_logo_in_menu}
              src={logowhite}
              alt="Langara College Logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
        {MenuData.map((menu, index) => (
          <Link href={menu.link} key={index} legacyBehavior>
            <MenuLink className="menu-item" onClick={openMenu}>
              {menu.title}
            </MenuLink>
          </Link>
        ))}
        <Button
          link={"https://langara.ca/admissions/apply-to-langara/index.html"}
          text="Apply"
          bcg="#FFFFFF"
          color="#F15A22"
          font={CommonStyling.body2FontSize.split("r")[0]}
        ></Button>
      </Menu>
    </MobileMenuContainer>
  ) : (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <Image
            className={styles.langara_logo}
            src={logo2}
            alt="Langara College Logo"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <div className={styles.menues}>
        {MenuData.map((menu, index) => (
          <Link href={menu.link} key={index} legacyBehavior>
            <MenuLinkWeb
              className={index + 1}
              onClick={(e) => {
                setCat(e.target);
              }}
              color={index + 1}
              checked={checkedIndex}
            >
              {menu.title}
            </MenuLinkWeb>
          </Link>
        ))}
        <Button
          link={"https://langara.ca/admissions/apply-to-langara/index.html"}
          text="Apply"
          bcg="#F15A22"
          color="#FFFFFF"
          hover={true}
          font={CommonStyling.body2FontSize.split("r")[0]}
        ></Button>
      </div>
    </div>
  );
};

const MenuLink = styled.a`
  color: white;
  margin: 1rem 0;
  font-weight: 200;
  cursor: pointer;
  font-size: 1rem;

  @media only screen and (min-width: 768px) {
    color: #6b6156;
  }
`;

const MenuLinkWeb = styled.a`
  margin-left: 3.5vw;
  font-weight: ${({ color, checked }) => (color === checked ? 700 : 400)};
  font-size: ${CommonStyling.body2FontSize};
  color: ${({ color, checked }) => (color === checked ? "#F15A22" : "#263238")};
  cursor: pointer;
`;

const MobileMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  text-align: center;
  background-color: #ffffff;
  border-bottom: 1px solid #cfd8dc;

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 20px;
    height: 18px;
    right: 25px;
    top: 34px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${CommonStyling.contrastColor};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    right: 30px !important;
    top: 30px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    width: 5px !important;
    height: 28px !important;
    background: white;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background-color: #f15a22;
    padding: 2.5em 1.5em 0;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default MenuBar;
