import { useEffect, useState } from "react";
import "./App.css";
import ListBox from "./components/ListBox";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import WatchBox from "./components/WatchBox";
import axios from "axios";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SecondHero from "./components/SecondHero.jsx";

function App() {
  const [tempmovies, settempmovies] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDVjOGNkMzkwNjc4MTdlYWUzZTExMzU4MDJlNTE0ZCIsInN1YiI6IjY1YzU3OWRiZmQ3YWE0MDE0Njk3NjQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r8SeCegqAfR9_U6L0Yhc5AEK4XEfLOHpDp3bqqZK-Ms",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data); // Check the structure of response.data

        // Assuming response.data is an object with a 'results' property
        const { results } = response.data;
        console.log(results); // Check the structure of results

        // Now you can iterate over results or perform any other operations you need
        settempmovies([...results]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];

  return (
    <>
      <NavBar />
      <Main>
        <ListBox movies={tempmovies} />
        <SecondHero movies={tempWatchedData} />
      </Main>
    </>
  );
}

export default App;
