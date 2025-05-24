import { useSearchParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { fetchMoviesByQuery } from "../../api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  
  const {
    data: movies,
    loading,
    error,
  } = useFetchData(
    () =>
      query
        ? fetchMoviesByQuery(query)
        : Promise.resolve({ data: { results: [] } }),
    [query],
    (res) => res.data.results,
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchQuery = form.elements.query.value.trim();
    if (!searchQuery) return;
    setSearchParams({ query: searchQuery });
  }

  return (
   <div>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          defaultValue={query}
          name="query"
          placeholder="Search movie..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      <MovieList movies={Array.isArray(movies) ? movies : []} from="/" />
      {loading && <Loader />}
      {error && <Error message={error.message} />}
   </div>
  )
}

export default MoviesPage;