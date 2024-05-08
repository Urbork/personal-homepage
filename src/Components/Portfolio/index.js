import {
  PortfolioWrapper,
  PortfolioHeading,
  PortfolioText,
  PortfolioList,
  StyledGitHubLogo,
} from "./styled";
import { useRepositories } from "./useRepositories";
import { RepositoriesList } from "./RepositoriesList";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const Portfolio = () => {
  const repositoriesData = useRepositories();

  const repositories = repositoriesData.isLoading ? (
    <Loading />
  ) : repositoriesData.error ? (
    <Error />
  ) : (
    <PortfolioList>
      <RepositoriesList items={repositoriesData} />
    </PortfolioList>
  );

  return (
    <PortfolioWrapper>
      <StyledGitHubLogo />
      <PortfolioHeading>Portfolio</PortfolioHeading>
      <PortfolioText>My recet projects</PortfolioText>
      {repositories}
    </PortfolioWrapper>
  );
};
