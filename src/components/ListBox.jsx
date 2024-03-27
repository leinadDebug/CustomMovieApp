import React, { useState } from "react";
import { Movies } from "./constants";
import { useNavigate } from "react-router-dom";

export default function ListBox({ movies }) {
  const [isClicked, setClicked] = useState("false");

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div
      className={`bg-[#0a1c24] flex-1 flex rounded-xl text-white max-h-[80vh]`}
    >
      <div className="justify-end m-2 fixed ">
        <button
          className="rounded-full bg-[#050c0f] text-white m-3 px-2"
          onClick={handleClick}
        >
          {isClicked ? "-" : "+"}
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
