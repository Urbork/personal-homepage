import styled from "styled-components";
import { ReactComponent as spinnerIcon } from "../../../assets/spinner.svg";

export const LoadingInfo = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const LoadingIcon = styled(spinnerIcon)`
  color: ${({ theme }) => theme.color.mainAccent};
  animation: rotation 1s infinite linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 40px;
  }

  @keyframes rotation {
    from {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(270deg);
    }
    to {
      transform: rotate(450deg);
    }
  }
`;
