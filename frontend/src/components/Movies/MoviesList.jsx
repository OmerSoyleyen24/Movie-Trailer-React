import React from "react";
import MovieItem from "./Movie/MovieItem";

const MoviesList = ({ movies, moviesListType, likeMovies, unLikeMovies, watchLaterMovies, setLikeMovies, setUnLikeMovies, setWatchLaterMovies, activeCategory }) => {
  return (
    <React.Fragment>
      <h2>{moviesListType} Movies</h2>
      <ul id={`${moviesListType}-movies-list`} className="movies-list">
        {moviesListType === "popular" ?
          movies
            .filter((movie) => movie.genre_ids.includes(activeCategory))
            .map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                setLikeMovies={setLikeMovies}
                setUnLikeMovies={setUnLikeMovies}
                setWatchLaterMovies={setWatchLaterMovies}
              />
            )) : ""
        }
      </ul>
    </React.Fragment>
  );
};
export default MoviesList;