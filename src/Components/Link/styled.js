import styled from "styled-components";

export const StyledLink = styled.a`
  display: inline-block;
  padding: 12px 16px;
  border: 4px solid ${({ theme }) => theme.color.borderNeutral};
  border-radius: 40px;
  font-size: 20px;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: ${({ theme }) => theme.color.buttonText};
  background-color: ${({ theme }) => theme.color.mainAccent};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.mainAccent};
    background-color: transparent;
    border-radius: 40px;
    border-color: ${({ theme }) => theme.color.mainAccent};
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;
