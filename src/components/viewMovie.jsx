import { data } from "autoprefixer";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function viewMovie({ movies }) {
  const [filteredMovie, setFilteredMovie] = useState("");
  const { parms_Id } = useParams("/movies/");

  const filteredData = movies.filter((m) => m.Title === parms_Id);
  console.log(filteredData);
  const [{ Title }] = filteredData;

  return <div>{Title}</div>;
}
