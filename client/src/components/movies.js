import "../css/movie.css";
export default function MovieCard({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <section className="movie" key={movie.id}>
          <img
            className="movie__img"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.alt_text}
          />

          <div className="movie__details">
            <p className="movie__title">{movie.original_title}</p>
            <p className="movie__summary">{movie.overview}</p>
          </div>
        </section>
      ))}
    </>
  );
}
