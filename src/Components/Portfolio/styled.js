import styled from "styled-components";

export const PortfolioWrapper = styled.section`
  text-align: center;
`;

export const PortfolioImage = styled.img``;

export const PortfolioHeading = styled.h2``;

export const PortfolioText = styled.p``;

export const PortfolioItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  :hover {
    transition: 1s;
    border: 5px solid ${({ theme }) => theme.color.mainBlueLM};
  }
`;

export const PortfolioItem = styled.li`
  list-style: none;
  padding: 32px;
  border: 5px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};

  :hover {
    border: none;
  }
`;

export const PortfolioName = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.color.mainBlueLM};
`;

export const PortfolioDescription = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const PortfolioLink = styled.a`
  color: ${({ theme }) => theme.color.mainBlueLM};
`;
