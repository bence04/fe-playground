const words = ["html", "css", "javascript", "frontend", "framework", "bootstrap", "react", "angular", "vue"];
const parts = ["base", "post", "beam", "rope", "head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];
let currentWord = "";
let guessedLetters = "";
let wrongGuesses = 0;

// FELADAT: Készítsd el a billentyűzetet generáló függvényt
function generateKeyboard() {
    // HINT: Itt kell létrehozni a billentyűzetet, amit majd a 'keyboard' id-jú elembe kell beszúrni
    // HINT: Az ASCII kódolásban az angol nagybetűk 65-től 90-ig vannak. Használj egy ciklust, ami végigmegy ezeken a számokon,
    // és minden iterációban hozz létre egy gombot, aminek az értéke az adott számhoz tartozó karakter lesz.
    // Ne felejtsd el bekötni a guess() függvényt a gombra, aminek a paramétere a gomb értéke lesz.
}

// FELADAT: Készítsd el a szóválasztó függvényt
function pickWord() {
    // HINT: Itt kell véletlenszerűen választani egy szót a words tömbből, amit a currentWord változóban tárolunk
    // Ehhez használhatsz egy véletlenszám-generátort, ami 0 és a words tömb hossza közötti egész számot generál.
    // Továbbá nullázd le a guessedLetters és wrongGuesses változókat, majd hívd meg a hideHangmanParts és updateWordSpotlight függvényeket
}

function updateWordSpotlight() {
    let wordSpotlightContent = "";
    for (let i = 0; i < currentWord.length; i++) {
        if (guessedLetters.includes(currentWord[i])) {
            wordSpotlightContent += " " + currentWord[i] + " ";
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

// FELADAT: Készítsd el a szóválasztó függvényt
function pickWord() {
    // HINT: Itt kell véletlenszerűen választani egy szót a words tömbből, amit a currentWord változóban tárolunk
    // Ehhez használhatsz egy véletlenszám-generátort, ami 0 és a words tömb hossza közötti egész számot generál.
    // Továbbá nullázd le a guessedLetters és wrongGuesses változókat, majd hívd meg a hideHangmanParts és updateWordSpotlight függvényeket
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
