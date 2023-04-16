(async function () {
    const response = await fetch("./data.json");
    const movies = await response.json();

    const inputElem = document.getElementById("genre");
    const lanElem = document.getElementById("language");
    const yearElem = document.getElementById("year");
    const certElem = document.getElementById("certification");
    const btnElem = document.getElementById("search-btn");

    function search() {
        const genre = inputElem.value;
        const language = lanElem.value;
        const year = yearElem.value;
        const certification = certElem.value;

        let results = movies.filter(function (movie) {
            return (
                (genre === "" || movie.genres.includes(genre)) &&
                (language === "" || movie.language === language) &&
                (year === "" || movie.year === year) &&
                (certification === "" || movie.certification === certification)
            );
        });

        displayResults(results);
    }

    function displayResults(results) {
        const container = document.getElementById("movieDetailsContainer");
        container.innerHTML = "";

        if (results.length === 0) {
            container.innerHTML = "<p>No results found</p>";
        } else {
            results.forEach(function (movie) {
                const div = document.createElement("div");
                div.classList.add("movie");
                div.innerHTML = `
            <h3>${movie.title}</h3>
            <p><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
            <p><strong>Language:</strong> ${movie.language}</p>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Certification:</strong> ${movie.certification}</p>
          `;
                container.appendChild(div);
            });
        }
    }

    btnElem.addEventListener("click", search);
})();
let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let genre = document.getElementById("genre").value;
    let language = document.getElementById("language").value;
    let year = document.getElementById("year").value;
    let certification = document.querySelector(".certification").value;

    let results = movies.filter(function (movie) {
        return (
            (genre === "" || movie.genres.includes(genre)) &&
            (language === "" || movie.languages.includes(language)) &&
            (year === "" || movie.year == year) &&
            (certification === "" || movie.certification === certification)
        );
    });

    let movieDetailsContainer = document.getElementById("movieDetailsContainer");
    movieDetailsContainer.innerHTML = "";

    if (results.length === 0) {
        movieDetailsContainer.innerHTML = "No results found";
    } else {
        results.forEach(function (movie) {
            let movieDetails = document.createElement("div");
            movieDetails.classList.add("movie-details");

            let title = document.createElement("h3");
            title.innerHTML = movie.title;

            let releaseYear = document.createElement("p");
            releaseYear.innerHTML = `Release Year: ${movie.year}`;

            let genres = document.createElement("p");
            genres.innerHTML = `Genres: ${movie.genres.join(", ")}`;

            let languages = document.createElement("p");
            languages.innerHTML = `Languages: ${movie.languages.join(", ")}`;

            let certification = document.createElement("p");
            certification.innerHTML = `Certification: ${movie.certification}`;

            movieDetails.appendChild(title);
            movieDetails.appendChild(releaseYear);
            movieDetails.appendChild(genres);
            movieDetails.appendChild(languages);
            movieDetails.appendChild(certification);

            movieDetailsContainer.appendChild(movieDetails);
        });
    }
});


