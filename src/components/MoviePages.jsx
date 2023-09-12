import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MoviePageSidebar from "./MoviePageSidebar";

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
  const releaseDateUTC = releaseDate.getTime();

  return (
    <div className="flex">
      <MoviePageSidebar />
      {!movie ? (
        <div className=" hidden">Loading...</div>
      ) : (
        <div className="mx-14 my-9">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt={movie?.title}
            className="rounded-3xl h-[450px] w-full object-cover object-center"
          />
          <div className="m-8 flex flex-col gap-6">
            <div className="flex gap-2">
              <h2
                data-testid="movie-title"
                className="text-neutral-700 text-[23px] font-medium"
              >
                {movie?.title}
              </h2>
              <span className="text-neutral-700 text-[23px] font-normal">
                •
              </span>
              <p
                data-testid="movie-release-date"
                className="text-neutral-700 text-[23px] font-medium"
              >
                {" "}
                {releaseDateUTC}
              </p>
              <span className="text-neutral-700 text-[23px] font-normal">
                •
              </span>
              <p
                data-testid="movie-runtime"
                className="text-neutral-700 text-[23px] font-medium"
              >
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
  );
};

export default MoviePage;
