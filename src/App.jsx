import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navigation from "./components/Navigation/Navigation";
import "modern-normalize";
import './App.css'

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews.jsx"));


function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
