import '../Css/movieCard.css';
function MovieCard({movie}){
    function OnFavoriteClick()
    {
        alert("clicked ")
    }
    return (
        <div className = "movie-card">
            <div className="Card-image">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={OnFavoriteClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <h4>{movie.release_date}</h4>
            </div>
        </div>

    )
}

export default MovieCard;