"use client";

import LenghtBtn from "../lenghtBtn/lenghtBtn";
import ThemeBtn from "../themeBtn/ThemeBtn";
import cls from "./header.module.scss";
import { Logo } from "../logo/ui/Logo";
import { NavHeader } from "../navHeader/ui/NavHeader";
import { LogAccountBtn } from "../LogAccountBtn/ui/LogAccountBtn";
import { useState } from "react";

export default function Header() {
  const [isSubstrate, setSubstrate] = useState(false);

  function substrateOnOff() {
    setSubstrate(!isSubstrate);
  }

  return (
    <>
      <header className={cls.header}>
        <div className={cls.headerBtn}>
          <ThemeBtn />
          <LenghtBtn />
        </div>
        <div className={cls.headerLogo}>
          <Logo />
        </div>
        <div className={cls.headerMobile}>
          <button onClick={substrateOnOff}>📄</button>
          <div
            className={`substrate ${isSubstrate ? "active" : ""}`}
            onClick={substrateOnOff}
          >
            <NavHeader />
          </div>
        </div>
        <div className={cls.headerDesktop}>
          <NavHeader />
        </div>

        <div className={cls.headerRight}>
          <LogAccountBtn />
        </div>
      </header>
    </>
  );
}
