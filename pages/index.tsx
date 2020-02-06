import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";
import Banner from "components/Banner";
import MovieSearch from "components/MovieSearch";
import SearchResults from "components/SearchResults";
import PopularMovies from "components/PopularMovies";

export default function Index() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  // If the query param doesn't match what's being searched (ie, a page
  // refresh), update the local query
  if (router.query.query !== query) {
    setQuery(router.query.query as string);
  }

  return (
    <React.Fragment>
      <Banner />
      <MovieSearch query={query} setQuery={setQuery} />
      {query ? <SearchResults query={query} /> : <PopularMovies />}
    </React.Fragment>
  );
}
