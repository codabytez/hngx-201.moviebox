import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import MoviePage from "./MoviePage";
import ErrorPage from "./ErrorPage";

function App() {
  const error = {
    code: "ERR_BAD_REQUEST",
    message: "Request failed with status code 404",
  };
  return (
    <div className="max-w[1400px] m-auto">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="*" element={<ErrorPage error={error} />} />
      </Routes>
    </div>
  );
}

export default App;
