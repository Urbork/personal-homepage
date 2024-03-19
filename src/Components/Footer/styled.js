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
    color: red;
  }
`;

export const FooterText = styled.p``;

export const FooterSocials = styled.div``;
