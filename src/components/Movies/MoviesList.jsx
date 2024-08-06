import React from 'react';
import MovieImage from './Movie/MovieImage';
import MovieTitle from "./Movie/MovieTitle"
import MovieActions from './Movie/MovieActions';

const MoviesItem = ({ movie, setLikeMovies, setUnLikeMovies, setWatchLaterMovies }) => {
  const updateData = (newData, id = null, setTypes) => {
    if (setTypes === "setLikeMovies" && movie.id) {
      setLikeMovies(prevData => prevData.filter(item => item.id !== id).concat(newData));
    } else if (setTypes === "setUnLikeMovies" && movie.id) {
      setUnLikeMovies(prevData => prevData.filter(item => item.id !== id).concat(newData));
    } else if (setTypes === "setWatchLaterMovies" && movie.id) {
      setWatchLaterMovies(prevData => prevData.filter(item => item.id !== id).concat(newData));
    }
  };

  return (
    <li key={movie.id} className="movie-list-item">
      <MovieImage posterPath={movie.poster_path} title={movie.title} />
      <div className="movie-list-texts">
        <MovieTitle title={movie.title} />
        <MovieActions movie={movie} updateData={updateData} />
      </div>
    </li>
  );
};

export default MoviesItem;
