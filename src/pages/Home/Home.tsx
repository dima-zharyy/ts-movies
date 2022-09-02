import { useState, useEffect } from "react";
import { getTrending } from "service";
import { MoviesList } from "components";
import { Title, Container } from "./Home.styled";
import { TTrending } from "service/apiTypes";

export const Home: React.FC = () => {
  const [movies, setMovies] = useState<TTrending | null>(null);

  useEffect(() => {
    getTrending<TTrending>()
      .then(setMovies)
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      {movies && <MoviesList movies={movies.results} />}
    </Container>
  );
};
