import { useState, useEffect } from "react";

import "./App.css";

import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

import { getMoviesBySearchTerm, getMovieDetailsById } from "./utils";

function App() {
  console.log("<App /> component rendering...");

  // const [name, setName] = useState("Erik"); // = A[0]
  // const [isHappy, setIsHappy] = useState(true); // = A[1]
  const [counter, setCounter] = useState(0); // = A[1]
  const [movie, setMovie] = useState(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMoviesBySearchTerm("superman").then((movies) => {
      console.log("getMoviesBySearchTerm Done!", movies);

      setMovieList(movies);
    });
  }, []);

  useEffect(() => {
    // use setTimeOut to simulate internet lag
    // setTimeout(() => {
    getMovieDetailsById("tt1285035").then((movie) => {
      console.log("getMovieDetailsById Done!", movie);
      setMovie(movie);
    });
    // }, 4000);
  }, []);

  const handleClickIncrement = () => {
    setCounter(counter + 1); // Update counter during next render
  };

  const handleClickDecrement = () => {
    setCounter(counter - 1); // Update counter during next render
  };

  return (
    <div className="App">
      <h1>Movie App</h1>

      <h1>Counter state value: {counter}</h1>

      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>

      <hr />

      <pre>
        <code>{JSON.stringify(movie)}</code>
      </pre>

      <hr />

      <MovieDetails
        posterUrl="https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        title="The Social Network"
        rated="PG-13"
        runtime="180 mins"
        genre="action"
        plot="Guy gets rich at the end and loses friends."
        actors="John Doe"
        rating="8.4"
      />

      <hr />

      {movie ? (
        <MovieCard
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
        />
      ) : (
        <div>Loading..</div>
      )}

      <hr />

      <h4>Movie List</h4>

      <div className="movielist">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
