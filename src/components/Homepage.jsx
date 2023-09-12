import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MovieList from "./MovieList";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import MovieSearch from "./MovieSearch";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const apiKey = "42f956d501059428aaea8646930dd130";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2023&sort_by=vote_average.desc&vote_count.gte=1000`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        // setIsLoading(false);
        const errorMessage = error;
        setError(errorMessage);
        console.error("Error fetching movie data:", error);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative overflow-x-hidden">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <Navbar
            searchQuery={searchQuery}
            onSearchInputChange={handleSearchInputChange}
          />
          <MovieSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearchInputChange={handleSearchInputChange}
          />
          <Hero heroMovies={movies} />
          <MovieList movieList={movies} />
        </>
      )}
    </div>
  );
};

export default Homepage;
