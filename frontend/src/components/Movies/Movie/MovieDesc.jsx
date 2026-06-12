import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./MovieDesc.css";

const MovieDesc = ({darkLight}) => {
    const [movie, setMovie] = useState({});
    const [videoKey, setVideoKey] = useState("");
    const params = useParams();
    const movieId = Number(params.movieId);

    useEffect(() => {
        getMovies(movieId);
    }, [movieId]);
    
    const getMovies = async (movieId) => {
        try {
            const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=22115f0fff1e31a221cf90785636db90&language=en-US`);
            const movieData = await movieResponse.json();
            setMovie(movieData);
            
            const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=22115f0fff1e31a221cf90785636db90&language=en-US`);
            const videosData = await videosResponse.json();
            const video = videosData.results.find((item) => item.type === "Trailer" && item.site === "YouTube");
            
            if (video) {
                setVideoKey(video.key);
            } else {
                console.error("No trailer found for the movie");
            }
        } catch (error) {
            console.error("Error fetching movie details or videos:", error);
        }
    };

    return (
        <section id="single-film" className={`${darkLight ? "background-light" :"background-dark"}`}>
            <div className="container">
                <div className="single-film-wrapper">
                    <ul id="single-film-information">
                        <li className="single-film-information-item">
                            <ul>
                                <li className="single-film-video" id={movieId}>
                                    {videoKey && <YouTube videoId={videoKey} />}
                                </li>
                            </ul>
                        </li>
                        <li className="single-film-information-item">
                            <ul className="single-film-desc">
                                <li className="title">{movie.title}</li>
                                <li className="overview">{movie.overview}</li>
                                <li>
                                    <ul className="popularityReleaseDate">
                                        <li className="popularity">{movie.popularity}</li>
                                        <li className="releaseDate">{movie.release_date}</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MovieDesc;