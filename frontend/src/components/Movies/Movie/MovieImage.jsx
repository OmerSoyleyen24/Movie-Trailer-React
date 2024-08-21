import React from "react";

const MovieImage = ({ posterPath, title }) => (
  <div className="movie-list-image">
    <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
  </div>
);

export default MovieImage;
