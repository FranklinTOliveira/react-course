import { useState, useEffect, useRef } from "react";

import "./App.css";

// Components
import Spinner from "./components/Spinner";
import Counter from "./components/Counter";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

// Utilities
import { getMoviesBySearchTerm, getMovieDetailsById } from "./utils";

function App() {
  console.log("<App /> component rendering...");

  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const searchTerm = useRef(""); // useRef doesn't request a re-render

  // useEffect(() => {
  //   getMoviesBySearchTerm("superman").then((movies) => {
  //     console.log("getMoviesBySearchTerm Done!", movies);

  //     setMovieList(movies);
  //   });
  // }, []);

  useEffect(() => {
    // use setTimeOut to simulate internet lag
    // setTimeout(() => {
    getMovieDetailsById("tt1285035").then((movie) => {
      console.log("getMovieDetailsById Done!", movie);
      setMovie(movie);
    });
    // }, 4000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    console.log(searchTerm.current.value);

    const term = searchTerm.current.value;

    setTimeout(() => {
      getMoviesBySearchTerm(term)
        .then((movies) => {
          console.log("getMoviesBySearchTerm Done!", movies);

          setMovieList(movies);
        })
        .catch(() => {})
        .finally(() => {
          setIsLoading(false);
          //searchTerm.current.value = "";
        });
    }, 3000);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>

      <h4>Movie List</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter movie..." ref={searchTerm} />
        <button type="submit">Search</button>
      </form>

      {isLoading ? (
        <Spinner />
      ) : (
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
      )}

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
