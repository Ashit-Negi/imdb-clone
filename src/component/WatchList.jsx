import React, { useContext, useEffect, useState } from "react";
import genereids from "../utility/genre";
import { MovieContext } from "./MovieContext";

function WatchList() {
  const { movieRemoveFromWatchlist, watchlist, setWatchList } =
    useContext(MovieContext);

  const [search, setSearch] = useState("");
  const [generList, setgenerList] = useState([]);
  const [currGenre, setcurrGener] = useState("All Genres");

  const handleFilter = (genre) => {
    setcurrGener(genre);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value)
  };
  const handleAscRating = () => {
    let sortedAsc = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });
    setWatchList([...sortedAsc]);
  };
  const handledscRating = () => {
    let sortedDsc = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });
    setWatchList([...sortedDsc]);
  };

  useEffect(() => {
    const temp = watchlist.map((movieObj) => {
      return genereids[movieObj.genre_ids[0]];
    });

    const uniqueGener = new Set(temp);
    //console.log(uniqueGener)
    setgenerList(["All Genres", ...uniqueGener]);
  }, [watchlist]);
  return (
    <>
      <div className="flex justify-center m-4">
        {generList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre === genre
                  ? "mx-3 flex justify-center items-center border rounded-xl bg-blue-400 h-[3rem] w-[9rem] text-white font-bold"
                  : "mx-3 flex justify-center items-center border rounded-xl bg-gray-400/50 h-[3rem] w-[9rem] text-white font-bold"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* {search field} */}
      <div className="flex justify-center my-10 ">
        <input
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 border border-black"
          type="text"
          placeholder="Search for Movies "
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* watchlist table */}
      <div className="m-8">
        <table className="w-full text-center">
          <thead className="border border-gray-200 rounded-lg bg-gray-200">
            <tr>
              <th>Name</th>
              <th>
                <i onClick={handleAscRating} class="fa-solid fa-arrow-up"></i>{" "}
                Rating{" "}
                <i onClick={handledscRating} class="fa-solid fa-arrow-down"></i>
              </th>
              <th>Poularity</th>
              <th>Genre</th>
              <th>Delete Button</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genereids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    />
                    <div className="mx-10">{movieObj.title} </div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genereids[movieObj.genre_ids[0]]}</td>
                  <td>
                    <button
                      onClick={() => movieRemoveFromWatchlist(movieObj)} // Delete action
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
