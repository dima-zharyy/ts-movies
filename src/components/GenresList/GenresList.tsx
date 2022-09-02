import { List, Text, Item } from "./GenresList.styled";

interface IProps {
  genres: Array<{ id: number; name: string }>;
}

export const GenresList: React.FC<IProps> = ({ genres }) => {
  return (
    <List>
      {genres.length > 0
        ? genres.map(({ id, name }) => {
            return (
              <Item key={id}>
                <Text>{name}</Text>
              </Item>
            );
          })
        : `Sorry! There is no genres data`}
    </List>
  );
};
