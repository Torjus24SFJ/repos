
const content = document.getElementById("content")



//await makes sure the line is executed before running next line
//await must be within async
//fetching api link with data like title and images
async function getData() {
    const response = await fetch("https://ghibliapi.vercel.app/films")
    const data = await response.json()
    console.log(data)

    content.innerHTML = (data.map((movie) => {
        return (
        `
        <div class="movie-card"> 
        <h2>${movie.title}</h2>
        <h5>${movie.original_title}</h5>
        <img src="${movie.image}" />

        </div>
        `
        )
    }).join(""))

};
getData();