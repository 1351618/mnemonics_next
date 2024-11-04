// import "./global.css";

import cls from "./layout.module.scss";
import "../styles/global.scss";
import { ThemeProvider } from "src/providers/themeProvider/ui/ThemeProvider";
import Header from "src/components/header/Header";
import { Footer } from "src/components/footer/ui/Footer";
import { useTranslation } from "./i18n";
import { fallbackLng, languages } from "./i18n/settings";
import { LangProvider } from "src/lib/langContext";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "", {});

  return {
    title: t("title"),
    content:
      "A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  };
}

export default async function RootLayout({ children, params: { lng } }) {
  return (
    <html>
      <head />
      <body className={cls.body}>
        <ThemeProvider>
          <LangProvider>
            <section className={`${cls.sectBody} ${cls.layoutHeader}`}>
              <Header />
            </section>
            <section className={`${cls.sectBody} ${cls.layoutMain}`}>
              {children}
            </section>
            <section className={`${cls.sectBody} ${cls.layoutFooter}`}>
              <Footer />
            </section>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
