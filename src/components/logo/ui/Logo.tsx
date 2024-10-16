"use client";

import Image from "next/image";
import cls from "./logo.module.scss";
import Link from "next/link";
import IMG from "../../../assets/images/images";

export const Logo = () => {
  return (
    <>
      <Link className={cls.logo} href='/'>
        <Image src={IMG.Logo} alt='logo'></Image>
      </Link>
    </>
  );
};
