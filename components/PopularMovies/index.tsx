import React from "react";
import useSWR from "swr";

export default function PopularMovies() {
  const { data, error } = useSWR("/movie/popular");

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  const popularMovies = data.results.slice(0, 10);

  return (
    <div>
      <div className="font-bold text-lg">Current trending</div>
      <ul className="list-disc ml-6">
        {popularMovies.map((movie: any) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
