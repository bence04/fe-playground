const words = ["html", "css", "javascript", "frontend", "framework", "bootstrap", "react", "angular", "vue"];
const parts = ["base", "post", "beam", "rope", "head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];
let currentWord = "";
let guessedLetters = "";
let wrongGuesses = 0;

console.log(document)

// FELADAT: Készítsd el a billentyűzetet generáló függvényt
function generateKeyboard() {
    // HINT: Itt kell létrehozni a billentyűzetet, amit majd a 'keyboard' id-jú elembe kell beszúrni
    // HINT: Az ASCII kódolásban az angol nagybetűk 65-től 90-ig vannak. Használj egy ciklust, ami végigmegy ezeken a számokon,
    // String.fromCharCode(65) függvénnyel alakítsd át a számokat karakterekké,
    // és minden iterációban hozz létre egy gombot, aminek az értéke az adott számhoz tartozó karakter lesz.
    // Ne felejtsd el bekötni a guess() függvényt a gombra, aminek a paramétere a gomb értéke lesz.
    let keyboardHTML = "";
    for(let i = 65; i <= 90; i++) {
        console.log(String.fromCharCode(i));
        keyboardHTML += '<button onclick="guess(\'' + String.fromCharCode(i) + '\')">' + String.fromCharCode(i) + '</button>';
    }

    document.getElementById("keyboard").innerHTML = keyboardHTML;
}

// FELADAT: Készítsd el a szóválasztó függvényt
function pickWord() {
    // HINT: Itt kell véletlenszerűen választani egy szót a words tömbből, amit a currentWord változóban tárolunk
    // Ehhez használhatsz egy véletlenszám-generátort, ami 0 és a words tömb hossza közötti egész számot generál.
    // Továbbá nullázd le a guessedLetters és wrongGuesses változókat, majd hívd meg a hideHangmanParts és updateWordSpotlight függvényeket
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

// FELADAT: Készítsd el a testrészeket elrejtő függvényt
function hideHangmanParts() {
    // HINT: Itt kell elrejteni az összes testrészt, amiket a parts tömbben tárolunk
    // A stílusukat állítsd át a visibility tulajdonságukra, hogy rejtett legyen
    // Mivel ez egy tömb, így használhatsz egy ciklust, ami végigmegy a tömb elemein
    parts.forEach(part => {
        document.getElementById(part).style.visibility = "hidden";
    });

    for (let i = 0; i < parts.length; i++) {
        document.getElementById(parts[i]).style.visibility = "hidden";
    }
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