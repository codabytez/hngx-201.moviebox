const MovieGenre = ({ movies, genres }) => {
  return (
    <div className="text-gray-400 text-xs font-bold pl-1">
      {movies.genre_ids.map((genreId) => genres[genreId]).join(", ")}
    </div>
  );
};

export default MovieGenre;
