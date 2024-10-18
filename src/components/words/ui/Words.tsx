"use client";

import Image from "next/image";
import cls from "./words.module.scss";
import Link from "next/link";
import IMG from "../../../assets/images/images";
import { useEffect, useState } from "react";

const tabs = ["частоте", "алфавиту", "группам"];

export const Words = () => {
  const [isTab, setTab] = useState(0);

  useEffect(() => {
    console.log(isTab);
  }, [isTab]);

  return (
    <div className={cls.words}>
      <nav className={cls.wordsNav}>
        <div>
          {tabs.map((val, ind) => (
            <label key={ind}>
              <input
                type="radio"
                name="tabs"
                checked={isTab === ind}
                onClick={() => setTab(ind)}
              />
              {val}
            </label>
          ))}
        </div>
        <button>статистика</button>
      </nav>
      <div className={cls.wordsMain}>
        wordsMain
        <div className={cls.statistics}>statistics</div>
      </div>
    </div>
  );
};

const wordsData = {
  1: {
    word: "и",
    frequency: 1,
    group: "алфавит",
    translations: {
      en: "and",
      el: "el",
    },
  },
  2: {
    word: "в",
    frequency: 2,
    group: "алфавит",
    translations: {
      en: "house",
      el: "el",
    },
  },
};
