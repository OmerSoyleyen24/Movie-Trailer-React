import React from 'react';
import { Link } from 'react-router-dom';

const MovieActions = ({ movie, updateData }) => (
  <ul className="movie-list-button">
    <Link to={`/movieDesc/${movie.id}`}>
      <button>
        <i className="bi bi-play-circle-fill"></i>
      </button>
    </Link>
    <li>
      <button onClick={() => updateData(movie, movie.id, "setLikeMovies")}>
        <i className="bi bi-hand-thumbs-up-fill"></i>
      </button>
    </li>
    <li>
      <button onClick={() => updateData(movie, movie.id, "setUnLikeMovies")}>
        <i className="bi bi-hand-thumbs-down-fill"></i>
      </button>
    </li>
    <li>
      <button onClick={() => updateData(movie, movie.id, "setWatchLaterMovies")}>
        <i className="bi bi-plus-circle-fill"></i>
      </button>
    </li>
  </ul>
);

export default MovieActions;
