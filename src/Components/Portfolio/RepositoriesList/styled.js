import styled from "styled-components";

export const RepositoryTile = styled.li`
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

export const RepositoryName = styled.h3`
  margin-top: 0px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mainAccent};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const RepositoryDescription = styled.div`
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;

export const RepositoryLinks = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const RepositoryLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.mainAccent};
  transition: 0.5s;

  &:hover {
    font-weight: 500;
    text-decoration: underline;
    color: ${({ theme }) => theme.color.secondaryAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;
