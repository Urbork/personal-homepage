import styled from "styled-components";
import { ReactComponent as dangerIcon } from "./danger.svg";

export const ErrorIcon = styled(dangerIcon)`
  color: ${({ theme }) => theme.color.mainBlueLM};
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

export const ErrorButton = styled.button`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.neutralBG};
  border-radius: 4px;
  font-size: 20px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.mainBlueLM};
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;
