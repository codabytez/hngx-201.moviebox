import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import MovieList from "./MovieList";
import MoviePage from "./MoviePage";

function App() {
  return (
    <div className="max-w[1400px] m-auto">
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/movies" element={<MovieList />} /> */}
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
      {/* <MoviePage /> */}
      {/* <Homepage /> */}
      {/* <MovieList /> */}
    </div>
  );
}

export default App;
