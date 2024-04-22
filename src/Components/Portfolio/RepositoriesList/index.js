import {
  RepositoryTile,
  RepositoryName,
  RepositoryDescription,
  RepositoryLinks,
  RepositoryLink,
} from "./styled";

export const RepositoriesList = ({ items }) =>
  items.data
    ? items.data.map((repo) => (
        <RepositoryTile key={repo.node_id}>
          <RepositoryName>{repo.name}</RepositoryName>
          <RepositoryDescription>
            {repo.description}
            <RepositoryLinks>
              Demo:{" "}
              <RepositoryLink
                href={repo.homepage}
                target="_blank"
                rel="noreferrer noopener"
              >
                {repo.homepage}
              </RepositoryLink>
              Code:{" "}
              <RepositoryLink
                href={repo.html_url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {repo.html_url}
              </RepositoryLink>
            </RepositoryLinks>
          </RepositoryDescription>
        </RepositoryTile>
      ))
    : null;
