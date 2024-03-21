import styled from "styled-components";

export const FooterWrapper = styled.footer`
  max-width: 50%;
  margin-top: 84px;
`;

export const FooterTopText = styled.p`
  font-size: 12px;
`;

export const FooterMail = styled.a`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }
`;

export const FooterText = styled.p``;

export const FooterSocials = styled.ul`
  padding: 0;
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.color.white};
`;

export const FooterSocial = styled.li`
  list-style: none;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.black};
  cursor: pointer;

  &:hover {
    transition: 1s;
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.color.mainBlueLM};
  }
`;
