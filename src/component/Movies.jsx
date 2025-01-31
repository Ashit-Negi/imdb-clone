import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movie, setmovies] = useState([]);

  const [pageno, setpageno] = useState(1);

  const handleNext = () => {
    setpageno(pageno + 1);
  };
  const handlePrevious = () => {
    if (pageno > 1) {
      setpageno(pageno - 1);
    }
  };

  console.log(movie);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=4d8018c59b75d46423fc05d2c0a8c0ff&language=en-US&page=${pageno}`
      )
      .then(function (res) {
        //console.log
        res.data.results;
        setmovies(res.data.results);
      });
  }, [pageno]);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex gap-8 justify-evenly flex-wrap ">
        {movie.map((movieObj) => {
          return (
            <MovieCard
              name={movieObj.title}
              posterPath={movieObj.poster_path}
              movieObject={movieObj}
            />
          );
        })}
      </div>
      <Pagination
        nextPageFn={handleNext}
        previousPageFn={handlePrevious}
        pageNumber={pageno}
      />
    </div>
  );
}

export default Movies;
