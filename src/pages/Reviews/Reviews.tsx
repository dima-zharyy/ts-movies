import { ReviewsList } from "components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "service";
import { TMovieReviews } from "service/apiTypes";

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState<TMovieReviews>([]);

  useEffect(() => {
    getReviews<TMovieReviews>(movieId as string)
      .then(setReviews)
      .catch((error) => console.log(error.message));
  }, [movieId]);

  return <ReviewsList reviews={reviews} />;
};
