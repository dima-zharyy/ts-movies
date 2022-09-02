import { MovieItem } from "components";
import { TMovies } from "service/apiTypes";
import { List } from "./MoviesList.styled";

interface IProps {
  movies: TMovies;
}

export const MoviesList: React.FC<IProps> = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <MovieItem key={id} id={id} poster_path={poster_path} title={title} />
        );
      })}
    </List>
  );
};
