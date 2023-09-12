import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "./LoadingPage";
import MovieCard from "./MovieCard";

const apiKey = "42f956d501059428aaea8646930dd130";

const MovieSearch = ({ searchQuery, setSearchQuery, onSearchInputChange }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  onSearchInputChange;

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
      );

      if (response.data.results) {
        setSearchResults(response.data.results);
      } else {
        setSearchResults([]); // Clear the results if there are no matching movies
      }
    } catch (error) {
      console.error("Error fetching search results: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const searchTimer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchQuery]);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-items-center  w-full  absolute ${
            searchQuery.length > 0
              ? "pt-20 h-[calc(100vh-40px)] bg-gray-700"
              : "top-[67px] h-0"
          }  z-10 px-20 py-20 custom-scrollbar overflow-y-scroll  `}
        >
          {searchResults.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date.slice(0, 4)}
              posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
