var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	alert("rock");
} else if(computerChoice <= 0.67) {
	alert("paper");
} else {
	alert("scissors");
};

function compare(choice1, choice2) {
    if (choice1 == choice2) {
        alert("The result is a tie!");
    }

    if (choice1 == "rock") {
        if (choice2 == "scissors") {
        alert("rock wins");
        }
        else if (choice2 == "paper") {
        alert("paper wins");
        }
    }
    
    compare(userChoice, computerChoice);
    
    if (choice1 == "paper") {
        if (choice2 == "rock") {
        alert("paper wins");
        }
        else if (choice2 == "scissors") {
        alert("scissors wins");
        }
    }
    
    if (choice1 == "scissors") {
        if (choice2 == "paper") {
        alert("scissors wins");
        }
        else if (choice2 == "rock") {
        alert("rock wins");
        }
    }
};