import { SectionWrapper, Heading, List } from "./styled";

export const Section = ({ title, body }) => (
  <SectionWrapper>
    <Heading>{title}</Heading>
    <List>{body}</List>
  </SectionWrapper>
);
