import { StyledSocialItem } from "./styled";

export const SocialLink = ({ children, socialLink }) => (
  <StyledSocialItem>
    <a href={socialLink} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  </StyledSocialItem>
);
