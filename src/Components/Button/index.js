import { StyledButton } from "./styled";

export const Button = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">
    <StyledButton>{children}</StyledButton>
  </a>
);
