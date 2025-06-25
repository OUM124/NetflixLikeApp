import MovieCard from "../Components/movieCard"
import { useState } from "react";
import '../Css/home.css';
function Home(){
    const [searchTerm, setSearchTerm] = useState("");
    const movies = [
            { id: 1, title: "Inception", genre: "Sci-Fi" ,release_date: "2010-07-16"},
            { id: 2, title: "The Dark Knight", genre: "Action" ,release_date: "2010-07-16"},
            { id: 3, title: "Interstellar", genre: "Sci-Fi" ,release_date: "2010-07-16"},
            { id: 4, title: "Pulp Fiction", genre: "Crime",release_date: "2010-07-16"},
        ];
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
