import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeProvider";

export function useTheme() {
  return useContext(ThemeContext);
}
