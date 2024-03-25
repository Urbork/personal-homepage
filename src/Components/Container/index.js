import styled from "styled-components";

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0 16px;
  }
`;
