export function getMoviesFromLocalStorage() {
    return JSON.parse(localStorage.getItem("Favorite movies"));
}

export function removeFromLocalStorage(id) {
    const movies = getMoviesFromLocalStorage() || [];
    const findMovie = movies.find(movie => movie.id == id)
    const newMovies = movies.filter(movie => movie.id != findMovie.id)
    localStorage.setItem('Favorite movies', JSON.stringify(newMovies))
}