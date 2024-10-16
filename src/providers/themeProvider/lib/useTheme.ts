// src\app\providers\themeProvider\lib\useTheme.ts
"use client";

import { useContext, useEffect } from "react";
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

interface UseThemeReturn {
  changeTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = (): void => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.DARK;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.className = theme ?? Theme.LIGHT;
    }
  }, [theme]);

  return { theme: theme || Theme.LIGHT, changeTheme };
}
