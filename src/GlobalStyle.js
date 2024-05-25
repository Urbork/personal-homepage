import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
    transition: 0.2s;
  }

  body {
    padding-bottom: 120px;
    font-family: "Inter", sans-serif;
    word-break: break-word;
    color: ${({ theme }) => theme.color.secondaryAccent};
    background-color: ${({ theme }) => theme.color.background};
    transition: 0.2s;
  }
`;
