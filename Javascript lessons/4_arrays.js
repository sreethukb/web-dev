//INTRODUCTION TO ARRAYS
var guestList = ["Sreethu", "Taneesha", "Smriti", "Sakshi"];
//console.log(guestList.includes("Shivani"));

var name = prompt("Hello! What's your name?");
if (guestList.includes(name)) {
    alert("Welcome! Nice to have you");
}
else{
    alert("!!! YOU WERE NOT INVITED !!!");
}

//FizzBuzz
var output = [];
var count = 1;
function fizzBuzz() {
    if((count%3 == 0) && (count%5 == 0)) {
        output.push("FizzBuzz");
    }
    else if(count%5 == 0){
        output.push("Buzz");
    }
    else if(count%3 == 0) {
        output.push("Fizz");
    }
    else{
        output.push(count);
    }
    console.log(output);
    count++;
}
