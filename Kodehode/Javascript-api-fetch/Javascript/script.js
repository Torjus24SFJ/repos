//Ghibli Api Fetch

// const content = document.getElementById("content")

//await makes sure the line is executed before running next line
//await must be within async
//fetching api link with data like title and images

//async function getData() {
//     const response = await fetch("https://ghibliapi.vercel.app/films")
//     const data = await response.json()
//     console.log(data)

//     content.innerHTML = (data.map((movie) => {
//         return (
//         `
//         <div class="movie-card"> 
//         <h2>${movie.title}</h2>
//         <h5>${movie.original_title}</h5>
//         <img src="${movie.image}" />
//         <h5 id="year">${movie.release_date}</h5>

//         </div>
//         `
//         )
//     }).join(""))

// };
// getData();


//Pokemon Api Fetch

const content = document.getElementById("content")

async function getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=386")
    const data = await response.json()
//     // console.log(data)


    const pokemonUrls = data.results.map((pokemon) => pokemon.url)
    const pokemonPromises = pokemonUrls.map((url) => fetch(url).then((response) => response.json()))
    const pokeDetails = await Promise.all(pokemonPromises);
    console.log(pokeDetails)

    content.innerHTML = (pokeDetails.map((pokemon) => {
        // const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        // change tag to ${captitaliedName}
        return (
        `
        <div class="pokemon-card"> 
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}"/>
        </div>
        `
    )
}).join(""))

};
getData();

