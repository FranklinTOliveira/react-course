function MovieCard({ title, type, posterUrl }) {
  console.log("<MovieCard /> component rendering...");

  return (
    <div className="moviecard">
      <img
        className="moviecard__poster"
        src={posterUrl}
        alt={`${title} poster`}
      />
      <footer className="moviecard__footer">
        <h3 className="moviecard__title">{title}</h3>
        <span className="moviecard__type">{type}</span>
      </footer>
    </div>
  );
}

export default MovieCard;
