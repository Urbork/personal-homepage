import { ThemeButton, ThemeText, ThemeSwitch, StyledThemeIcon } from "./styled";

export const ThemeChangeButton = ({ isDarkMode, toggleTheme }) => {
  return (
    <ThemeButton onClick={toggleTheme}>
      <ThemeText>DARK MODE {isDarkMode ? "ON " : "OFF "}</ThemeText>
      <ThemeSwitch>
        <StyledThemeIcon isDarkMode={isDarkMode} />
      </ThemeSwitch>
    </ThemeButton>
  );
};
