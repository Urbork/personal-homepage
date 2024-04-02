import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "../../theme";
import { ThemeButton, ThemeText, ThemeSwitch, StyledThemeIcon } from "./styled";

export const ThemeWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <ThemeButton onClick={toggleTheme}>
        <ThemeText>DARK MODE {isDarkMode ? "ON " : "OFF "}</ThemeText>
        <ThemeSwitch>
          <StyledThemeIcon isDarkMode={isDarkMode} />
        </ThemeSwitch>
      </ThemeButton>
      {children}
    </ThemeProvider>
  );
};
