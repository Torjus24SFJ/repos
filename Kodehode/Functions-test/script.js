function changetext() {
  document.getElementById("change").innerHTML = "Hello World!";
}

const car = {
  model: "Model 3",
  manufacturer: "Tesla",
  type: "Electric",
};

function cars() {
  document.getElementById("automobiles").innerHTML =
    "This car type is: " +
    car.model +
    "<br>" +
    "It is manufactured by: " +
    car.manufacturer +
    "<br>" +
    "It is: " +
    car.type;
}

// const fruits = [
//     "Apple", 
//     "Strawberry", 
//     "Grape", 
//     "Watermelon"
// ];

// function fruitsArray() {
//     document.getElementById("fruit").innerHTML = 
// }



