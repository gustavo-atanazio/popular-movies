import { main } from "../main.js";
import {checkMovieIsFavorited} from "./checkMovieIsFavorited.js";
import { favMovie } from "./favoriteMovie.js";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export function renderMovies(movie) {
    const { id, title, poster_path, vote_average, release_date, overview } = movie;

    const isFavorited = checkMovieIsFavorited(id);

    const year = new Date(release_date).getFullYear();
    const rating = Number(vote_average).toFixed(1);

    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    main.appendChild(movieContainer);

    const movieBanner = document.createElement("img");
    movieBanner.src = IMG_URL+poster_path;
    movieBanner.alt = title + " banner";
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
    favoriteButton.addEventListener("click", event => favMovie(event.target, movie));
    iconsContainer2.appendChild(favoriteButton);

    const heart = document.createElement("span");
    heart.classList.add("material-symbols-outlined");
    isFavorited ? heart.classList.add("active") : "";
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