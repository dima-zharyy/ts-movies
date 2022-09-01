import { useLocation } from 'react-router-dom';
import { Movie, Poster, Title, Item } from './MovieItem.styled';
import PropTypes from 'prop-types';

export const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();
  const link = location.pathname.includes('movies') ? `${id}` : `movies/${id}`;

  const imgPlaceholder = `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Item>
      <Movie to={link} state={{ from: location }}>
        <Poster
          src={poster_path ? imgUrl : imgPlaceholder}
          alt={title}
          loading="lazy"
        />
        <Title>{title}</Title>
      </Movie>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};
