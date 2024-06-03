import { StyledLink } from "./styled";

export const Link = ({ href, children }) => (
  <StyledLink href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </StyledLink>
);
