import {
  FooterWrapper,
  FooterTopText,
  FooterMail,
  FooterText,
  FooterSocials,
} from "./styled";

export const Footer = ({ extraContent }) => (
  <FooterWrapper>
    <FooterTopText>LET'S TALK</FooterTopText>
    <FooterMail href="mailto: jonasz@gmail.com">jonasz@gmail.com</FooterMail>
    <FooterText>
      I'm always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to contact me. 👊
    </FooterText>
    <FooterSocials>{extraContent}</FooterSocials>
  </FooterWrapper>
);
