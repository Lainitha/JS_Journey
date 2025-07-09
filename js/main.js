console.log("Hi!, This is Lainitha");
console.log(typeof 123);
console.log(typeof("Lainitha"));


//Strings Properties
myVariable="Mathematics";
console.log(myVariable);
console.log(myVariable.length);

// String Methods
console.log(myVariable.charAt(2)); //charater at (--index)

console.log(myVariable.indexOf("tic")); //index of the string or character)
console.log(myVariable.lastIndexOf("ic")); //last charater "" index , if not available, will output minus value.

console.log(myVariable.slice(7,17));//print the string from 7 to 15 index: "wont get the last index, only from 7 to 14,like loop"

console.log(myVariable.toUpperCase()); //convert to upper case
console.log(myVariable.toLowerCase()); //convert to lower case

console.log(myVariable.includes("HJI")); //Check if "---" is available in the variable: output boolen: true or false

console.log(myVariable.split("a")); //split the string with the given string:output: array ; not only two string, 
console.log("Earn, Grow, Give,Share".split(","));

const myName =" Lainitha"; //for variable wont change the value

//Numbers
const myNumber= 1234;
const myFloatNumber=1234.0;


console.log(myNumber);
console.log(myFloatNumber);
console.log(typeof(myNumber) , typeof(myFloatNumber));//Checking type of the variable
console.log(myNumber===myFloatNumber);

const X="10";

console.log(X + 3, "-string"); //output 10 in different colour
console.log(Number(X)+3);//convert string to number: output 10 in same colour
//console.log(Number(Y));
console.log(Number(true)+3)

//Number Methods


console.log(Number.isInteger(X)); //passing the variable
console.log(Number.parseFloat(43.00)); //convert to float
console.log(Number.parseFloat("43.99aa")); //convert to float: output 43.99
console.log(Number.parseInt("43.99aa")); //convert to int: output 43
console.log(Number.parseFloat("43.888aa").toFixed(2)); //convert to float and fix the decimal point: output 43.89)


console.log(myFloatNumber.toString()); //convert to string

//chainning methods
console.log(parseFloat(myFloatNumber).toFixed(1).toString());


//isNaN
//1.Number.isNaN(value) - checks if the value is NaN (Not a Number).
//2.isNaN(value) - checks if the value is NaN, but it also. gloabally NaN

console.log(Number.isNaN(myFloatNumber)); //checks if the value is NaN. Only can check a number. cant check a string. it always returns false.
console.log(Number.isNaN("r")); //checks if the value is NaN. It canT check a string . it returns  false.
console.log(isNaN("r")); //checks if the value is NaN. It can check a string. it returns true.
console.log(isNaN(myFloatNumber)); //checks if the value is NaN. It