import React, { useState } from "react";
import { Movies } from "./constants";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

export default function WatchMovies({ movies }) {
  const [isClicked, setClicked] = useState(true);
  console.log(movies);

  const handleClick = () => {
    setClicked(!isClicked);
    console.log(isClicked);
  };
  return (
    <div className="flex flex-col justify-end m-2 p-3 pb-5 gap-3  rounded-lg">
      <div className="bg-slate-800 p-6 flex flex-col rounded-md">
        <button
          className="rounded-full bg-[#3DA6D3] text-white px-2 w-fit ml-auto"
          onClick={handleClick}
        >
          {isClicked ? "-" : "+"}
        </button>
        <div className=" flex flex-col px-9 gap-3">
          <h1 className="text-left font-semibold">MOVIES YOU'VE WATCHED</h1>
          <ul className="flex justify-between">
            <h1>🎦 2 movies</h1>
            <h3>⭐ 8.65</h3>
            <h3>⏳ 132 min</h3>
          </ul>
        </div>
      </div>

      {movies.map(
        (movie, index) =>
          isClicked && (
            <Movies key={index} className="text-white" movie={movie}></Movies>
          )
      )}
    </div>
  );
}
