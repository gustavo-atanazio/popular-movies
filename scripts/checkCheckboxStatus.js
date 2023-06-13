import { main } from "../main.js";
import { checkbox } from "../main.js";
import { getMoviesFromLocalStorage } from "./handleLocalStorage.js";
import { renderMovies } from "./renderMovies.js";
import { getMovies } from "../main.js";

export function checkCheckboxStatus() {
    const isChecked = checkbox.checked;

    if (isChecked) {
        main.innerHTML = "";

        const movies = getMoviesFromLocalStorage() || [];
        movies.forEach(movie => renderMovies(movie));
    } else {
        main.innerHTML = "";
        getMovies();
    }
}