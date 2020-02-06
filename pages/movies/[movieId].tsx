import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import day from "dayjs";
import Banner from "components/Banner";
import MoviePoster from "components/MoviePoster";

function MoviePage(props) {
  const router = useRouter();
  const { movieId } = router.query;
  const { data, error } = useSWR(`/movie/${movieId}`);

  if (error) {
    // FIXME: Redirect to a 404 page or something
    // Router.push("/");
  }

  return (
    <React.Fragment>
      <Banner />
      {data && (
        <div className="sm:flex">
          <div className="w-3/4 mx-auto mb-4 sm:w-2/5 sm:mr-8">
            <div className="border-8 border-black">
              <MoviePoster posterSize={4} movie={data} />
            </div>
          </div>
          <div className="sm:w-3/5">
            <h2 className="font-black leading-none text-2xl md:text-4xl xl:text-5xl">
              {data.title}
            </h2>
            <div className="text-lg">
              <div className="mt-2 italic text-gray-600">{data.tagline}</div>
              <div className="my-4">{data.overview}</div>
              {/* TODO: Extract into component when including more information */}
              <div className="my-4">
                <div>
                  <strong>Runtime: </strong>
                  {Math.floor(data.runtime / 60)}:
                  {String(data.runtime % 60).padStart(2, "0")}
                </div>
                <div>
                  <strong>Released: </strong>
                  {day(data.release_date).format("MMMM D, YYYY")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default MoviePage;
