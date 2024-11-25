
function randomImg(){
    document.getElementById("random-img").addEventListener('click', function(event){
        event.preventDefault();
        
        const pictureArr = [
            "./images/airbnb-cat.PNG",
            "./images/foreignreleations-cat.PNG",
            "./images/pestcontrol-cat.PNG",
            "./images/primeminister-cat.PNG",
            "./images/security-cat.PNG",
            "./images/shopsupervisor-cat.PNG",
            "./images/spy-cat.PNG",
        ];

        const mappedArr = pictureArr.map(img => img);
        const randomIndex = Math.floor(Math.random() * mappedArr.length);
        const randomImg = mappedArr[randomIndex];
        window.location.href = `random.html?image=${encodeURIComponent(randomImg)}`;
    });
}
