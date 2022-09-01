import { Route, Routes } from 'react-router-dom';
import { SharedHeader, Notification, globalStyle } from 'components';
import {
  Home,
  Movies,
  MovieDetails,
  Cast,
  Reviews,
  NotExist,
} from 'helpers/lazyImportPages';
import { Global } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotExist />} />
        </Route>
      </Routes>

      <Global styles={globalStyle} />
      <Notification />
    </>
  );
};
