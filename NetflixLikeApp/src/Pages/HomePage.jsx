import MovieCard from "../Components/movieCard"
import { useState ,useEffect} from "react";
import { searchMovies,getPopularMovies     }    from "../services/api";
import '../Css/home.css';
function Home(){
    const [searchTerm, setSearchTerm] = useState("");
   const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (error) {
                console.error("Failed to fetch popular movies:", error);
            }
            
    }
    loadMovies();    
} ,[]);

   const HandleSubmit = (e) => {
    alert("Search submitted: " + searchTerm);
    e.preventDefault();

   };
    return (
        <div className="home">
            <form onSubmit={HandleSubmit} className="search-form">
            <input type="text" placeholder="Search for movies... " className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button type="Submit" className="search-button" >Submit</button>
        </form>
            <div className="movie-Grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchTerm.toLowerCase()) && (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
            
    );
}
export default Home;
