import { ReviewsList } from 'components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error.message));
  }, [movieId]);

  return <ReviewsList reviews={reviews} />;
};
