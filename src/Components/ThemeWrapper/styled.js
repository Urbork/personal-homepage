import styled from "styled-components";

export const ThemeButton = styled.button`
  position: fixed;
  padding: 8px 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.mainAccent};
`;
