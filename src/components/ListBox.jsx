import React, { useState } from "react";
import { Movies } from "./constants";
import { useNavigate } from "react-router-dom";



export default function ListBox({ movies }) {
  
  const [isClicked, setClicked] = useState("false");

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div className={`bg-[#0a1c24] flex-1 rounded-xl text-white`}>
      <div className="flex justify-end m-2">
        <button
          className="rounded-full bg-[#050c0f] text-white m-3 px-2"
          onClick={handleClick}>
          {isClicked ? "-" : "+"}
        </button>
      </div>
      {movies.map(
        (movie, index) =>
          isClicked && <Movies key={index} className="text-white" movie={movie} ></Movies>
      )}
    </div>
  );
}
