import React from "react";
import useSWR from "swr";
import { Movie } from "lib/types";
import MovieItem from "components/MovieItem";

export default function PopularMovies() {
  const { data, error } = useSWR("/movie/popular");

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  // Get the top 10 movies and remove any adult ones
  const PopularMovies = data.results
    .slice(0, 12)
    .filter((movie: Movie) => !movie.adult)
    .map((movie: Movie) => <MovieItem key={movie.id} movie={movie} />);

  return (
    <div className="my-6">
      <div className="font-bold text-xl">Currently trending</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {PopularMovies}
      </div>
    </div>
  );
}
