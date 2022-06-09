const guessLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress= document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter  of word) {
        console.log(letter);
        placeholderLetters.push("●");       //Display dots for the letters you need to guess
    }
        wordInProgress.innerText = placeholderLetters.join("");
    };

    placeholder(word);

    guessLetterButton.addEventListener("click", function(e) {
        e.preventDefault();                     //prevents the click from reloading the page
        message.innerText = "";                 //Empty aka clear message paragraph
        const guess = letterInput.value;  //captures the value of the input and logs out the value
        //console.log(yourGuess);
        const goodGuess = validateInput(guess);  //make sure it's a single letter
        
        if(goodGuess) {
            makeGuess(guess);
        }
        letterInput.value = "";            //empties the value of the input into the conole log
        
    });

    const validateInput = function(input) {     //validates player's input
        const acceptedLetter = /[a-zA-Z]/;      //array requiring letters for input
        if ( input.length === 0) {               //checking if input is empty
            message.innerText = "Please enter a letter.";
        } else if (input.length > 1 ) {         //did they input more than one letter?
            message.innerText = "Please enter a single letter.";
        } else if (!input.match(acceptedLetter)) {  
            message.innerText = "Must be a letter a-z or A-Z."
        } else {
        return input;
        }
    };
    
const makeGuess = function(guess) {
guess = guess.toUpperCase();
if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, silly. Try again.";
} else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
}
};