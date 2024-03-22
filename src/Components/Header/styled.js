import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  margin: 32px auto;
`;

export const HeaderContent = styled.div`
  max-width: 50%;
  margin: auto 32px;
`;

export const HeaderTopText = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const HeaderHeading = styled.h1`
  margin-top: 12px;
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 0.05em;
`;

export const HeaderAbout = styled.p`
  margin: 32px 0;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const HeaderCallToAction = styled.button`
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
`;
