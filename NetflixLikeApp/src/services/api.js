const API_Key = "8d64e87d498c4d3c330e6a490ea761c8";
const API_Url = "https://api.themoviedb.org/3";

export const getPopularMovies = async() => {
    const response = await fetch(`${API_Url}/movie/popular?api_key=${API_Key}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async(query) => {
    const response = await fetch(`${API_Url}/search/movie?api_key=${API_Key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}