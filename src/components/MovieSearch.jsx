import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "./LoadingPage";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const apiKey = "42f956d501059428aaea8646930dd130";

const MovieSearch = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );

      if (response.data.results) {
        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <>
      <div className="border h-[100px] bg-gray-700">
        <Navbar
          searchQuery={searchQuery}
          onSearchInputChange={onSearchInputChange}
          onHandleSearch={onHandleSearch}
        />
      </div>
      <div className="max-w-[1400px] min-w-[300px]  p-4 relative bg-gray-200">
        {loading ? (
          <LoadingPage />
        ) : (
          <>
            <h2 className="text-black text-2xl sm:text-4xl font-bold py-8">
              {searchResults.lenght
                ? "Search results for: "
                : "No search result for: "}
              <span className="text-red-500">{query}</span>
            </h2>
            <div className="px-6 w-full min-w-[300px] max-w-[1400px] grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-x-20 sm:gap-x-5 gap-y-10">
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
          </>
        )}
      </div>
    </>
  );
};

export default MovieSearch;
