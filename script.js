import {key} from "/key.js";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

async function getMovies() {
    const conexao = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`);
    const movies = await conexao.json();
    console.log(movies);

    movies.results.forEach(movie => renderMovies(movie));
}

getMovies();

function renderMovies({ title, poster_path, vote_average, overview, release_date }) {
    const main = document.querySelector("main");
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

// Alternative way

/* function renderMovie({ title, poster_path, vote_average, overview, release_date }) {
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
    movieYear.textContent = release_date;
    movieInfo.appendChild(movieYear);

    const iconsDiv = document.createElement("div");
    midContainer.appendChild(iconsDiv);

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons-container");
    iconsDiv.appendChild(iconsContainer);

    const star = document.createElement("span");
    star.classList.add("material-symbols-outlined");
    star.textContent = "star";
    iconsContainer.appendChild(star);

    const movieRate = document.createElement("span");
    movieRate.textContent = vote_average;
    iconsContainer.appendChild(movieRate);

    const iconsContainer2 = document.createElement("div");
    iconsContainer2.classList.add("icons-container");
    iconsDiv.appendChild(iconsContainer2);

    const favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorite-btn");
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
} */