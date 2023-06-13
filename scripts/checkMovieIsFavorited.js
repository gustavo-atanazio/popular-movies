import { getMoviesFromLocalStorage } from "./handleLocalStorage.js";

export function checkMovieIsFavorited(id) {
    const movies = getMoviesFromLocalStorage() || [];
    return movies.find(movie => movie.id == id);
}