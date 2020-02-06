import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import day from "dayjs";
import listify from "lib/listify";
import Banner from "components/Banner";
import MoviePoster from "components/MoviePoster";

function MoviePage() {
  const router = useRouter();
  const { movieId } = router.query;
  const { data: movie, error: movieError } = useSWR(`/movie/${movieId}`);
  const { data: credits, error: creditsError } = useSWR(
    `/movie/${movieId}/credits`
  );

  if (movieError || creditsError) {
    // FIXME: Redirect to a 404 page or something
    // Router.push("/");
  }

  if (!movie || !credits) {
    return <Banner />;
  }

  const topCast = listify(
    credits.cast.map(({ name }) => name),
    3
  );

  const director = listify(
    credits.crew
      .filter((crew) => crew.job === "Director")
      .map(({ name }) => name)
  );

  return (
    <React.Fragment>
      <Head>
        <title>TMDbB: {movie.title}</title>
      </Head>
      <Banner />
      <div className="sm:flex">
        <div className="w-1/2 sm:mx-auto mb-4 sm:w-2/5 sm:mr-8">
          <div className="border-4 sm:border-8 border-black">
            <MoviePoster posterSize={4} movie={movie} />
          </div>
        </div>
        <div className="sm:w-3/5">
          <h2 className="font-black leading-none text-4xl xl:text-5xl">
            {movie.title}
          </h2>
          <div className="text-lg">
            <div className="mt-2 italic text-gray-600">{movie.tagline}</div>
            <div className="my-4">{movie.overview}</div>
            {/* TODO: Extract into component when including more information */}
            <div className="my-4 leading-relaxed">
              {director && (
                <div>
                  <strong>Directed by: </strong>
                  {director}
                </div>
              )}
              <div>
                <strong>Starring: </strong>
                {topCast}
              </div>
              <div>
                <strong>
                  {day(movie.release_date).isAfter(day())
                    ? "Releases"
                    : "Released"}
                  :{" "}
                </strong>
                {day(movie.release_date).format("MMMM D, YYYY")}
              </div>
              {movie.runtime > 0 && (
                <div>
                  <strong>Runtime: </strong>
                  {Math.floor(movie.runtime / 60)}:
                  {String(movie.runtime % 60).padStart(2, "0")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MoviePage;
