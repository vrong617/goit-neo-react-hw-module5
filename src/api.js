import axios from "axios";

const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRlNGRjY2IxZjMyNGVlNzNmYjE0NWEwZjJlMmUyMyIsIm5iZiI6MTc0NTg2NjIwMS41NjgsInN1YiI6IjY4MGZjZGQ5ZGRlNmUxODBmNjgwZjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8y4nX4A_fdUPHK2E_lia9rlq00hJuHzb5rpblrOaTHk";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization: `Bearer ${apiKey}`,
}

export const fetchMoviesByQuery = async (query, page = 1) => {
  return await axios.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
}

export const fetchTrendingMovies = async (timeWindow = "day") => {
  return await axios.get(`/trending/movie/${timeWindow}`);
};

export const fetchMovieDetails = async (movieId) => {
  return await axios.get(`/movie/${movieId}`);
};

export const fetchMovieCredits = async (movieId) => {
  return await axios.get(`/movie/${movieId}/credits`);
};

export const fetchMovieReviews = async (movieId) => {
  return await axios.get(`/movie/${movieId}/reviews`);
};