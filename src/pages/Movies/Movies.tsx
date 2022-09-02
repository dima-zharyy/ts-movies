import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar, MoviesList, notify } from "components";
import { Container } from "./Movies.styled";
import { getMovies } from "service";
import { TMovies } from "service/apiTypes";

export const Movies: React.FC = () => {
  const [movies, setMovies] = useState<TMovies>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies<TMovies>(query)
      .then((data) => {
        setMovies(data);
        if (data.length === 0) {
          notify(`There is no result on query: ${query}`);
        }
      })
      .catch((error) => console.log(error.message));
  }, [query]);

  const handleSubmit = (query: string) => {
    setSearchParams({ query });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Container>
  );
};
