import { key } from "./key.js";
import { renderMovies } from "./scripts/renderMovies.js";
import { searchMovie } from "./scripts/searchMovie.js";
import { checkCheckboxStatus } from "./scripts/checkCheckboxStatus.js";

export const main = document.querySelector("main");
export const searchInput = document.getElementById("search");
export const checkbox = document.getElementById("checkbox");
export const API_KEY = key;

export async function getMovies() {
    try {
        const connection = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&language=pt-BR&api_key=${API_KEY}`);
        const movies = await connection.json();

        movies.results.forEach(movie => renderMovies(movie));
    } catch (error) {
        console.log(error);
    }
}

getMovies();

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchMovie();
        return
    }
});

checkbox.addEventListener("click", checkCheckboxStatus);