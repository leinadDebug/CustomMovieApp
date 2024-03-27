import { FiArrowLeftCircle } from "react-icons/fi";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function viewMovie({ movies }) {
  const [filteredMovie, setFilteredMovie] = useState("");
  const { parms_Id } = useParams("/movies/");
  const navigate = useNavigate();

  const filteredData = movies.filter((m) => m.title.toString() == parms_Id);
  console.log(filteredData);
  const [{ title, Year, description }] = filteredData;

  return (
    <div className="m-2 p-3 pb-5 flex flex-col gap-4 h-[98%]">
      <button className="rounded-full mr-auto hover:bg-[rgb(109,113,116)]">
        <Link to={"/"}>
          <FiArrowLeftCircle size={28} color="gold" />
        </Link>
      </button>
      <div className="flex flex-col mx-2 text-left">
        <img src={`${movies.poster}`} alt="img poster"></img>
        <h1 className="mr-auto text-2xl font-bold italic text-amber-100 m-2 ">
          {title}
        </h1>
        <ul>
          <li className="font-extralight">Released Year: {Year}</li>
        </ul>
      </div>

      <StarRating maxRate={10} color="gold" size="20" />
      <div className="bg-white p-1"></div>
      {description && (
        <div className="">
          <label>Overview:</label>
          <p>{description}</p>
        </div>
      )}
      <footer>
        <small className=" absolute bottom-6 right-10">&copy; Movie App</small>
      </footer>
    </div>
  );
}
