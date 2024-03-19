import { SectionWrapper, Heading, ContentList } from "./styled";

export const Section = ({ title, body }) => (
  <SectionWrapper>
    <Heading>{title}</Heading>
    <ContentList>{body}</ContentList>
  </SectionWrapper>
);
