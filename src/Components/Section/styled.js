import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 36px auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.elementBackground};
  box-shadow: 0px 4px 20px rgba(165, 171, 176, 0.16);
`;

export const SectionHeading = styled.h2`
  margin: 32px;
  margin-bottom: 0;
  padding-bottom: 12px;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderNeutral};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const SectionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  padding: 0 20px;
  margin: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionListItem = styled.li`
  margin: 4px 0;
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textSecondary};

  &::marker {
    color: ${({ theme }) => theme.color.mainAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;
