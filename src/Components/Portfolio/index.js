import {
  PortfolioWrapper,
  PortfolioHeading,
  PortfolioText,
  PortfolioList,
  PortfolioListItem,
  PortfolioName,
  PortfolioDescription,
  PorfolioLinks,
  PortfolioLink,
  StyledGitHubLogo,
} from "./styled";
import { useRepositories } from "./useRepositories";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const Portfolio = () => {
  const repositoriesData = useRepositories();

  const repositoriesList = repositoriesData.data
    ? repositoriesData.data.map((repo) => (
        <PortfolioListItem key={repo.node_id}>
          <PortfolioName>{repo.name}</PortfolioName>
          <PortfolioDescription>
            {repo.description}
            <PorfolioLinks>
              Demo:{" "}
              <PortfolioLink
                href={repo.homepage}
                target="_blank"
                rel="noreferrer noopener"
              >
                {repo.homepage}
              </PortfolioLink>
              Code:{" "}
              <PortfolioLink
                href={repo.html_url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {repo.html_url}
              </PortfolioLink>
            </PorfolioLinks>
          </PortfolioDescription>
        </PortfolioListItem>
      ))
    : null;

  const element = repositoriesData.error ? (
    <Error />
  ) : repositoriesData.isLoading ? (
    <Loading />
  ) : (
    <PortfolioList>{repositoriesList}</PortfolioList>
  );

  return (
    <PortfolioWrapper>
      <StyledGitHubLogo />
      <PortfolioHeading>Portfolio</PortfolioHeading>
      <PortfolioText>My recet projects</PortfolioText>
      {element}
    </PortfolioWrapper>
  );
};
