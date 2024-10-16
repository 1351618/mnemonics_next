"use client";

import cls from "./navHeader.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../lib/items";
import { useTranslate } from "src/lib/useTranslate";

export const NavHeader = () => {
  const t = (key: string) => useTranslate({ filename: "NavHeader", key });

  const path = usePathname();

  return (
    <nav className={cls.navHeader}>
      {navItems.map((item, index) => {
        const isActive = path === item.to;

        return (
          <Link
            href={item.to}
            key={index}
            className={isActive ? cls.active : ""}
          >
            {t(item.text.toLowerCase())}
          </Link>
        );
      })}
    </nav>
  );
};
