import { FiArrowLeftCircle } from "react-icons/fi";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function viewMovie({ movies }) {
  // const [filteredMovie, setFilteredMovie] = useState("");
  const { parms_Id } = useParams("/movies/");
  // const navigate = useNavigate();

  const filteredData = movies.filter((m) => m.title.toString() == parms_Id);
  console.log(filteredData);
  const [{ title, release_date, overview, Poster }] = filteredData;

  return (
    <div className="m-2 p-3 pb-5 flex flex-col gap-4 h-[98%] ">
      <button className="rounded-full mr-auto hover:bg-[rgb(109,113,116)]">
        <Link to={"/"}>
          <FiArrowLeftCircle size={28} color="gold" />
        </Link>
      </button>
      <div className="flex flex-col mx-2 text-left">
        <img
          src={`${Poster}`}
          alt="img poster"
          className="max-w-contain max-h-44"
        ></img>
        <h1 className="mr-auto text-2xl font-bold italic text-amber-100 m-2 ">
          {title}
        </h1>
        <ul>
          <li className="font-extralight">Released Year: {release_date}</li>
        </ul>
      </div>

      <StarRating maxRate={10} color="gold" size="20" />
      <div className="bg-white p-1"></div>
      {overview && (
        <div className="text-left text-pretty text-[#7e7c6b] font-thin">
          <label>Overview:</label>
          <p>{overview}</p>
        </div>
      )}
      
    </div>
  );
}
