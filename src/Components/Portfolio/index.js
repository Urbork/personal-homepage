import {
  PortfolioWrapper,
  PortfolioHeading,
  PortfolioText,
  PortfolioItems,
  PortfolioItem,
  PortfolioName,
  PortfolioDescription,
  PortfolioLink,
  StyledGitHubLogo,
} from "./styled";
import { useRepositories } from "./useRepositories";
import { Loading } from "./Loading";

export const Portfolio = () => {
  const repositoriesData = useRepositories();

  const reposList = repositoriesData.data.map((repo) => (
    <PortfolioItem key={repo.node_id}>
      <PortfolioName>{repo.name}</PortfolioName>
      <PortfolioDescription>
        {repo.description}
        <br />
        <br />
        Demo:{" "}
        <PortfolioLink
          href={`${repo.homepage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {repo.homepage}
        </PortfolioLink>
        <br />
        Code:{" "}
        <PortfolioLink
          href={`${repo.html_url}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {repo.html_url}
        </PortfolioLink>
      </PortfolioDescription>
    </PortfolioItem>
  ));

  return (
    <PortfolioWrapper>
      <StyledGitHubLogo />
      <PortfolioHeading>Portfolio</PortfolioHeading>
      <PortfolioText>My recet projects</PortfolioText>
      {repositoriesData.isLoading ? (
        <Loading />
      ) : (
        <PortfolioItems>{reposList}</PortfolioItems>
      )}
    </PortfolioWrapper>
  );
};
