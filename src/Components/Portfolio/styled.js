import styled from "styled-components";
import { ReactComponent as GitHubLogo } from "../images/Github_black.svg";

export const PortfolioWrapper = styled.section`
  margin-top: 72px;
  text-align: center;
  /* font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textSecondary}; */
`;

export const PortfolioImage = styled.img``;

export const StyledGitHubLogo = styled(GitHubLogo)`
  color: ${({ theme }) => theme.color.mainBlueLM};
`;

export const PortfolioHeading = styled.h2`
  margin: 12px 0 8px;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.05em;
`;

export const PortfolioText = styled.p`
  margin: 0 auto 24px;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 140%;
`;

export const PortfolioItems = styled.ul`
  text-align: left;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  :hover {
    transition: 1s;
    border: 5px solid ${({ theme }) => theme.color.mainBlueLM};
  }
`;

export const PortfolioItem = styled.li`
  list-style: none;
  padding: 56px;
  border: 5px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 20px rgba(165, 171, 176, 0.16);

  :hover {
    border: none;
  }
`;

export const PortfolioName = styled.h3`
  margin-top: 0px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mainBlueLM};
`;

export const PortfolioDescription = styled.p`
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const PortfolioLink = styled.a`
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.mainBlueLM};
`;
