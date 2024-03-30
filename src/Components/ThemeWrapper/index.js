import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "../../theme";
import { ThemeButton } from "./styled";

export const ThemeWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <ThemeButton onClick={toggleTheme}>
        {isDarkMode ? "jasny motyw" : "ciemny motyw"}
      </ThemeButton>
      {children}
    </ThemeProvider>
  );
};
