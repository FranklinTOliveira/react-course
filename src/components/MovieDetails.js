function MovieDetails({
  posterUrl,
  title,
  rated,
  runtime,
  genre,
  plot,
  actors,
  rating,
}) {
  console.log("<MovieDetails /> component rendering...");

  return (
    <div>
      <img src={posterUrl} alt={title} />
      <h1>{title}</h1>
      <div>{rating}</div>
      <ul>
        <li>{rated}</li>
        <li>{runtime}</li>
        <li>{genre}</li>
      </ul>

      <h3>Plot</h3>
      <p>{plot}</p>

      <h3>Actors</h3>
      <p>{actors}</p>
    </div>
  );
}

export default MovieDetails;
