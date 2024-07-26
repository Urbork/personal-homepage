import {
  FooterWrapper,
  FooterTopText,
  FooterEmail,
  FooterText,
  FooterSocials,
  StyledGitHubIcon,
  StyledLinkedInIcon,
} from "./styled";
import { SocialLink } from "./SocialLink";
import { aboutMe } from "../../aboutMe";

export const Footer = () => (
  <FooterWrapper>
    <FooterTopText>Let's talk</FooterTopText>
    <FooterEmail href={`mailto: ${aboutMe.emailAddress}`}>
      {aboutMe.emailAddress}
    </FooterEmail>
    <FooterText>
      I'm always open to new projects. If you have a website, dashboard, or app
      in mind and need help bringing your ideas to life, feel free to contact
      me. 👊
    </FooterText>
    <FooterSocials>
      <SocialLink socialLink={aboutMe.socials.github}>
        <StyledGitHubIcon />
      </SocialLink>
      <SocialLink socialLink={aboutMe.socials.linkedin}>
        <StyledLinkedInIcon />
      </SocialLink>
    </FooterSocials>
  </FooterWrapper>
);
