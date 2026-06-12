import React from "react";
import { Link } from "react-router-dom";

const MovieActions = ({movie,setLikeMovies,setUnLikeMovies,setWatchLaterMovies}) => (
  <ul className="movie-list-button">
    <li>
      <Link to={`/movieDesc/${movie.id}`}>
        <button>
          <i className="bi bi-play-circle-fill"></i>
        </button>
      </Link>
    </li>
    <li>
      <button onClick={() => setLikeMovies(movie)}>
        <i className="bi bi-hand-thumbs-up-fill"></i>
      </button>
    </li>
    <li>
      <button onClick={() => setUnLikeMovies(movie)}>
        <i className="bi bi-hand-thumbs-down-fill"></i>
      </button>
    </li>
    <li>
      <button onClick={() => setWatchLaterMovies(movie)}>
        <i className="bi bi-plus-circle-fill"></i>
      </button>
    </li>
  </ul>
);

export default MovieActions;