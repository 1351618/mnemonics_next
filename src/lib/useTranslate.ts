"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "src/app/i18n";
import { useLang } from "./langContext";

interface useTranslateProps {
  filename: string;
  key: string;
}

export const useTranslate = (props: useTranslateProps) => {
  const { key, filename } = props;
  const { lang } = useLang();

  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    async function translateText() {
      const { t } = await useTranslation(
        localStorage.getItem("lang") as string,
        filename,
        {}
      );

      // localStorage.setItem("lang", lang);
      setTranslatedText(t(key));
    }
    translateText();
  }, [lang]);

  return translatedText;
};
