import styled from "styled-components";
import { ReactComponent as spinnerIcon } from "./spinner.svg";

export const LoadingInfo = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 140%;
`;

export const LoadingIcon = styled(spinnerIcon)`
  color: ${({ theme }) => theme.color.mainAccent};
  animation: rotation 1s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(449deg);
    }
  }
`;
