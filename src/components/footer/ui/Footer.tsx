"use client";

import { useTranslate } from "src/lib/useTranslate";
import cls from "./footer.module.scss";

export const Footer = () => {
  const t = (key: string) => useTranslate({ filename: "Footer", key });
  return (
    <footer className={cls.footer}>
      {/* <h3>Часто задаваемые вопросы</h3> */}
      <h3>{t("faq")}</h3>
      <h2>{t("contacts")}</h2>
      <p>{t("email")}</p>
      <p>{t("phone")}</p>
      {/* <p>Email: support@tournyverse.com</p> */}
      {/* <p>Телефон: +7 (999) 123-45-67</p> */}
    </footer>
  );
};
