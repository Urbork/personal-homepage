import {
  FooterWrapper,
  FooterTopText,
  FooterEmail,
  FooterText,
  FooterSocials,
  StyledGitHubIcon,
  StyledLinkedInIcon,
} from "./styled";
import { SocialIcon } from "./SocialIcon";
import { aboutMe } from "../../aboutMe";

export const Footer = () => (
  <FooterWrapper>
    <FooterTopText>LET'S TALK</FooterTopText>
    <FooterEmail href={`mailto: ${aboutMe.emailAddress}`}>
      {aboutMe.emailAddress}
    </FooterEmail>
    <FooterText>
      I'm always open to new projects. If you have a website, dashboard or app
      in mind and need some help to make your ideas come to life, feel free to
      contact me. 👊
    </FooterText>
    <FooterSocials>
      <SocialIcon socialLink={aboutMe.socials.github}>
        <StyledGitHubIcon />
      </SocialIcon>
      <SocialIcon socialLink={aboutMe.socials.linkedin}>
        <StyledLinkedInIcon />
      </SocialIcon>
    </FooterSocials>
  </FooterWrapper>
);
