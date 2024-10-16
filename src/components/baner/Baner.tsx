"use client";

import Image from "next/image";
import cls from "./baner.module.scss";
import IMG from "../../assets/images/images";

import { useTranslate } from "src/lib/useTranslate";

export default function Baner() {
  const t = (key: string) => useTranslate({ filename: "banner", key });

  return (
    <div className={cls.baner}>
      <Image className={cls.banerBc} src={IMG.Baner} alt="" priority />
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>

      <ul>
        {[0, 1, 2, 3].map((index) => (
          <li key={index}>{t(`features.${index}`)}</li>
        ))}
      </ul>
      <button className={`middleBtn`}>{t("start")}</button>
    </div>
  );
}
