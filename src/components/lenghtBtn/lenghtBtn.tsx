"use client";

import { useEffect } from "react";
import { languages } from "src/app/i18n/settings";
import { useLang } from "src/lib/langContext";

export default function LengthBtn() {
  const { lang, changeLanguage } = useLang();

  useEffect(() => {
    localStorage.setItem("lang", lang as string);
  }, [lang]);

  return (
    <>
      {languages
        .filter((l) => l !== lang)
        .map((l, index) => {
          return (
            <button
              key={l}
              className="miniBtn"
              onClick={() => {
                changeLanguage?.(l);
              }}
            >
              {index > 0 && " or "} {l}
            </button>
          );
        })}
    </>
  );
}
