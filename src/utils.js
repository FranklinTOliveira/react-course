const apiKey = process.env.REACT_APP_OMDB_KEY; // grabbed from inside our .env file
const OMDB_ENDPOINT = `https://www.omdbapi.com/?apikey=${apiKey}&`;

// Write an arrow function called getMoviesBySearchTerm that takes a search string as input and uses fetch and async/await to get an array of movies with a matching title from OMDb API.
const getMoviesBySearchTerm = async (searchTerm, searchType) => {
  const endpointURL = `${OMDB_ENDPOINT}s=${searchTerm}${
    searchType ? "&type=" + searchType : ""
  }`;

  const data = await fetch(endpointURL);
  const movies = await data.json();

  return movies.Search;
};

// Write another arrow function called getMovieDetailsById that takes a valid OMDb movie id as input and uses fetch and async/await to get an object of detailed information about the specified movie.
const getMovieDetailsById = async (movieId) => {
  const endpointURL = `${OMDB_ENDPOINT}i=${movieId}`;

  const data = await fetch(endpointURL);
  const movie = await data.json();

  return movie;
};

// default exports, 1 per file allowed
// named exports, can have as many as we want

export { getMoviesBySearchTerm, getMovieDetailsById };
