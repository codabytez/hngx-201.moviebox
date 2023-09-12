import { Link } from "react-router-dom";

const MovieCard = ({ id, title, releaseDate, posterUrl }) => {
  return (
    <Link to={`/movie/${id}`} className="min-w-[150px] max-w-[250px] w-[100%]">
      <div data-testid="movie-card" className="flex flex-col justify-center ">
        <img data-testid="movie-poster" src={posterUrl} alt={title} />
        <p
          data-testid="movie-release-date"
          className="text-xs font-bold text-[#9CA3AF]"
        >
          {releaseDate}
        </p>
        <h2
          data-testid="movie-title"
          className="text-lg text-[#111827] font-bold"
        >
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default MovieCard;
