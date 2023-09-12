// import { useEffect, useState } from "react";
// import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = ({ movieList }) => {
  const movies = movieList;
  return (
    <div className="my-[70px] mx-4 sm:m-[70px]">
      <div className="flex justify-between items-center mb-[44px]">
        <h2 className="text-black text-2xl sm:text-4xl font-bold">
          Featured Movie
        </h2>
        <a
          href="#"
          className="text-rose-700 text-lg font-normal leading-normal hidden sm:flex items-center gap-2 hover:underline"
        >
          View All
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
                stroke="#B91C1C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 sm:gap-x-20 gap-y-10">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date.slice(0, 4)}
            posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
