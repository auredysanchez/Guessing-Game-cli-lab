const rls = require("readline-sync");

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 *
 * @returns {undefined}
 */
const startGame = () => {
  if(rls.keyInYN("Do you want to play? Y or N")) {
    gameLoop()
  } else {
    quitGame()
  }
}

const gameLoop = () =>{
console.log("Let's start!")
console.log("I have a random number in mind")
console.log("It's between 1 and 1000")
console.log("You have 10 guesses total")


let randNum = generateRandomNumber ()
console.log(randNum)

  

for(let guessCount = 10; guessCount > 0; guessCount -= 1) {
  let inputGuess = rls.questionInt()
  // console.log(inputGuess)
  if (inputGuess === randNum) {
    console.log("Congrats! You got it right!")
    startGame()
  } else if (inputGuess > randNum) {
    console.log("Your guess is too high\n")
  } else if (inputGuess < randNum) {
    console.log("Your guess is too low\n");
    
  } 
  
}

//"Press return/enter to guess again \n"






}

const quitGame = () => {
  console.log("Have a nice life!")
  console.log("Goodbye!")
  process.exit()
}



/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 *
 * @returns {undefined}
 */
// const quitGame = () => {
// console.log("Goodbye!")
// process.exit
// };

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 *
 * @returns {undefined}
 */
// const gameLoop = () => {};

/***
 * Generates a random number
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return Math.floor(Math.random()*1000)
};

startGame();

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber,
};
