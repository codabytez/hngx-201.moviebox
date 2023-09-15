import { Link } from "react-router-dom";
import IMDBRating from "./IMDBRating";
import MovieGenre from "./MovieGenre";

const MovieCard = ({
  id,
  title,
  releaseDate,
  posterUrl,
  imdbRating,
  movie,
  genres,
}) => {
  const localDate = new Date(releaseDate);
  const date = localDate.toISOString();

  return (
    <Link to={`/movie/${id}`} className="min-w-[150px] max-w-[250px] w-[100%]">
      <div
        data-testid="movie-card"
        className="flex flex-col justify-center gap-3 transition-all duration-500 hover:shadow-md pb-2"
      >
        <img data-testid="movie-poster" src={posterUrl} alt={title} />
        <p
          data-testid="movie-release-date"
          className="text-xs font-bold text-[#9CA3AF] pl-1"
        >
          {date}
        </p>
        <h2
          data-testid="movie-title"
          className="text-gray-900 text-lg font-bold leading-tight pl-1"
        >
          {title}
        </h2>
        <IMDBRating color="gray-900">{imdbRating}</IMDBRating>
        <MovieGenre movies={movie} genres={genres} />
      </div>
    </Link>
  );
};

export default MovieCard;
