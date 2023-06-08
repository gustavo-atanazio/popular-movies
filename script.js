const movieContainer = document.querySelector(".movie-container");

const movie = {
    src: "image 3.svg",
    title: "The Batman",
    year: "2022",
    rate: "9.4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

function renderMovie({ src, title, year, rate, description }) {
    const movieBanner = document.createElement("img");
    movieBanner.src = src;
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
    star.classList.add("material-symbols-outlined");
    star.textContent = "star";
    iconsContainer.appendChild(star);

    const movieRate = document.createElement("span");
    movieRate.textContent = rate;
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
    movieDesc.textContent = description;
    descContainer.appendChild(movieDesc);
}

renderMovie(movie);