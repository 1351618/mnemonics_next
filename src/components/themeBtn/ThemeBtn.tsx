"use client";

// import { useTheme } from "@/app/providers/themeProvider/lib/useTheme";
// // import Image from "next/image";

// export default function ThemeBtn() {
//   const { theme, changeTheme } = useTheme();

//   return (
//     <button className="miniBtn" onClick={changeTheme}>
//       {theme === "app_light_theme" ? "dark" : "light"}
//     </button>
//   );
// }

import { useEffect } from "react";
import { useTheme } from "src/providers/themeProvider/lib/useTheme";

export default function ThemeBtn() {
  const { theme, changeTheme } = useTheme();
  // const locale = useLocale();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme && savedTheme !== theme) {
        console.log("hello");
        changeTheme(); // Меняем тему
      }
    }
  }, [theme, changeTheme]); // Добавляем changeTheme в зависимости

  return (
    <button className='miniBtn' onClick={changeTheme}>
      {theme === "app_light_theme" ? "dark" : "light"}
    </button>
  );
}
