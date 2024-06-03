import {
  HeaderWrapper,
  HeaderContent,
  HeaderTopText,
  HeaderHeading,
  HeaderAbout,
  HeaderImage,
} from "./styled";
import { Link } from "../Link";
import { aboutMe } from "../../aboutMe";
import photo from "../../assets/me-sq.jpg";

export const Header = () => (
  <HeaderWrapper>
    <HeaderImage src={photo} alt="" />
    <HeaderContent>
      <HeaderTopText>This is</HeaderTopText>
      <HeaderHeading>{aboutMe.name + " " + aboutMe.surname}</HeaderHeading>
      <HeaderAbout>
        👦 I'm a passionate frontend developer with a deep fascination for the
        internet and website creation. My journey has been driven by a desire to
        bring innovative ideas to life and create engaging, user-friendly web
        experiences. I am currently seeking new job opportunities where I can
        leverage my skills to develop exciting projects.
      </HeaderAbout>
      <Link href={`mailto: ${aboutMe.emailAddress}`}>✉ Hire Me</Link>
    </HeaderContent>
  </HeaderWrapper>
);
