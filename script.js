/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
let correctGuess;
let guessedNum;
let guesses = new Array;

window.onload = function() {
    initGame();
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

/**
 * Functionality for playing the whole game
 */

function playGame(){
  // *CODE GOES BELOW HERE *
  guessedNum = document.getElementById('number-guess').value;
  displayResult(guessedNum);
  guesses.push(guessedNum);
  // saveGuessHistory(guessedNum);
  displayHistory();
  
  
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *



/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  correctGuess = getRandomNumber();
  guesses=[];
  displayHistory();
  // resetResultContent();
  document.getElementById("result").innerHTML = "";
  

}

/**
 * Reset the HTML content for guess history
 */
// function resetResultContent(){

//   document.getElementById("result").innerHTML = "";
// }

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */

function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  let randNumber = Math.random()*100;
  let targetNumber = Math.floor(randNumber)+1;
  return targetNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
// function saveGuessHistory(guess) {
  
// }

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index; // TODO
  index = guesses.length;
  let list = "<ul class='list-group'>";
  while(index>0){
    index--;
    list+= "<li class='list-group-item' >You Guessed "  + guesses[index] + '</li>';
    
  }
  list+= '</ul>';
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!";
  dialog = getDialog('won',text);

  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!";
  dialog = getDialog('warning',text);
  
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!";
  dialog = getDialog('warning',text);
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *

  document.getElementById("result").innerHTML = dialog;
}

function displayResult(guess){
  if (guess>correctGuess)
    showNumberAbove();
  else if (guess< correctGuess)
    showNumberBelow();
  else if (guess==correctGuess)
    showYouWon();
}
