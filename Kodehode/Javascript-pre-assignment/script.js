//Oppgave 1
// function start(){
//     return
// }

//Oppgave 2
// function checkNumber(n) {
//     if(n % 2 === 0)
//         return "is even"
//     else {
//         return "is odd"
//     }
// }

// let userInput = prompt("Enter a number:")
// let n = parseInt(userInput, 10);
// console.log(n + " " + checkNumber(n))

// function makeMeLoud(string) {
//     const result = string.toUpperCase()+"!"
//     return result
// }

//Oppgave 3
// const greeter = (fName, hour) => {
//   if (hour < 0) {
//     return "Invalid time";
//   } else if (hour >= 0 && hour <= 5) {
//     return "Good night" + " " + fName
//   }
//   else if (hour >= 6 && hour <= 11){
//     return "Good morning" + " " + fName
//   }
//   else if (hour >= 12 && hour <= 17){
//     return "Good day" + " " + fName
//   }
//   else if (hour >= 18 && hour <= 23){
//     return "Good evening" + " " + fName
//   }
//   else (hour > 23) {
//     return "Invalid time"
//   }
// };

//Oppgave 4
// function arrayTrimmer(arr) {
//     arr.shift() //removes first index in array
//     arr.pop() //removes last index in array
//     return arr //returns shorten array
// };

//Oppgave 5
// const CleanAndFun = (String) => {
//     return String.trim().replace("hard", "fun")
// };

//Oppgave 5
// const heroArray = ["Spider-Man", "Thor", "Hulk", "Doctor Strange", "Iron Man", "Black Widow"]

// function marvelEditor(arr) {
//     arr.shift() //removing the first array index
//     arr[2] = "Skrull" //replace doctor strange with Skrull
//     arr.splice(0,2, "Captain America")
//     const result = arr.join()
//     return result;
// };
// console.log(marvelEditor(heroArray))


//Extra Oppgave 6
// function coolMaker(input) {
//     if(typeof input === "string"){
//         return "😎" + String + "😎"
//     }
//     else if(typeof input === "number") {
//         return "😎" + (input*2).toString() + "😎"
//     }
//     else if(typeof input === "boolean") {
//         input ? "😎Yeah😎" : "😎Chill😎"
//     }
//     else {
//         return "😎Primitive values only😎"
//     }
// };
// console.log(coolMaker(undefined))

