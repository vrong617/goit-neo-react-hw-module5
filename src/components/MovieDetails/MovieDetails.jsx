import { Link, useLocation } from "react-router-dom";
import styles from "./MovieDetails.module.css";

function MovieDetails({ movie }) {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className={styles.poster}
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.overview}>{movie.overview}</p>
          <p><span>Release Date:</span> {new Date(movie.release_date).toLocaleDateString()}</p>
          <p><span>Rating:</span> {movie.vote_average}</p>
          <p><span>Genres:</span> {movie.genres.map((g) => g.name).join(", ")}</p>
          <p><span>Runtime:</span> {movie.runtime} minutes</p>
          <p><span>Tagline:</span> {movie.tagline}</p>
          <p><span>Budget:</span> ${movie.budget.toLocaleString()}</p>
          <p><span>Revenue:</span> ${movie.revenue.toLocaleString()}</p>
          <p><span>Production Companies:</span> {movie.production_companies.map((c) => c.name).join(", ")}</p>
          <p><span>Production Countries:</span> {movie.production_countries.map((c) => c.name).join(", ")}</p>
          <p><span>Spoken Languages:</span> {movie.spoken_languages.map((l) => l.name).join(", ")}</p>
          <p><span>Status:</span> {movie.status}</p>
          <div className={styles.links}>
            <Link
              to={`/movies/${movie.id}/cast`}
              state={{ ...location.state }}
              className={styles.link}
            >
              Cast
            </Link>
            <Link
              to={`/movies/${movie.id}/reviews`}
              state={{ ...location.state }}
              className={styles.link}
            >
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
