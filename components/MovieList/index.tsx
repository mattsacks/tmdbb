import React from "react";
import Link from "next/link";
import { Movie } from "lib/types";
import MovieItem from "components/MovieItem";

interface Props {
  label?: string;
  movies: Movie[];
}

export default function MovieList({ label, movies }: Props) {
  const MovieItems = movies.map((movie) => (
    <Link key={movie.id} href="/movies/[movieId]" as={`/movies/${movie.id}`}>
      <a className="hover:underline">
        <MovieItem movie={movie} />
      </a>
    </Link>
  ));

  return (
    <div className="my-6">
      <div className="font-bold text-xl">{label}</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.length === 0 ? (
          <div className="italic text-gray-600 text-lg">No movies found</div>
        ) : (
          MovieItems
        )}
      </div>
    </div>
  );
}
