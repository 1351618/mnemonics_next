'use client'

import { createContext, useContext, useEffect, useState } from "react";



export const LangContext = createContext<{
  lang?: string;
  changeLanguage?: (lang: string) => void;
}>({});



export const LangProvider = ({ children }: { children }) => {
  const [lang, setLang] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect((
  ) => {
    setMounted(true)
  }, [])


  useEffect(() => {

    if (!localStorage.getItem('lang')) {
      localStorage.setItem("lang", 'ru')
      setLang(localStorage.getItem('lang') as string)
    } else {
      setLang(localStorage.getItem('lang') as string)
    }

  }, [])

  const changeLanguage = (lang: string) => {
    setLang(lang)
  }

  if (!mounted) {
    return
  }

  return <LangContext.Provider value={{ lang, changeLanguage }}>{children}</LangContext.Provider>
}

export const useLang = () => {

  const { lang, changeLanguage } = useContext(LangContext)

  return { lang, changeLanguage }
}