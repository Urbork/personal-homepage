import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  margin: 32px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const HeaderImage = styled.img`
  width: 25vw;
  height: 25vw;
  max-width: 384px;
  max-height: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    max-width: 132px;
    max-height: 132px;
  }
`;

export const HeaderContent = styled.div`
  margin: auto 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0 16px;
  }
`;

export const HeaderTopText = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const HeaderHeading = styled.h1`
  margin-top: 12px;
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 22px;
  }
`;

export const HeaderAbout = styled.p`
  margin: 32px 0;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
  }
`;
