import { useContext } from "react";

import { ThemeContext } from "@/context";

export const useThemeMode = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  const [mode, toggleMode] = context;

  return [mode, toggleMode];
};
