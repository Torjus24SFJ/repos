const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(`random numer: ${randomNumber}`);
let counter = 0;

document.getElementById("inputField").addEventListener("submit", function(event)
{
    event.preventDefault();

const guessNumber = parseInt(document.getElementById("number") .value, 10);

if (guessNumber === randomNumber)
    {
        window.location.href= "winner.html"
        // document.getElementById("result").textContent = "Your number is correct"
    }
    else if(guessNumber > randomNumber) {
        document.getElementById("result").textContent = "The correct number is lower"
    }
    else if(guessNumber < randomNumber) {
        document.getElementById("result").textContent = "The correct number is higher"
    }
    else 
    {
        document.getElementById("result").textContent = "This is not a number"
    }

    counter++;
    document.getElementById("counter").textContent = counter;
    console.log(`Number of guesses: ${counter}`);
});