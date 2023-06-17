import { API_KEY } from "../main.js";
import { main } from "../main.js";
import { searchInput } from "../main.js";
import { renderMovies } from "./renderMovies.js";

export async function searchMovie() {
    main.innerHTML = "";

    const search = searchInput.value;

    try {
        const connection = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-BR&page=1&api_key=${API_KEY}`);
        const searchedMovies = await connection.json();
    
        searchedMovies.results.forEach(movie => renderMovies(movie));
    } catch (error) {
        console.log(error);
    }
}