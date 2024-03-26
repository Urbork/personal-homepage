import {
  PortfolioWrapper,
  PortfolioHeading,
  PortfolioText,
  PortfolioItems,
  PortfolioItem,
  PortfolioName,
  PortfolioDescription,
  PortfolioLink,
} from "./styled";
import { useRepositories } from "./useRepositories";
import { Loading } from "./Loading";
import logo from "../images/Github_black.svg";

const Logo = () => <img src={logo} alt="" />;

export const Portfolio = () => {
  const repositoriesData = useRepositories();

  const reposList = repositoriesData.data.map((repo) => (
    <PortfolioItem key={repo.node_id}>
      <PortfolioName>{repo.name}</PortfolioName>
      <PortfolioDescription>{repo.description}</PortfolioDescription>
      DemoTE:{" "}
      <PortfolioLink
        href={`${repo.homepage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {repo.homepage}
      </PortfolioLink>
      <br />
      CodeST:{" "}
      <PortfolioLink
        href={`${repo.html_url}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {repo.html_url}
      </PortfolioLink>
    </PortfolioItem>
  ));

  return (
    <PortfolioWrapper>
      <Logo />
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
