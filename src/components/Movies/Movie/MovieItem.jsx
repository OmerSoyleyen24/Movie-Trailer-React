  import { Link } from "react-router-dom"

  const MoviesItem = ({ movie, setLikeMovies, setUnLikeMovies, setWatchLaterMovies }) => {
    const updateData = (newData, id = null,setTypes) => {
      if(setTypes === "setLikeMovies" && movie.id){
          setLikeMovies(prevData => prevData.filter(item => item.id !== id).concat(newData));
      }
      else if(setTypes === "setUnLikeMovies" && movie.id){
        setUnLikeMovies(prevData => prevData.filter(item => item.id !== id).concat(newData));
      }
      else if(setTypes === "setWatchLaterMovies" && movie.id){
        setWatchLaterMovies(prevData => prevData.filter(item => item.id !== id).concat(newData));
      }
    };
    return (
      <li key={movie.id} className="movie-list-item">
        <div className="movie-list-image">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-list-texts">
          <h2>{movie.title}</h2>
          <ul className="movie-list-button">
            <Link to={`/movieDesc/:${movie.id}`}>
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
        </div>
      </li>
    )
  }

  export default MoviesItem