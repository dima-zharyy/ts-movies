import { Link, Container, Navigation, Subtitle } from "./AdditionalInfo.styled";

interface IProps {
  location: string;
}

export const AdditionalInfo: React.FC<IProps> = ({ location }) => {
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
