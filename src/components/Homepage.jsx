import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MovieList from "./MovieList";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import Footer from "./Footer";

const Homepage = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const apiUrl = `http://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&with_original_language=en`;
  const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
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
    axios
      .get(genreUrl)
      .then((response) => {
        const genreMap = {};
        response.data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="relative overflow-x-hidden max-w-[1400px] min-w-[300px] m-auto">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <Navbar
            searchQuery={searchQuery}
            onSearchInputChange={onSearchInputChange}
            onHandleSearch={onHandleSearch}
          />
          <Hero />
          <MovieList movieList={movies} genres={genres} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Homepage;
