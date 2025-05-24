import { useState, useEffect } from "react";

function useFetchData(
  fetchFunction,
  dependencies = [],
  dataExtractor = (res) => res.data,
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchFunction()
      .then((res) => {
        setData(dataExtractor(res));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  return { data, loading, error };
}

export default useFetchData;