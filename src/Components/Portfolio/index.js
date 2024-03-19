import {
  PortfolioWrapper,
  PortfolioImage,
  PortfolioHeading,
  PortfolioText,
  PortfolioItems,
} from "./styled";

export const Portfolio = ({ title, body }) => (
  <PortfolioWrapper>
    <PortfolioImage
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      width={40}
      alt=""
    />
    <PortfolioHeading>{title}</PortfolioHeading>
    <PortfolioText>My recet projects</PortfolioText>
    <PortfolioItems>{body}</PortfolioItems>
  </PortfolioWrapper>
);
