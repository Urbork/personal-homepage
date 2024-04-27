import {
  SectionWrapper,
  SectionHeading,
  SectionList,
  SectionListItem,
} from "./styled";

export const Section = ({ title, body }) => (
  <SectionWrapper>
    <SectionHeading>{title}</SectionHeading>
    <SectionList>
      {body.map((item) => (
        <SectionListItem key={item}>{item}</SectionListItem>
      ))}
    </SectionList>
  </SectionWrapper>
);
