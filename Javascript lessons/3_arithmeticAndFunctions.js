//operator precedence
var dogAge = prompt("Enter dog age: ");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is "+humanAge+" years old in Human Age.");


//creating a function
function dance() {
  alert("shimmy");
  alert("handsUp");
  alert("shimmy");
  alert("turnAround");
}

//calling a function
dance();

function getMilk() {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

//BMI Calculator
function bmiCalculator(weight, height) {
  var result = weight / Math.pow(height, 2);
  return Math.round(result);
}
