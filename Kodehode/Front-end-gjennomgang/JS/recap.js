// // Variables

// // let: variable that can be changed later

// let ord1 = "hello";

// // const: variable that cannot be changed later

// const ord2 = "World!";

// // concatination:
// console.log(ord1 + " " + ord2 + ", med noe tekst i tillegg");
// // template literals:
// console.log(`${ord1} ${ord2}, med noe tekst i tillegg`);

// // setting two variables to a new variable:
// let setning = `${ord1} ${ord2}`;
// let slutten = ", med noe tekst i tillegg";

// console.log(setning + slutten);

// let num1 = 1;
// const num2 = 2;

// console.log("num1 er:", 1);
// console.log("summen er:", num1 + num2);

// // Array: Bruk alltid const!
// const array = ["banan", "appelsin", "mango"];

// console.log(array);
// console.log(array[2]);

// // Array methods

// array.push("eple");
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift("eple");
// console.log(array);

// // lage .pop metoden selv:
// function getLastArrayElement(arr) {
//   return arr[arr.length - 1];
// // return arr.pop()
// }

// console.log(getLastArrayElement(array));

// // Object: Bruk alltid const her også!

// const object = {
//     fName: "Joakim",
//     lName: "Villo",
// }

// console.log(object)
// console.log(object.fName)

// dobbel operators

let newNum = 5;
console.log(newNum);
// legge til 1
newNum++;
console.log(newNum);
// trekke fra 1
newNum--;
console.log(newNum);
// gange med seg selv
newNum *= newNum;
console.log(newNum);
newNum /= newNum;
console.log(newNum);

// conditionals (else if)

const numCheck = (conNum) => {
  if (typeof conNum === "Number") {
    if (conNum === 10) {
      console.log(conNum, "er 10");
    } else if (conNum < 10) {
      console.log(conNum, "er mindre enn 10");
    } else if (conNum > 10) {
      console.log(conNum, "er større enn 10");
    } else {
      console.log(conNum, "er ikke et tall! Skriv inn et tall i stedet");
    }
  }
};

numCheck({});
numCheck(567);
numCheck(-5);

const betterNumCheck = (conNum) => {
  let result;
  if (conNum === 10) {
    return (result = `er 10`);
  } else if (conNum < 10) {
    return (result = " er mindre enn 10");
  } else if (conNum > 10) {
    return (result = "er større enn 10");
  } else {
    return (result = "er ikke et tall! Skriv inn et tall istedet");
  }
};

betterNumCheck({});

if (betterNumCheck() === "er ikke et tall! Skriv inn et tall istedet") {
  console.log("failure!");
}

function oddOrEven(num) {
  let result;
  if (num % 2 === 0) {
    result = "even";
  } else if (num % 2 !== 0) {
    result = "odd";
  }
  return result;
}

console.log(oddOrEven(5));
console.log(oddOrEven(6));
