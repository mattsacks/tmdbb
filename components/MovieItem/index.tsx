import React from "react";
import { Movie } from "lib/types";
import MoviePoster from "components/MoviePoster";

interface Props {
  movie: Movie;
}

export default function MovieItem(props: Props) {
  const { movie } = props;

  return (
    <div className="pb-4">
      <div className="font-medium mt-1 lg:text-lg clamp-2">
        <MoviePoster movie={movie} />
        {movie.title}
      </div>
    </div>
  );
}
