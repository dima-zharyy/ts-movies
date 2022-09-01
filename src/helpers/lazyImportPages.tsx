import { lazy } from "react";

export const Home = lazy(() =>
  import("../pages/Home/Home.js").then((module) => ({
    ...module,
    default: module.Home,
  }))
);

export const Movies = lazy(() =>
  import("../pages/Movies/Movies.js").then((module) => ({
    ...module,
    default: module.Movies,
  }))
);

export const Cast = lazy(() =>
  import("../pages/Cast/Cast.js").then((module) => ({
    ...module,
    default: module.Cast,
  }))
);

export const MovieDetails = lazy(() =>
  import("../pages/MovieDetails/MovieDetails.js").then((module) => ({
    ...module,
    default: module.MovieDetails,
  }))
);

export const Reviews = lazy(() =>
  import("../pages/Reviews/Reviews.js").then((module) => ({
    ...module,
    default: module.Reviews,
  }))
);

export const NotExist = lazy(() =>
  import("../pages/NotExist/NotExist.js").then((module) => ({
    ...module,
    default: module.NotExist,
  }))
);
