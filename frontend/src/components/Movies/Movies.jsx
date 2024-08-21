import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "./MoviesList";
import "./Movies.css";

const Movies = ({ darkLight }) => {
  const [movies, setMovies] = useState([]);
  const [likeMovies, setLikeMovies] = useState([]);
  const [unLikeMovies, setUnLikeMovies] = useState([]);
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);
  const [activeCategory, setActiveCategory] = useState(28);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=22115f0fff1e31a221cf90785636db90&adult=false`);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData();
  }, []);

  const handleCategoryClick = (categoryValue) => {
    setActiveCategory(categoryValue);
  };

  return (
    <div className={`${darkLight ? "background-light" : "background-dark"}`} id="movies" style={{ paddingTop: "50px" }}>
      <div className="container">
        <ul className={`movies-category ${darkLight ? "background-light" : "background-dark"}`}>
          <li className={activeCategory === 28 ? "active" : ""} onClick={() => handleCategoryClick(28)}>Aksiyon</li>
          <li className={activeCategory === 12 ? "active" : ""} onClick={() => handleCategoryClick(12)}>Macera</li>
          <li className={activeCategory === 35 ? "active" : ""} onClick={() => handleCategoryClick(35)}>Komedi</li>
          <li className={activeCategory === 80 ? "active" : ""} onClick={() => handleCategoryClick(80)}>Polisiye</li>
          <li className={activeCategory === 99 ? "active" : ""} onClick={() => handleCategoryClick(99)}>Belgesel</li>
          <li className={activeCategory === 18 ? "active" : ""} onClick={() => handleCategoryClick(18)}>Drama</li>
          <li className={activeCategory === 36 ? "active" : ""} onClick={() => handleCategoryClick(36)}>Tarih</li>
          <li className={activeCategory === 27 ? "active" : ""} onClick={() => handleCategoryClick(27)}>Korku</li>
        </ul>
        <div className="movies-wrapper">
          <MoviesList moviesListType={"popular"} movies={movies} setLikeMovies={setLikeMovies} setUnLikeMovies={setUnLikeMovies} setWatchLaterMovies={setWatchLaterMovies} activeCategory={activeCategory} />
          <MoviesList moviesListType={"like"} movies={movies} likeMovies={likeMovies} setLikeMovies={setLikeMovies} setUnLikeMovies={setUnLikeMovies} setWatchLaterMovies={setWatchLaterMovies} activeCategory={activeCategory} />
          <MoviesList moviesListType={"unLike"} movies={movies} unLikeMovies={unLikeMovies} setLikeMovies={setLikeMovies} setUnLikeMovies={setUnLikeMovies} setWatchLaterMovies={setWatchLaterMovies} activeCategory={activeCategory} />
          <MoviesList moviesListType={"watchLater"} movies={movies} watchLaterMovies={watchLaterMovies} setLikeMovies={setLikeMovies} setUnLikeMovies={setUnLikeMovies} setWatchLaterMovies={setWatchLaterMovies} activeCategory={activeCategory} />
        </div>
      </div>
    </div>
  );
}

export default Movies;