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
import photo from "../../assets/me-sq.jpg";

export const Header = () => (
  <HeaderWrapper>
    <HeaderImage src={photo} alt="" />
    <HeaderContent>
      <HeaderTopText>THIS IS</HeaderTopText>
      <HeaderHeading>{aboutMe.name + " " + aboutMe.surname}</HeaderHeading>
      <HeaderAbout>
        👦 I've always been fascinated by the internet and creating websites,
        which led me to pursue my dream of becoming a frontend developer. I am
        currently seeking new job opportunities and exciting projects.
      </HeaderAbout>
      <Button href={`mailto: ${aboutMe.emailAddress}`}>✉ Hire Me</Button>
    </HeaderContent>
  </HeaderWrapper>
);
