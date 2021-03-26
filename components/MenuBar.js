import React, { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/MenuBar.module.css";

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
              src="/langara-logo.svg"
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
        customBurgerIcon={<img src="hamburger.svg" />}
      >
        <Link href="/about-this-site">
          <a className="menu-item" onClick={openMenu}>
            WMDD at Glance
          </a>
        </Link>
        <Link href="/instructors">
          <a className="menu-item" onClick={openMenu}>
            Faculty
          </a>
        </Link>
        <Link href="/alumni">
          <a className="menu-item" onClick={openMenu}>
            Alumni Voices
          </a>
        </Link>
        <Link href="/projects">
          <a className="menu-item" onClick={openMenu}>
            Student Work
          </a>
        </Link>
        <Link href="/news-and-events">
          <a className="menu-item" onClick={openMenu}>
            News & Event
          </a>
        </Link>
      </Menu>
    </div>
  ) : (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <a>
            <img
              className={styles.langara_logo}
              src="/langara-logo.svg"
              alt="Langara College Logo"
            />
          </a>
        </Link>
      </div>
      <div className={styles.menues}>
        <Link href="/about-this-site">
          <a className={styles.menuItem} onClick={openMenu}>
            WMDD at Glance
          </a>
        </Link>
        <Link href="/instructors">
          <a className={styles.menuItem} onClick={openMenu}>
            Faculty
          </a>
        </Link>
        <Link href="/alumni">
          <a className={styles.menuItem} onClick={openMenu}>
            Alumni Voices
          </a>
        </Link>
        <Link href="/projects">
          <a className={styles.menuItem} onClick={openMenu}>
            Student Work
          </a>
        </Link>
        <Link href="/news-and-events">
          <a className={styles.menuItem} onClick={openMenu}>
            News & Event
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
