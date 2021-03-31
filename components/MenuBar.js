import React, { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/MenuBar.module.css";
import { MenuData } from "../lib/MenuData";

import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";

import useWindowWidth from "./Hooks/useWindowWidth";

const MenuBar = () => {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return width < 768 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "7vw 6vw",
      }}
    >
      <div>
        <Link href="/">
          <a>
            <img
              className={styles.langara_logo}
              src={logo}
              alt="Langara College Logo"
            />
          </a>
        </Link>
      </div>
      <Menu
        right
        stack
        isOpen={open}
        onOpen={openMenu}
        onClose={openMenu}
        customBurgerIcon={<img src={hamburger} />}
      >
        {MenuData.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <a className="menu-item" onClick={openMenu}>
              {menu.title}
            </a>
          </Link>
        ))}
      </Menu>
    </div>
  ) : (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <a>
            <img
              className={styles.langara_logo}
              src={logo}
              alt="Langara College Logo"
            />
          </a>
        </Link>
      </div>
      <div className={styles.menues}>
        {MenuData.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <a className={styles.menuItem} onClick={openMenu}>
              {menu.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
