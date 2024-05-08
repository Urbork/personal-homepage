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
