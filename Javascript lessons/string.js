//string concatenation
var yourName = prompt("Hi, what's your name?");
alert("Hello, "+yourName+". Good to see you!");
//length of string
alert(yourName.length);
//character count for X (twitter)
alert("Hi! Welcome to X-counter.");
var limit = 280;
var text = prompt("Enter text to see character count:");
alert("This text contains "+text.length+" characters. You have "+(limit-text.length)+" characters left.");

//string slicing
alert("Hi! Welcome to X-counter.");
var limit = 280;
var text = prompt("Enter text to see character count:");
alert("This text contains "+text.length+" characters. You have "+(limit-text.length)+" characters left.");
alert("Allowed text is: "+text.slice(0, limit));

//toUpperCase() -> capitalize all characters in string toLowerCase() -> all letters turned to lower case
var name = prompt("Enter your name:");
var firstLetter = name.slice(0,1);
alert("Hello, "+firstLetter.toUpperCase()+name.slice(1,name.length)+"!");
