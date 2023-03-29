import { Moon, Sun } from "phosphor-react";

import { useTheme } from "@/hooks/useTheme";

import * as S from "./styles";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <S.Container>
      <S.Title href="/">Países</S.Title>
      <S.ThemeButton
        aria-label="Toggle theme"
        role="switch"
        aria-checked={theme === "light"}
        onClick={toggleTheme}
      >
        <Sun aria-label="Sun" size={24} />
        <Moon aria-label="Moon" size={24} />
      </S.ThemeButton>
    </S.Container>
  );
}
