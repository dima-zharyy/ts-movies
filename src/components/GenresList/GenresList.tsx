import PropTypes from 'prop-types';
import { List, Text, Item } from './GenresList.styled';

export const GenresList = ({ genres }) => {
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

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object),
};
