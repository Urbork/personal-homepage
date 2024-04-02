import { StyledErrorIcon, ErrorHeading, ErrorInfo } from "./styled";
import { Button } from "../../Button";
import { aboutMe } from "../../../aboutMe";

export const Error = () => (
  <>
    <StyledErrorIcon />
    <ErrorHeading>Ooops! Something went wrong...</ErrorHeading>
    <ErrorInfo>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </ErrorInfo>
    <Button href={aboutMe.socials.github}>Go to GitHub</Button>
  </>
);
