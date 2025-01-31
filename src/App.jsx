import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Movies from "./component/Movies";
import NavBar from "./component/NavBar";
import WatchList from "./component/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieContext } from "./component/MovieContext";

function App() {
  const [watchlist, setWatchList] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    setWatchList(newWatchlist);
    localStorage.setItem("movies", JSON.stringify(newWatchlist));
  };
  const movieRemoveFromWatchlist = (movieObj) => {
    const updatedWatchlist = watchlist.filter(
      (movie) => movie.id !== movieObj.id
    );
    setWatchList(updatedWatchlist);
    localStorage.setItem("movies", JSON.stringify(updatedWatchlist));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movies");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider
          value={{
            handleAddToWatchList,
            watchlist,
            movieRemoveFromWatchlist,
            setWatchList,
          }}
        >
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner /> <Movies />
                </>
              }
            />

            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
