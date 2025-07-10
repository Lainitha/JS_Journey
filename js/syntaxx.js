//IF statement

let viewerRequest ="stay consistent";
let reply;

if (viewerRequest) {
    reply ="Try my Best";
    reply2= `Sure ${viewerRequest}, I will try my best!`;

}

else if (viewerRequest === "hi") {
    reply="hi";

}

else {
    reply2 = "I will try my best";
}

console.log(reply);
console.log(reply2);




let testScore=50;
let grade;
let collegeStudent = true;

if (testScore>=90){
    grade="A";

}

else if (testScore>80){
    grade="A-";

}

else if (testScore>70){
    grade="B";

}

else if (testScore>60){
    grade="C";

}

else if (testScore>50){
    grade="D";

}

else {  
    if (collegeStudent) {
        grade="ReApply";
    }else{
    grade="F";
    }
}

console.log(grade);


//Switch Statement- not in use 


switch (Math.floor(Math.random()*4)){
    case 1: 
        console.log("You got a 1");
        break;
    case 2:
        console.log("You got a 2");
        break;  
    default:
        console.log("You got a 3 or 0");
        break;
}


///play
let player= "rock";
let computer="scissors";

switch (player){
    case computer:
        console.log("It's a tie!");
        break;
    case "rock":
        if (computer === "scissors") {
            console.log("Rock beats Scissors!Player wins");

        }
        else{
            console.log("Paper beats Rock!Computer wins");
        }
        break;// wont check next case

    default:
        console.log("No Tie!");
        break;
}


//Ternary Operator
//Conditional operator the onky operator that takes three operands
// what is operand?
// An operand is a value on which an operator performs an operation.
//sytax of ternary operator
// condition ? expressionIfTrue : expressionIfFalse

let subcriber="No";
let response = subcriber === "Subcribed"? "Thanks for Subcribing!" : "Please do Subcribe";
console.log(response);

//grade printing using ternary operator
let testScore2 =30;
let grade2= testScore2 >= 90? "A": testScore2>=80? "B": testScore2>=60?"C": testScore2>=50?"D":"F";
console.log(grade2); //chaining of ternary operators


//Rock Paper Scissors Game using Ternary Operator
let myTurn="rock";
let computerTurn="paper";
let result= myTurn===computerTurn? "Tie!": myTurn==="rock" && computerTurn==="paper"? "computer wins!": myRurn==="rock" && computerTurn==="scissors"?"I win!": myTurn==="paper"&&computerTurn==="rock"?"I win!": myTurn==="paper"&&computerTurn==="scissors"?"computer wins!": myTurn==="scissors"&&computerTurn==="rock"?"computer wins!": myTurn==="scissors"&&computerTurn==="paper"?"I win!":"Invalid input";
console.log(result);
// can use only computer wins and last print is default is i win

