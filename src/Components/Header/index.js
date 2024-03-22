import {
  HeaderWrapper,
  HeaderContent,
  HeaderTopText,
  HeaderHeading,
  HeaderAbout,
  HeaderCallToAction,
} from "./styled";

export const Header = ({ name, body, extraHeaderContent }) => (
  <HeaderWrapper>
    <img
      src="https://cdn-icons-png.flaticon.com/512/4128/4128349.png"
      width={384}
      alt=""
    />
    <HeaderContent>
      <HeaderTopText>THIS IS</HeaderTopText>
      <HeaderHeading>{name}</HeaderHeading>
      <HeaderAbout>
        👦👨‍🦱🧔 I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </HeaderAbout>
      <a href="mailto: jajonaszjj@gmail.com">
        <HeaderCallToAction>✉ Hire Me</HeaderCallToAction>
      </a>
    </HeaderContent>
  </HeaderWrapper>
);
