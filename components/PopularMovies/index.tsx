import React from "react";
import useSWR from "swr";
import { Movie } from "lib/types";
import MovieList from "components/MovieList";

export default function PopularMovies() {
  const { data, error } = useSWR("/movie/popular");

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  // Get the top 10 movies and remove any adult ones
  const popularMovies = data.results
    .slice(0, 12)
    .filter((movie: Movie) => !movie.adult);

  return <MovieList label="Currently trending" movies={popularMovies} />;
}
