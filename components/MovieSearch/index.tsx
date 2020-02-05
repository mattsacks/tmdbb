import React from "react";

export default function MovieSearch() {
  return (
    <div className="flex flex-col text-lg w-full mb-8 md:w-4/5 md:block md:mx-auto lg:w-2/6">
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
