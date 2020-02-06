import React from "react";
import useSWR from "swr";
import { orderBy } from "lodash";
import qs from "qs";
import MovieList from "components/MovieList";

interface Props {
  query: string;
}

export default function SearchResults({ query }: Props) {
  const params = {
    query,
    // eslint-disable-next-line
    include_adult: false
  };

  const { data, error } = useSWR(`/search/movie?${qs.stringify(params)}`);

  if (error || !data) {
    return null;
  }

  const searchResults = data.results.slice(0, 12);
  const sortedSearchResults = orderBy(searchResults, "popularity", "desc");

  return <MovieList label="Search results" movies={sortedSearchResults} />;
}
