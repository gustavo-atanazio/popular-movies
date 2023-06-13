import { getMoviesFromLocalStorage } from "./handleLocalStorage.js";
import { removeFromLocalStorage } from "./handleLocalStorage.js";

export function favMovie(event, movie) {
    const favoriteState = {
        favorited: 'active',
        notFavorited: 'material-symbols-outlined'
    }

    if (event.classList == favoriteState.notFavorited) {
        const movies = getMoviesFromLocalStorage() || [];
        event.classList.add("active");
    
        movies.push(movie);
    
        localStorage.setItem("Favorite movies", JSON.stringify(movies));
    } else {
        removeFromLocalStorage(movie.id);
        event.classList.remove("active");
    }
}