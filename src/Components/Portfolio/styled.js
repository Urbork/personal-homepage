import styled from "styled-components";
import { ReactComponent as GitHubLogo } from "../../assets/github.svg";

export const PortfolioWrapper = styled.section`
  margin-top: 72px;
  text-align: center;
`;

export const StyledGitHubLogo = styled(GitHubLogo)`
  color: ${({ theme }) => theme.color.mainAccent};
`;

export const PortfolioHeading = styled.h2`
  margin: 12px 0 8px;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const PortfolioText = styled.p`
  margin: 0 auto 24px;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
  }
`;

export const PortfolioList = styled.ul`
  text-align: left;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  :hover {
    transition: 1s;
    border: 5px solid ${({ theme }) => theme.color.mainAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const PortfolioListItem = styled.li`
  list-style: none;
  padding: 56px;
  border: 5px solid ${({ theme }) => theme.color.portfolioBorder};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.elementBackground};
  box-shadow: 0px 4px 20px rgba(165, 171, 176, 0.16);

  :hover {
    border: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 24px;
  }
`;

// ⬇⬇⬇ wydzielić do innego pliku ⬇⬇⬇

export const PortfolioName = styled.h3`
  margin-top: 0px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mainAccent};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const PortfolioDescription = styled.p`
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;

export const PorfolioLinks = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px;
  margin-top: 24px;
`;

export const PortfolioLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.mainAccent};

  &:hover {
    transition: 0.5s;
    font-weight: 500;
    text-decoration: underline;
    color: ${({ theme }) => theme.color.secondaryAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;
