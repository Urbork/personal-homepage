import {
  HeaderWrapper,
  HeaderContent,
  HeaderTopText,
  HeaderHeading,
  HeaderAbout,
  HeaderCallToAction,
  HeaderImage,
} from "./styled";
import { aboutMe } from "../../aboutMe";
import photo from "./20152.jpg";

export const Header = () => (
  <HeaderWrapper>
    <HeaderImage src={photo} alt="" />
    <HeaderContent>
      <HeaderTopText>THIS IS</HeaderTopText>
      <HeaderHeading>{aboutMe.name + " " + aboutMe.surname}</HeaderHeading>
      <HeaderAbout>
        👦👨‍🦱🧔 I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </HeaderAbout>
      <a href={`mailto: ${aboutMe.mailAddress}`}>
        <HeaderCallToAction>✉ Hire Me</HeaderCallToAction>
      </a>
    </HeaderContent>
  </HeaderWrapper>
);
