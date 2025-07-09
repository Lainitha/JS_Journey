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


//Switch Statement


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