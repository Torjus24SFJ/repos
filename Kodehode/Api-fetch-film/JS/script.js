async function getData() {
    const response = await fetch("https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
    const data = await response.json()
    console.log(data)

    main.innerHTML = (data.map((movie) => {
        return (
        `
        <div class="movie-card"> 
        <h1>${movie.title}</h1>
        <img src="${movie.movie_banner}" />

        </div>
        `
        )
    }).join(""))

};
getData();

