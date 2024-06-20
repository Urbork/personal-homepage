import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "../../theme";

export const ThemeWrapper = ({ isDarkMode, children }) => {
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      {children}
    </ThemeProvider>
  );
};
