import React from "react";
import Banner from "components/Banner";
import MovieSearch from "components/MovieSearch";
import PopularMovies from "components/PopularMovies";

export default function Index() {
  return (
    <React.Fragment>
      <Banner />
      <MovieSearch />
      <PopularMovies />
    </React.Fragment>
  );
}
