import { Link, Container, Navigation, Subtitle } from './AdditionalInfo.styled';

export const AdditionalInfo = ({ location }) => {
  return (
    <Container>
      <Subtitle>Additional Information</Subtitle>
      <Navigation>
        <Link to="cast" state={{ from: location }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location }}>
          Reviews
        </Link>
      </Navigation>
    </Container>
  );
};
