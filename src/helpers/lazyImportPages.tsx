import { lazy } from "react";

export const Home = lazy(() =>
  import("../pages/Home/Home").then((module) => ({
    ...module,
    default: module.Home,
  }))
);

export const Movies = lazy(() =>
  import("../pages/Movies/Movies").then((module) => ({
    ...module,
    default: module.Movies,
  }))
);

export const Cast = lazy(() =>
  import("../pages/Cast/Cast").then((module) => ({
    ...module,
    default: module.Cast,
  }))
);

export const MovieDetails = lazy(() =>
  import("../pages/MovieDetails/MovieDetails").then((module) => ({
    ...module,
    default: module.MovieDetails,
  }))
);

export const Reviews = lazy(() =>
  import("../pages/Reviews/Reviews").then((module) => ({
    ...module,
    default: module.Reviews,
  }))
);

export const NotExist = lazy(() =>
  import("../pages/NotExist/NotExist").then((module) => ({
    ...module,
    default: module.NotExist,
  }))
);
