import { ErrorIcon, ErrorHeading, ErrorInfo, ErrorButton } from "./styled";

export const Error = () => (
  <>
    <ErrorIcon />
    <ErrorHeading>Ooops! Something went wrong...</ErrorHeading>
    <ErrorInfo>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </ErrorInfo>
    <ErrorButton>Go to GitHub</ErrorButton>
  </>
);
