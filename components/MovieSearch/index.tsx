import React, { useCallback, useEffect, useState } from "react";
import Router from "next/router";
import { debounce } from "lodash";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

export default function MovieSearch({ query, setQuery }: Props) {
  const [inputValue, setInputValue] = useState(query);

  // If the input value doesn't match the current query, update the input value
  useEffect(() => {
    if (query !== inputValue) {
      setInputValue(query);
    }
  }, [query]);

  const debouncedSetQuery = useCallback(
    debounce((newQuery: string) => {
      setQuery(newQuery), 500;
      Router.replace(newQuery ? `/?query=${newQuery}` : "/");
    }, 500),
    []
  );

  return (
    <div className="flex flex-col text-xl w-full mb-8">
      <label className="block font-bold" htmlFor="movie-search">
        Find movies!
      </label>
      <input
        className="appearance-none border-4 border-black p-2 w-full"
        id="movie-search"
        name="movie-search"
        onChange={(e) => {
          setInputValue(e.target.value);
          debouncedSetQuery(e.target.value);
        }}
        placeholder="Mortal Kombat"
        type="search"
        value={inputValue}
      />
    </div>
  );
}
