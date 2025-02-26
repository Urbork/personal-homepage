import { ThemeButton, ThemeText, ThemeSwitch, StyledThemeIcon } from "./styled";

export const ThemeChangeButton = ({ isDarkMode, toggleTheme }) => {
  return (
    <ThemeButton onClick={toggleTheme}>
      <ThemeText>Dark mode {isDarkMode ? "on " : "off "}</ThemeText>
      <ThemeSwitch>
        <StyledThemeIcon isDarkMode={isDarkMode} />
      </ThemeSwitch>
    </ThemeButton>
  );
};
