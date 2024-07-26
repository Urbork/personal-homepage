import styled from "styled-components";

export const StyledSocialItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.color.secondaryAccent};
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    animation: shake 0.5s infinite linear;
  }

  @keyframes shake {
    from {
      transform: rotate(8deg);
    }
    50% {
      transform: rotate(-8deg);
    }
    to {
      transform: rotate(8deg);
    }
  }
`;
