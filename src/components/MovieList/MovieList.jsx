import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

function MovieList({ movies, from }) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <Link
          to={`/movies/${movie.id}`}
          state={{ from }}
          key={movie.id}
          className={styles.card}
        >
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
            className={styles.poster}
          />
          <h3 className={styles.title}>{movie.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
