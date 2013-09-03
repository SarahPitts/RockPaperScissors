/*Variable for counter*/
var score = { win:0, lose:0, tie:0 };
var msg = ['You Win!',"It's a Tie!",'You Lose!'];
 
function PlayGame(p_wep) {
    
/*Random Generator*/
  var randomNum= Math.ceil((Math.random() * 3));

/*Switch Statement*/
  var computerChoice;
  switch(randomNum) {
    case 1: computerChoice = "Rock";   break;
    case 2: computerChoice = "Paper";  break;
    case 3: computerChoice = "Scissors"; break;
  }
  alert("You chose "+p_wep+"\n\nThe computer guessed " + computerChoice + "."); 

  switch (p_wep) {
     case 'Rock' :
       switch (computerChoice) {
           case "Rock" : score.tie++; msg=1; break;
           case "Paper" : score.lose++; msg=2; break;
           case "Scissors" : score.win++; msg=0; break;
       }
       break;
     case 'Paper' :
       switch (computerChoice) {
           case "Rock" : score.win++; msg=0; break;
           case "Paper" : score.tie++; msg=1; break;
           case "Scissors" : score.lose++; msg=2; break;
       }
       break;
     case 'Scissors' :
       switch (computerChoice) {
           case "Rock" : score.lose++; msg=2; break;
           case "Paper" : score.win++; msg=0; break;
           case "Scissors" : score.tie++; msg=1; break;
       }
       break;
     default: alert('Should never get this message'); break;
  }
  
// alternative version of game score
  var str = "You won " + score.win + " times!";
      str +="<p>You lost " + score.lose + " times!";
      str +="<p>You tied " + score.tie + " times";
  document.getElementById('GameScores').innerHTML = str;
}
/*
function Score() {  // version one of game score display is not currently used
  var str = "You won " + score.win + " times!\n\n";
      str +="You lost " + score.lose + " times!\n\n";
      str +="You tied " + score.tie + " times";
  alert(str);
}
*/