import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieCard({ posterPath, name, movieObject }) {
  let { watchlist, handleAddToWatchList, movieRemoveFromWatchlist } =
    useContext(MovieContext);

  function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObject.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover flex flex-col justify-between items-end rounded-lg hover:scale-110 duration-300 hover:cursor-pointer "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
      }}
    >
      {doesContain(movieObject) ? (
        <div
          onClick={() => movieRemoveFromWatchlist(movieObject)}
          className="flex justify-center  items-center "
        >
          &#10060; {/* cross button for deleting */}
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObject)}
          className="flex justify-center  items-center "
        >
          &#10084; {/*heart button for adding*/}
        </div>
      )}

      <div className="text-white w-full text-center text-xl p-2 bg-gray-800/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
