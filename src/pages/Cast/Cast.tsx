import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'service';
import { Container } from './Cast.styled';
import { CastList } from 'components';

export const Cast = () => {
  const { movieId } = useParams();

  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    getCredits(movieId)
      .then(setCastInfo)
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <Container>
      <CastList castInfo={castInfo} />
    </Container>
  );
};
