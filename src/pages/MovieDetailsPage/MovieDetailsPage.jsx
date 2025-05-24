import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";

function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    const {
        data: movie,
        loading,
        error,
    } = useFetchData(() => fetchMovieDetails(movieId), [movieId]);


    return (
        <div>
            <Link
                to={backLinkHref}
                className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Go back
            </Link>
            {movie && <MovieDetails movie={movie} />}
            {loading && <Loader />}
            {error && <Error message={error.message} />}
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage;