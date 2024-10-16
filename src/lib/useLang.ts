"use client";
import { useEffect, useRef, useState } from "react";

export const useLang = () => {
  let documentRef = useRef<Document | null>(null);
  const [lang, setLang] = useState(
    documentRef.current
      ? documentRef.current.querySelector("html")?.lang!
      : "en"
  );

  useEffect(() => {
    if (document !== undefined) {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        setLang(htmlElement.lang);
      }

      documentRef.current = document;
    }
  }, []);

  return lang;
};
