import {
  HeaderWrapper,
  HeaderContent,
  HeaderTopText,
  HeaderHeading,
  HeaderAbout,
  HeaderImage,
} from "./styled";
import { Button } from "../Button";
import { aboutMe } from "../../aboutMe";
import photo from "../../assets/me.jpg";

export const Header = () => (
  <HeaderWrapper>
    <HeaderImage src={photo} alt="" />
    <HeaderContent>
      <HeaderTopText>THIS IS</HeaderTopText>
      <HeaderHeading>{aboutMe.name + " " + aboutMe.surname}</HeaderHeading>
      <HeaderAbout>
        👦 I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </HeaderAbout>
      <Button href={`mailto: ${aboutMe.emailAddress}`}>✉ Hire Me</Button>
    </HeaderContent>
  </HeaderWrapper>
);
