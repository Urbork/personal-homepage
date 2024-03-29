import styled from "styled-components";
import { ReactComponent as GitHubLogo } from "../Portfolio/github.svg";
import { ReactComponent as LinkedInLogo } from "./LinkedIN.svg";

export const FooterWrapper = styled.footer`
  max-width: ${({ theme }) => theme.breakpoint.mobile}px;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 48px;
  }
`;

export const FooterTopText = styled.p`
  font-size: 12px;
  font-weight: bold;
  line-height: 130%;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const FooterMail = styled.a`
  margin: 24px 0;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const FooterText = styled.p`
  margin: 24px 0 56px;
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-bottom: 40px;
    font-size: 14px;
  }
`;

export const FooterSocials = styled.ul`
  padding: 0;
  display: flex;
  gap: 24px;
  color: ${({ theme }) => theme.color.black};
`;

export const FooterSocial = styled.li`
  list-style: none;
  padding: 8px;
  cursor: pointer;

  &:hover {
    transition: 1s;
    transform: scale(1.05);
  }
`;

export const StyledSocialIcon = styled(GitHubLogo)``;

export const StyledLinkedInIcon = styled(LinkedInLogo)``;
