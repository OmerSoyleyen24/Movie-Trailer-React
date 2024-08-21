import React from "react";
import MovieImage from "./MovieImage";
import MovieTitle from "./MovieTitle";
import MovieActions from "./MovieActions";

const MovieItem = ({ movie, setLikeMovies, setUnLikeMovies, setWatchLaterMovies }) => {
  return (
    <li className="movie-list-item">
      <MovieImage posterPath={movie.poster_path} title={movie.title} />
      <div className="movie-list-texts">
        <MovieTitle title={movie.title} />
        <MovieActions
          movie={movie}
          setLikeMovies={setLikeMovies}
          setUnLikeMovies={setUnLikeMovies}
          setWatchLaterMovies={setWatchLaterMovies}
        />
      </div>
    </li>
  );
};

export default MovieItem;