import React, { useState, useEffect } from "react";

const Hero = ({ heroMovies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const movies = heroMovies.slice(0, 5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentMovieIndex, movies]);

  const handleIndicatorClick = (index) => {
    setCurrentMovieIndex(index);
  };

  return (
    <div className="h-[600px] border relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 ease-in-out">
        {movies.slice(0, 5).length > 0 && (
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-[600px] bg-black bg-opacity-50"></div>
            <div className="absolute border-white h-full flex items-center ml-[90px]">
              <div className="text-white w-[400px] flex flex-col gap-4">
                <h1 className="text-white text-5xl font-bold leading-[56px]">
                  {movies[currentMovieIndex]?.title}
                </h1>
                <p className="text-white text-sm font-medium leading-[18px]">
                  {movies[currentMovieIndex]?.overview}
                </p>
              </div>
            </div>
            <img
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/original${movies[currentMovieIndex].poster_path}`}
              className="h-[600px] w-full object-cover object-center"
              alt={movies[currentMovieIndex].title}
            />
          </div>
        )}
        <div className="absolute top-0 right-10  flex h-full">
          <div className="flex flex-col gap-2 justify-center items-end w-10">
            {movies.slice(0, 5).map((_, index) => (
              <div
                className="cursor-pointer text-white flex items-center gap-2 justify-start"
                key={index}
                onClick={() => handleIndicatorClick(index)}
              >
                <div
                  className={` bg-white rounded-md ${
                    index === currentMovieIndex ? "w-5 h-[3px] border" : ""
                  }`}
                />
                <p
                  className={`items-center ${
                    index === currentMovieIndex
                      ? "text-base font-bold leading-[14px]"
                      : "text-gray-400 text-xs font-bold leading-[14px]"
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
