import { FiArrowLeftCircle } from "react-icons/fi";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function viewMovie({ movies }) {
  const [filteredMovie, setFilteredMovie] = useState("");
  const { parms_Id } = useParams("/movies/");

  const filteredData = movies.filter((m) => m.Title || m.title === parms_Id);
  console.log(filteredData);
  const [{ Title }] = filteredData;

  return (
    <div className="m-2 p-3 pb-5 flex flex-col gap-4">
      <button className=" mr-auto">
        <FiArrowLeftCircle size={28} color="gold" />
      </button>
      <h1>{Title}</h1>

      <StarRating maxRate={10} color="gold" size="20" />
    </div>
  );
}
