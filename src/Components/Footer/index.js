import {
  FooterWrapper,
  FooterTopText,
  FooterMail,
  FooterText,
  FooterSocials,
  FooterSocial,
  StyledSocialIcon,
  StyledLinkedInIcon,
} from "./styled";
import { aboutMe } from "../../aboutMe";

export const Footer = ({ extraContent }) => (
  <FooterWrapper>
    <FooterTopText>LET'S TALK</FooterTopText>
    <FooterMail href={`mailto: ${aboutMe.mailAddress}`}>
      {aboutMe.mailAddress}
    </FooterMail>
    <FooterText>
      I'm always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to contact me. 👊
    </FooterText>
    <FooterSocials>
      <FooterSocial>
        <StyledSocialIcon />
      </FooterSocial>
      <FooterSocial>
        <StyledLinkedInIcon />
      </FooterSocial>
      <FooterSocial>FB</FooterSocial>
      <FooterSocial>X</FooterSocial>
    </FooterSocials>
  </FooterWrapper>
);
