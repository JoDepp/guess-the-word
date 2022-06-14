const guessedLettersElement = document.querySelector(".guessed-letters");   //UL
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
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
}
};

const showGuessedLetters = function() {
    guessedLettersElement.innerHTML = "";     //empty the innerHTML of the UL where the player's guessed letters will display
for (const letter of guessedLetters) {    
    const li = document.createElement("li");    //creates a new list item for each letter inside array
    li.innerText = letter;                      //adds li to the UL 
     guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");  //splits word string into an array
    const revealWord = [];     //array with the updated characters
    for(const letter of wordArray) {
    if (guessedLetters.includes(letter) ) {   // checks if wordArray contains any letters from the guessedLetters array.
        revealWord.push(letter.toUpperCase());  //add letter to end of Array
    } else {                            //if it does contain any letters we'll update the circle with the correct letter.
        revealWord.push("●");
    }
}
console.log(revealWord);
wordInProgress.innerText = revealWord.join("");  //updates the empty paragraph where the word in progess will appear
isGuessCorrect();
};

const isGuessCorrect = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {  //Does word in progress match the correct word
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};