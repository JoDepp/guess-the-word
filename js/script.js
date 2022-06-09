const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetterInput = document.querySelector(".letter");
const wordInProgress= document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";

//Display dots for the letters you need to guess
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter  of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
        wordInProgress.innerText = placeholderLetters.join("");
    };

    placeholder(word);

    guessButton.addEventListener("click", function(e) {
        e.preventDefault(); //prevents the click from reloading the page
        const yourGuess = guessLetterInput.value;  //captures the value of the input and logs out the value
        console.log(yourGuess);
        guessLetterInput.value = ""; //empties the value of the input into the conole log
    });
