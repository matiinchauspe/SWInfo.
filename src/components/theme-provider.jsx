import PropTypes from "prop-types";
import { useState } from "react";

import { ThemeProvider } from "@/context";

const ThemeProviderWrapper = ({ children }) => {
  const [mode, toggleMode] = useState("dark");

  const handleToggleMode = (m) => {
    toggleMode(m);
  };

  return (
    <ThemeProvider value={[mode, handleToggleMode]}>{children}</ThemeProvider>
  );
};

ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProviderWrapper as ThemeProvider };
