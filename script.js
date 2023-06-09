import {key} from "/key.js";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const main = document.querySelector("main");
const searchInput = document.getElementById("search");

async function getMovies() {
    const connection = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=pt-BR&api_key=${key}`);
    const movies = await connection.json();
    console.log(movies);

    movies.results.forEach(movie => renderMovies(movie));
}

getMovies();

function renderMovies({ title, poster_path, vote_average, overview, release_date }) {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    main.appendChild(movieContainer);

    movieContainer.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="Movie banner">

        <div class="mid-container">
            <div>
                <h2>${title}</h2>
                <span>${release_date}</span>
            </div>

            <div>
                <div class="icons-container">
                    <span class="material-symbols-outlined">star</span>
                    <span>${vote_average}</span>
                </div>

                <div class="icons-container">
                    <button class="favorite-btn">
                        <span class="material-symbols-outlined">favorite</span>
                    </button>
                    <span>Favoritar</span>
                </div>
            </div>
        </div>

        <div class="desc-container">
            <p>${overview}</p>
        </div>
    `
}

async function searchMovie() {
    main.innerHTML = "";

    const search = searchInput.value;

    const connection = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-BR&page=1&api_key=${key}`);
    const searchedMovies = await connection.json();
    console.log(searchedMovies);

    searchedMovies.results.forEach(movie => renderMovies(movie));
}

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchMovie();
    }
});