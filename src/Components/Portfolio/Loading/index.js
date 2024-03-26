import { LoadingInfo, LoadingIcon } from "./styled";
import spinner from "./spinner.svg";

export const Loading = () => (
  <>
    <LoadingInfo>Please wait, projects are being loaded...</LoadingInfo>
    <LoadingIcon src={spinner} alt="" />
  </>
);
