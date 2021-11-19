import { useState, useEffect } from "react";

import "./App.css";

// Components
import Todo from "./components/Todo/Todo";
import MovieSearch from "./components/MovieSearch";
import Counter from "./components/Counter";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

// Utilities
import { getMovieDetailsById } from "./utils";
import NameTag from "./components/NameTag";

function App() {
  console.log("<App /> component rendering...");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // side-effect
    getMovieDetailsById("tt1285035").then((movie) => {
      console.log("getMovieDetailsById Done!", movie);
      setMovie(movie);
    });
  }, []);

  return (
    <div className="App">
      <h1>Movie App</h1>

      <Todo />

      <MovieSearch />

      <NameTag name="Angela" />
      <NameTag name="Dwight" />

      {/* inner content can be access with children prop */}
      <NameTag>Michael</NameTag>

      {/* can use as many of the same component, each is independent */}
      <Counter />
      <Counter />

      {/* <pre>
        <code>{JSON.stringify(movie)}</code>
      </pre> */}

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
    </div>
  );
}

export default App;
