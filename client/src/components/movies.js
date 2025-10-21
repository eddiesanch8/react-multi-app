export default function MovieCard({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <section className="product" key={movie.id}>
          <p>{movie.original_title}</p>
          <img
            className="product__img"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.alt_text}
          />
          <div className="product__details">
            <p className="product__price">{movie.overview}</p>
          </div>
        </section>
      ))}
    </>
  );
}
