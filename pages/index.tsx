import React from "react";
import Banner from "components/Banner";
import MovieSearch from "components/MovieSearch";
import SearchResults from "components/SearchResults";
import PopularMovies from "components/PopularMovies";

export default function Index() {
  return (
    <React.Fragment>
      <Banner />
      <MovieSearch query={query} setQuery={setQuery} />
      {query ? <SearchResults query={query} /> : <PopularMovies />}
    </React.Fragment>
  );
}
