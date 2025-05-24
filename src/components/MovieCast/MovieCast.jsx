import useFetchData from "../../hooks/useFetchData.js";
import { fetchMovieCredits } from "../../api.js";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";

function MovieCast() {
    const { movieId } = useParams();

    const {
        data: cast,
        loading,
        error,
    } = useFetchData(
        () => fetchMovieCredits(movieId),
        [movieId],
        (res) => res.data.cast,
    );

    return (
        <>
          {loading && <Loader />}
          {error && <Error message={error.message} />}
          {cast && cast.length > 0 && (
            <section className={styles.wrapper}>
              <h2 className={styles.heading}>Movie Cast</h2>
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Character</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cast.map((member) => (
                      <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.character}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </>
      );
}

export default MovieCast;