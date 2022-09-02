import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "service";
import { Container } from "./Cast.styled";
import { CastList } from "components";
import { TCast } from "service/apiTypes";

export const Cast = () => {
  const { movieId } = useParams();

  const [castInfo, setCastInfo] = useState<TCast | null>(null);

  useEffect(() => {
    getCredits<TCast>(movieId as string)
      .then(setCastInfo)
      .catch((error) => console.log(error.message));
  }, [movieId]);

  return (
    <Container>
      <CastList castInfo={castInfo} />
    </Container>
  );
};
