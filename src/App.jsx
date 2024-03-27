import { useEffect, useState } from "react";
import "./App.css";
import FirstHero from "./components/FirstHero.jsx";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import WatchBox from "./components/WatchMovies.jsx";
import axios from "axios";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SecondHero from "./components/SecondHero.jsx";
import Footer from "./components/Footer.jsx";

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

  const sum = tempmovies.length;

  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      title: "Inception",
      release_date: "2010",
      Poster:
        "https://e1.pxfuel.com/desktop-wallpaper/705/466/desktop-wallpaper-96-tamil-movie-96-movie.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
      overview:
        "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves.",
    },
    {
      imdbID: "tt0088763",
      title: "Back to the Future",
      release_date: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
      overview:
        "In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry.",
    },
  ];

  return (
    <>
      <NavBar number={sum} />
      <Main>
        <FirstHero movies={tempmovies} />
        <SecondHero movies={tempWatchedData} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
