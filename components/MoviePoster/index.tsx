import React from "react";
import useSWR from "swr";
import { Movie } from "lib/types";

function getImageURL(
  baseUrl: string,
  size: string,
  posterPath: string
): string {
  return `${baseUrl}${size}${posterPath}`;
}

interface Props {
  movie: Movie;
  posterSize?: number;
}

export default function MoviePoster({ movie, posterSize = 3 }: Props) {
  const { data } = useSWR("/configuration");

  if (!data) {
    return null;
  }

  const { base_url: baseUrl, poster_sizes: posterSizes } = data.images;

  return (
    <img
      alt={movie.title}
      src={getImageURL(baseUrl, posterSizes[posterSize], movie.poster_path)}
    />
  );
}
