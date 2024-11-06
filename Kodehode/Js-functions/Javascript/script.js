const name = "bob";

console.log(name);

function name1() {
  return console.log("marley");
}

let result = "yay";
console.log(result);

let numOne = 1;
let numTwo = 2;

function addNumsToString() {
  return result + numOne + numTwo;
}

console.log(addNumsToString());

function addTwoNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(addTwoNumbers(10, 4));
console.log(addTwoNumbers(90, 1));
console.log(addTwoNumbers(5454, 432));

function subtractTwoNumbers(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

console.log(subtractTwoNumbers(10, 5));

function greeting(navn) {
  console.log("Hello" + " " + navn);
  console.log(`Hallo ${navn}. Have a nice day!`);
}

// greeting("Torjus");

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * max) + min;
}

console.log(getRandomNumber(10, 5));
console.log("Random number:" + " " + getRandomNumber(100000, 50000));
console.log(
  `Random number: ${getRandomNumber(100000, 50000)} Wow, that is very random`
);

function giveCompliments() {
  const compliments = [
    "Veldig bra",
    "Det var lompent gjort",
    "Du er fantastisk",
  ];

  const randomIndex = Math.round(Math.random() * compliments.length - 1);
  //   const result = compliments[randomIndex]

  return compliments[randomIndex];
}

console.log(giveCompliments());

function syntax() {

}

const arrowSyntax = () => {

}