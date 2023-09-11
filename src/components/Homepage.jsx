import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MovieList from "./MovieList";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const apiKey = "42f956d501059428aaea8646930dd130";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2023&sort_by=vote_average.desc&vote_count.gte=1000`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentMovieIndex, movies]);

  const handleIndicatorClick = (index) => {
    setCurrentMovieIndex(index);
  };

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const apiKey = "42f956d501059428aaea8646930dd130";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

    axios
      .get(apiUrl)
      .then((res) => {
        const movieData = res.data.results.slice(0, 10);
        setMovieList(movieData);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  return (
    <div className="relative h-[600px] overflow-x-hidden">
      <Navbar />
      <Hero
        movies={movies}
        onIndicatorClick={handleIndicatorClick}
        currentMovieIndex={currentMovieIndex}
      />
      <MovieList movieList={movieList} />
    </div>
  );
};

export default Homepage;
