let x= alert ("Welcome to the JavaScript Syntax Guide!");
console.log(x); // This will log undefined because alert does not return a value


let myBoolean = confirm("Hi there! This is Lainitha. Would you like to continue?");
console.log(myBoolean); // This will log true if the user clicked "OK", false if "Cancel"

// see the difference between alert and confirm

let myBoolean2 =confirm("ok===True\ncancel===False");
console.log(myBoolean2); // This will log true if the user clicked "OK", false

// custom prompt
let myName = prompt("Please enter your name:");
console.log(myName);
if (myName){
    alert("hello " +myName+" Welcome to my JavaScript Jorney!");
}
else{
    alert("Hello! Welcome to my JavaScript Journey!");
    }

console.log(myName ?? "No name provided"); // This will log the name if provided, otherwise "No name provided"//nullish coalescing operator

console.log(typeof(myName));

