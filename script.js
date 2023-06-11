import {key} from "/key.js";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const main = document.querySelector("main");
const searchInput = document.getElementById("search");

async function getMovies() {
    const connection = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&language=pt-BR&api_key=${key}`);
    const movies = await connection.json();

    movies.results.forEach(movie => renderMovies(movie));
}

getMovies();

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
        return
    }
});

function favMovie(event, movie) {
    console.log(event);
    console.log(movie);
}

function renderMovies(movie) {
    const { id, title, poster_path, vote_average, release_date, overview } = movie;

    const year = new Date(release_date).getFullYear();
    const rating = Number(vote_average).toFixed(1);

    const main = document.querySelector("main");
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    main.appendChild(movieContainer);

    const movieBanner = document.createElement("img");
    movieBanner.src = IMG_URL+poster_path;
    movieContainer.appendChild(movieBanner);

    const midContainer = document.createElement("div");
    midContainer.classList.add("mid-container");
    movieContainer.appendChild(midContainer);

    const movieInfo = document.createElement("div");
    midContainer.appendChild(movieInfo);

    const movieTitle = document.createElement("h2");
    movieTitle.textContent = title;
    movieInfo.appendChild(movieTitle);

    const movieYear = document.createElement("span");
    movieYear.textContent = year;
    movieInfo.appendChild(movieYear);

    const iconsDiv = document.createElement("div");
    midContainer.appendChild(iconsDiv);

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons-container");
    iconsDiv.appendChild(iconsContainer);

    const star = document.createElement("span");
    star.classList.add("material-symbols-outlined", "star", "active");
    star.textContent = "star";
    iconsContainer.appendChild(star);

    const movieRate = document.createElement("span");
    movieRate.textContent = rating;
    iconsContainer.appendChild(movieRate);

    const iconsContainer2 = document.createElement("div");
    iconsContainer2.classList.add("icons-container");
    iconsDiv.appendChild(iconsContainer2);

    const favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorite-btn");
    favoriteButton.addEventListener("click", event => favMovie(event, movie));
    iconsContainer2.appendChild(favoriteButton);

    const heart = document.createElement("span");
    heart.classList.add("material-symbols-outlined");
    heart.textContent = "favorite";
    favoriteButton.appendChild(heart);

    const favorite = document.createElement("span");
    favorite.textContent = "Favoritar";
    iconsContainer2.appendChild(favorite);

    const descContainer = document.createElement("div");
    descContainer.classList.add("desc-container");
    movieContainer.appendChild(descContainer);

    const movieDesc = document.createElement("p");
    movieDesc.textContent = overview;
    descContainer.appendChild(movieDesc);
}

/* function renderMovies(movie) {
    const { id, title, poster_path, vote_average, release_date, overview } = movie;

    const year = new Date(release_date).getFullYear();
    const rating = Number(vote_average).toFixed(1);

    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    main.appendChild(movieContainer);

    movieContainer.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="Movie banner">

        <div class="mid-container">
            <div>
                <h2>${title}</h2>
                <span>${year}</span>
            </div>

            <div>
                <div class="icons-container">
                    <span class="material-symbols-outlined active star">star</span>
                    <span>${rating}</span>
                </div>

                <div class="icons-container">
                    <button class="favorite-btn" id="fav-btn">
                        <span class="material-symbols-outlined" id="fav-icon">favorite</span>
                    </button>
                    <span>Favoritar</span>
                </div>
            </div>
        </div>

        <div class="desc-container">
            <p>${overview}</p>
        </div>
    `
} */