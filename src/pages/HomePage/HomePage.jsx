import { fetchTrendingMovies } from "../../api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Error from "../../components/Error/Error.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import useFetchData from "../../hooks/useFetchData.js";

function HomePage() {
  const {
    data: movies,
    loading,
    error,
  } = useFetchData(
    () => fetchTrendingMovies(),
    [],
    (res) => res.data.results,
  );

  return (
    <div>
      <h1>Top movies</h1>
      <MovieList movies={Array.isArray(movies) ? movies : []} />
      {loading && <Loader />}
      {error && <Error message={error.message} />}
    </div>
  );
}

export default HomePage;