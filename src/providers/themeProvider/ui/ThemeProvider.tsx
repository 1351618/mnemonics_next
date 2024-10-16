// "use client";

// import { type FC, type ReactNode, useMemo, useState } from "react";
// import {
//   Theme,
//   ThemeContext,
//   LOCAL_STORAGE_THEME_KEY,
// } from "../lib/ThemeContext";

// interface ThemeProviderProps {
//   initialTheme?: Theme;
//   children: ReactNode;
// }

// const defaultTheme =
//   (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

// export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
//   const { children, initialTheme } = props;
//   const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

//   const defaultProps = useMemo(
//     () => ({
//       theme,
//       setTheme,
//     }),
//     [theme]
//   );

//   return (
//     <ThemeContext.Provider value={defaultProps}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

"use client";

import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
} from "../lib/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || Theme.LIGHT);

  useEffect(() => {
    // Этот код выполняется только на клиенте
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
      if (savedTheme) {
        setTheme(savedTheme as Theme);
      }
    }
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
