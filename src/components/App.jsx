import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import MoviePage from "./MoviePages";
import ErrorPage from "./ErrorPage";
import MovieSearch from "./MovieSearch";
import ComingSoon from "./ComingSoon";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const error = {
    code: "ERR_BAD_REQUEST",
    message: "Request failed with status code 404",
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.length < 1) return;
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div className="max-w[1300px] m-auto">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              searchQuery={searchQuery}
              onHandleSearch={handleSearch}
              onSearchInputChange={handleSearchInputChange}
            />
          }
        />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route
          path="/search/:query"
          element={
            <MovieSearch
              searchQuery={searchQuery}
              onHandleSearch={handleSearch}
              onSearchInputChange={handleSearchInputChange}
            />
          }
        />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<ErrorPage error={error} />} />
      </Routes>
    </div>
  );
}

export default App;
