import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import React from "react";
import WatchBox from "./WatchMovies";
import ViewMovie from "./viewMovie";

function SecondHero(props) {
  console.log(props);
  return (
    <div className=" bg-[#0a1c24] min-h-[80vh] flex-1 rounded-xl text-white gap-8  shadow-blue-300 shadow-lg">
      <Routes>
        <Route path="/" element={<WatchBox movies={props.movies} />}></Route>
        <Route path="/movies/:parms_Id" element={<ViewMovie movies={props.movies} />}></Route>
      </Routes>
    </div>
  );
}

export default SecondHero;
