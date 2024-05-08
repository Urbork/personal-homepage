import { useState, useEffect } from "react";

export const useRepositories = () => {
  const [reposData, setReposData] = useState({
    isLoading: true,
    data: [],
    error: null,
  });

  const requestURL = "https://api.github.com/users/urbork/repos";
  // const requestURL = "personal-homepage/testData.json";

  useEffect(() => {
    setTimeout(() => {
      fetch(requestURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setReposData({
            isLoading: false,
            data: data,
          });
        })
        .catch((error) => {
          setReposData({
            isLoading: false,
            error: error,
          });
        });
    }, 2000);
  }, []);

  return reposData;
};
