import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";

function MovieDetailsPage() {
    const { movieId } = useParams();

    const {
        data: movie,
        loading,
        error,
      } = useFetchData(() => fetchMovieDetails(movieId), [movieId]);


    return (
        <div>
            {movie && <MovieDetails movie={movie} />}
            {loading && <Loader />}
            {error && <Error message={error.message} />}
        </div>
    )
}

export default MovieDetailsPage;