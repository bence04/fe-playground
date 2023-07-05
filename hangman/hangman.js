const words = ["html", "css", "javascript", "frontend", "framework", "bootstrap", "react", "angular", "vue"];
const parts = ["base", "post", "beam", "rope", "head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];
let currentWord = "";
let guessedLetters = "";
let wrongGuesses = 0;

function generateKeyboard() {
    let keyboardHTML = "";
    for (let i = 65; i <= 90; i++) {
        keyboardHTML += `<button onclick="guess('${String.fromCharCode(i)}')">${String.fromCharCode(i)}</button>`;
    }
    document.getElementById("keyboard").innerHTML = keyboardHTML;
}

function pickWord() {
    currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    guessedLetters = "";
    wrongGuesses = 0;
    hideHangmanParts();
    updateWordSpotlight();
}

function updateWordSpotlight() {
    let wordSpotlightContent = "";
    for (let i = 0; i < currentWord.length; i++) {
        if (guessedLetters.includes(currentWord[i])) {
            wordSpotlightContent += currentWord[i];
        } else {
            wordSpotlightContent += " _ ";
        }
    }
    document.getElementById("wordSpotlight").innerHTML = wordSpotlightContent;

    if (wordSpotlightContent === currentWord) {
        alert("Gratulálok! Megtaláltad a szót!");
        pickWord();
    }
}

function hideHangmanParts() {
    parts.forEach(part => document.getElementById(part).style.visibility = "hidden");
}

function updateHangmanDrawing() {
    if (wrongGuesses > 0) {
        document.getElementById(parts[wrongGuesses - 1]).style.visibility = "visible";
    }
}

function guess(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters += letter;
        if (!currentWord.includes(letter)) {
            wrongGuesses++;
            updateHangmanDrawing();
            if (wrongGuesses === parts.length) {
                alert("Sajnálom, de az emberkét felakasztották. A szó: " + currentWord);
                pickWord();
            }
        }
    }
    updateWordSpotlight();
}

generateKeyboard();
pickWord();