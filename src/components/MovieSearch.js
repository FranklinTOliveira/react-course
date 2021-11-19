import { useState, useRef } from "react";

// Components
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

// Utilities
import { getMoviesBySearchTerm } from "../utils";

function MovieSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const searchTerm = useRef(""); // useRef doesn't request a re-render

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    console.log(searchTerm.current.value);

    const term = searchTerm.current.value;

    // setTimeout(() => {
    getMoviesBySearchTerm(term, "movie")
      .then((movies) => {
        console.log("getMoviesBySearchTerm Done!", movies);

        setMovieList(movies);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
        //searchTerm.current.value = "";
      });
    // }, 3000);
  };

  return (
    <div>
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
    </div>
  );
}

export default MovieSearch;
