import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

import IMDBRating from "./IMDBRating";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  // const movies = heroMovies.slice(0, 6);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2023&sort_by=vote_average.desc&vote_count.gte=1000`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = error;
        setError(errorMessage);
        console.error("Error fetching movie data:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentMovieIndex, movies]);

  const handleIndicatorClick = (index) => {
    setCurrentMovieIndex(index);
  };

  return (
    <header className="h-[600px] relative">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <div className="absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 ease-in-out">
            {movies.length > 0 && (
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-[600px] bg-black bg-opacity-70"></div>
                <div className="absolute border-white h-full flex items-end sm:items-center px-7 p-10 lg:ml-[90px]">
                  <div className="text-white min-w-[220px] w-[80%] sm:w-[400px] md:w-[500px] lg:w-[600px] flex flex-col gap-4">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold md:leading-[56px]">
                      {movies[currentMovieIndex]?.title}
                    </h1>
                    <IMDBRating>
                      {movies[currentMovieIndex]?.vote_average}
                    </IMDBRating>

                    <p className="text-white text-xs md:text-sm font-medium leading-[18px]">
                      {movies[currentMovieIndex]?.overview}
                    </p>
                    <Link
                      to={`/movie/${movies[currentMovieIndex]?.id}`}
                      className="hover:cursor-pointer select-none px-4 py-1.5 bg-rose-700 rounded-md justify-start items-center gap-2 flex w-max hover:bg-rose-500 hover:scale-105 transition-all"
                    >
                      <div className="w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="text-white text-sm font-bold uppercase leading-normal">
                        Watch trailer
                      </div>
                    </Link>
                  </div>
                </div>
                <img
                  data-testid="movie-poster"
                  src={`https://image.tmdb.org/t/p/original${movies[currentMovieIndex].backdrop_path}`}
                  className="h-[600px] w-full object-cover object-center "
                  alt={movies[currentMovieIndex].title}
                />
              </div>
            )}
            <div className="absolute bottom-0 right-1/2 sm:top-0 sm:right-10 flex h-full ">
              <div className="flex sm:flex-col gap-2 justify-center items-end w-10 mb-2 sm:mb-0">
                {movies.slice(0, 10).map((_, index) => (
                  <div
                    className="cursor-pointer text-white flex items-center gap-2 justify-start"
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                  >
                    <div
                      className={` bg-white hidden sm:flex rounded-md transition-all ${
                        index === currentMovieIndex ? "w-4 h-[3px] border" : ""
                      }`}
                    />
                    <p
                      className={`items-center sm:hover:text-white sm:hover:text-base transition-all duration-300 ${
                        index === currentMovieIndex
                          ? "text-base font-bold sm:leading-[14px]"
                          : "text-gray-400 text-[10px] font-bold leading-[14px]"
                      }`}
                    >
                      {index + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Hero;
