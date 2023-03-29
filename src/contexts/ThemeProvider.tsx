import { createContext, ReactNode, useEffect, useState } from "react";

import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/GlobalStyles";
import { base } from "@/styles/themes/base";
import { dark } from "@/styles/themes/dark";

export type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme(): void;
};

export const ThemeContext = createContext({} as ThemeContextType);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("@react-country/theme");

    if (localStorageTheme) {
      setTheme(localStorageTheme === "dark" ? "dark" : "light");
    }
  }, []);

  function toggleTheme() {
    setTheme((state) => {
      if (state === "dark") {
        const newTheme: Theme = "light";
        localStorage.setItem("@react-country/theme", newTheme);
        return newTheme;
      } else {
        const newTheme: Theme = "dark";
        localStorage.setItem("@react-country/theme", newTheme);
        return newTheme;
      }
    });
  }

  return (
    <StyledComponentsThemeProvider theme={theme === "light" ? base : dark}>
      <GlobalStyles />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledComponentsThemeProvider>
  );
}
