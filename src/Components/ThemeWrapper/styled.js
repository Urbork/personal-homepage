import styled, { css } from "styled-components";
import { ReactComponent as ThemeIcon } from "../../assets/themeicon.svg";

export const ThemeButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ThemeText = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  width: 48px;
  border: 2px solid;
  border-radius: 16px;
  color: ${({ theme }) => theme.color.textSecondary};
  background-color: ${({ theme }) => theme.color.elementBackground};
`;

export const StyledThemeIcon = styled(ThemeIcon)`
  margin: 4px;
  padding: 2px;
  border: 1px solid;
  border-radius: 50%;
  transition: 0.2s;

  ${({ isDarkMode }) =>
    isDarkMode &&
    css`
      transform: translateX(16px);
    `}
`;
