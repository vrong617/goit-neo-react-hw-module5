import useFetchData from "../../hooks/useFetchData.js";
import { fetchMovieReviews } from "../../api.js";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import { useParams } from "react-router-dom";
import styles from "./MovieReviews.module.css";

function MovieReviews() {
    const { movieId } = useParams();

  const {
    data: reviews,
    loading,
    error,
  } = useFetchData(
    () => fetchMovieReviews(movieId),
    [movieId],
    (res) => res.data.results,
  );

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={error.message} />}
      {reviews && reviews.length > 0 && (
        <section className={styles.wrapper}>
          <h2 className={styles.heading}>Movie Reviews</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Content</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id}>
                    <td>{review.author}</td>
                    <td>{review.content}</td>
                    <td>{new Date(review.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
      {reviews && reviews.length === 0 && (
        <p className={styles.empty}>No reviews available for this movie.</p>
      )}
    </>
  );
}

export default MovieReviews;
