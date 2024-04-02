import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 16px;
  border: 4px solid ${({ theme }) => theme.color.borderNeutral};
  border-radius: 4px;
  font-size: 20px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.color.buttonText};
  background-color: ${({ theme }) => theme.color.mainAccent};
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.color.mainAccent};
    background-color: transparent;
    border-radius: 40px;
    border-color: ${({ theme }) => theme.color.mainAccent};
    animation: shake 0.5s infinite linear;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }

  @keyframes shake {
    from {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(-2deg);
    }
    to {
      transform: rotate(2deg);
    }
  }
`;
