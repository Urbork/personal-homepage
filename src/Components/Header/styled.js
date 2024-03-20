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
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const HeaderHeading = styled.h2`
  margin-top: 12px;
  font-size: 36px;
  font-weight: 800;
`;

export const HeaderAbout = styled.div`
  margin: 32px 0;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const HeaderCallToAction = styled.button`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.neutralBG};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.mainBlueLM};
  cursor: pointer;
`;
