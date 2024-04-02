import { SectionWrapper, Heading, List, ListItem } from "./styled";

export const Section = ({ title, body }) => (
  <SectionWrapper>
    <Heading>{title}</Heading>
    <List>
      {body.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  </SectionWrapper>
);
