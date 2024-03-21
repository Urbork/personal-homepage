import {
  PortfolioWrapper,
  PortfolioImage,
  PortfolioHeading,
  PortfolioText,
  PortfolioItems,
  PortfolioItem,
  PortfolioName,
  PortfolioDescription,
  PortfolioLink,
} from "./styled";
import { useRepositories } from "./useRepositories";

export const Portfolio = ({ title, body }) => {
  const repositoriesData = useRepositories();

  const reposList = repositoriesData.repos.data.map((repo) => (
    <PortfolioItem key={repo.node_id}>
      <PortfolioName>{repo.name}</PortfolioName>
      <PortfolioDescription>{repo.description}</PortfolioDescription>
      <br />
      DEMO:{" "}
      <PortfolioLink href={`${repo.homepage}`}>{repo.homepage}</PortfolioLink>
      <br />
      CODE:{" "}
      <PortfolioLink href={`${repo.html_url}`}>{repo.html_url}</PortfolioLink>
    </PortfolioItem>
  ));

  return (
    <PortfolioWrapper>
      <PortfolioImage
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        width={40}
        alt=""
      />
      <PortfolioHeading>{title}</PortfolioHeading>
      <PortfolioText>My recet projects</PortfolioText>
      <PortfolioItems>{reposList}</PortfolioItems>
    </PortfolioWrapper>
  );
};
