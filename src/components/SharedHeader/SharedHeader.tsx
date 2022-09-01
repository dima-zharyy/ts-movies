import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components';
import { Menu, Link, Navigation } from './SharedHeader.styled';

export const SharedHeader = () => {
  return (
    <>
      <Menu>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </Menu>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
