import { Details, Loader } from 'components';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { getDetails } from 'service';
import { Container } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDetails(movieId)
      .then(setMovieDetails)
      .catch(error => {
        navigate('/', { replace: true });
        console.log(error.message);
      });
  }, [movieId, navigate]);

  return (
    <main>
      <Container>
        {movieDetails && <Details movieDetails={movieDetails} />}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};
