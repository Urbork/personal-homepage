import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 36px auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 20px rgba(165, 171, 176, 0.16);
`;

export const Heading = styled.h2`
  margin: 32px;
  margin-bottom: 0;
  padding-bottom: 12px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutralBG};
`;

export const ContentList = styled.ul`
  display: grid;
  /* define the number of rows you
     require: */
  /* grid-template-rows: repeat(8, 1fr); */
  grid-template-columns: repeat(3, 1fr);
  /* set the flow of the grid to follow
     a columnar layout: */
  grid-auto-flow: row;
  padding: 0 20px;
  margin: 32px;
`;

export const ContentItem = styled.li`
  margin: 4px 0;
  /* padding: 0; */
  color: ${({ theme }) => theme.color.textSecondary};

  &::marker {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }
`;
