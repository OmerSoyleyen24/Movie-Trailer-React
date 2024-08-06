import React from 'react';
import MoviesItem from './MoviesItem';

const MoviesList = ({ moviesListType, movies, setLikeMovies, setUnLikeMovies, setWatchLaterMovies, activeCategory }) => {
    const listId = `${moviesListType.toLowerCase()}-movies-list`;

    return (
        <React.Fragment>
            <h2 style={{ textTransform: "capitalize" }}>{moviesListType} Movies</h2>
            <br />
            <ul id={listId} className="movies-list">
                {movies
                    .filter(movie => movie.genre_ids.includes(activeCategory))
                    .map(movie => (
                        <MoviesItem 
                            key={movie.id} 
                            movie={movie} 
                            setLikeMovies={setLikeMovies} 
                            setUnLikeMovies={setUnLikeMovies} 
                            setWatchLaterMovies={setWatchLaterMovies} 
                        />
                    ))}
            </ul>
        </React.Fragment>
    );
};

export default MoviesList;
