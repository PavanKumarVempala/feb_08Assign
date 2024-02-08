document.addEventListener("DOMContentLoaded", () => {
    const MovieList = document.getElementById("MovieList");

    function displayMovies() {
        fetch("http://localhost:5281/api/Movies").then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then(Movie => {
            MovieList.innerHTML = "";
            Movie.forEach(Movie => {
                const listItem = document.createElement("li");
                listItem.textContent = `Id: ${Movie.id}, Movie Name: ${Movie.mName}, Stat Cast: ${Movie.statCast},Director : ${Movie.director}, Producer : ${Movie.producer}, Release Date : ${Movie.releaseDate}`;
                MovieList.appendChild(listItem);
            });
        }).catch(error => {
            console.error("Fetch error: ", error);
            MovieList.innerHTML = "Error fetching tasks.";
        });
    }


    displayMovies();
});