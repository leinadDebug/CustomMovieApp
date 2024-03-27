import React, { useState } from "react";
import { Movies } from "./constants";
import { useNavigate } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import { BiMovie } from "react-icons/bi";

export default function FirstHero({ movies }) {
  const [isClicked, setClicked] = useState("false");

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div
      className={`bg-[#0a1c24] flex-1 flex flex-col rounded-xl text-white max-h-[80vh] shadow-blue-300 shadow-lg`}
    >
      <div className="ml-auto  bg-[#3DA6D3] rounded-bl-full pb-2 pl-4  shadow-black shadow-inner shadow-gradient bg-gradient ">
        <button
          className="rounded-full text-white m-3 px-2"
          onClick={handleClick}
        >
          {isClicked ? <BiMovie /> : <SiThemoviedatabase />}
        </button>
      </div>
      <div className="my-2 mt-20 overflow-y-auto scrollbar-thin scrollbar-webkit">
        {movies.map(
          (movie, index) =>
            isClicked && (
              <Movies key={index} className="text-white" movie={movie}></Movies>
            )
        )}
      </div>
    </div>
  );
}
