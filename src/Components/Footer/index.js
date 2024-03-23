import {
  FooterWrapper,
  FooterTopText,
  FooterMail,
  FooterText,
  FooterSocials,
  FooterSocial,
} from "./styled";
import { mailAddress } from "../../skills";

export const Footer = ({ extraContent }) => (
  <FooterWrapper>
    <FooterTopText>LET'S TALK</FooterTopText>
    <FooterMail href={`mailto: ${mailAddress}`}>{mailAddress}</FooterMail>
    <FooterText>
      I'm always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to contact me. 👊
    </FooterText>
    <FooterSocials>
      <FooterSocial>IG</FooterSocial>
      <FooterSocial>GitHub</FooterSocial>
      <FooterSocial>LinkedIn</FooterSocial>
      <FooterSocial>X</FooterSocial>
    </FooterSocials>
  </FooterWrapper>
);
