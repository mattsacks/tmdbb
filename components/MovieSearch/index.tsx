import React from "react";

export default function MovieSearch() {
  return (
    <div className="flex flex-col text-xl w-full mb-8">
      <label className="block font-bold" htmlFor="movie-search">
        Find movies!
      </label>
      <input
        className="appearance-none border-4 border-black rounded p-2 w-full"
        id="movie-search"
        name="movie-search"
        placeholder="Dumb & Dumber, Three Ninjas, Parasite"
        type="text"
      />
    </div>
  );
}
