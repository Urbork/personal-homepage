import { StyledSocialItem } from "./styled";

export const SocialIcon = ({ children, socialLink }) => (
  <StyledSocialItem>
    <a href={socialLink} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  </StyledSocialItem>
);
