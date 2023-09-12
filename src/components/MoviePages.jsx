import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MoviePageSidebar from "./MoviePageSidebar";
import LoadingPage from "./LoadingPage";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = "42f956d501059428aaea8646930dd130";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  const releaseDate = new Date(movie?.release_date);
  const releaseDateUTC = releaseDate.toUTCString().slice(0, 16);

  return (
    <>
      <div className="flex">
        <MoviePageSidebar id={id} />
        {!movie ? (
          <div className="w-full">
            <LoadingPage />
          </div>
        ) : (
          <div className="mx-4 sm:mx-14 my-9">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt={movie?.title}
              className="rounded-3xl h-[450px] w-full object-cover object-center"
            />
            <div className="m-2 sm:m-4 flex flex-col gap-6">
              <div className="lg:flex gap-2 text-[20px] text-neutral-700  font-bold">
                <h2 data-testid="movie-title" className="">
                  {movie?.title}
                </h2>
                <span className=" text-[23px] hidden lg:inline-block">•</span>
                <p data-testid="movie-release-date" className="">
                  {" "}
                  {releaseDateUTC}
                </p>
                <span className=" text-[23px] hidden lg:inline-block">•</span>
                <p data-testid="movie-runtime" className="">
                  {`${movie?.runtime}mins`}
                </p>
              </div>
              <p
                data-testid="movie-overview"
                className="text-zinc-800 text-xl font-normal"
              >
                Overview: {movie?.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviePage;
