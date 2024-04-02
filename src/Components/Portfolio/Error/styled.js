import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../assets/error.svg";

export const StyledErrorIcon = styled(ErrorIcon)`
  color: ${({ theme }) => theme.color.mainAccent};
`;

export const ErrorHeading = styled.h3`
  font-size: 24px;
  letter-spacing: 0.05em;
`;

export const ErrorInfo = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 140%;
`;
