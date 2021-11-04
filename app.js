// RULES
let showBtn = document.getElementById("showRules");

showBtn.addEventListener("click", () => {
    if (rules.style.display == "none") {
        rules.style.display = "block";
        showBtn.textContent = "HIDE RULES";
    } else if (rules.style.display = "block") {
        rules.style.display = "none";
        showBtn.textContent = "SHOW RULES";

    }
});

// DICE SIDES
let diceOne = document.getElementById("one");
let diceTwo = document.getElementById("two");
let diceThree = document.getElementById("three");
let diceFour = document.getElementById("four");
let diceFive = document.getElementById("five");
let diceSix = document.getElementById("six");

// GAME BUTTONS
let newGame = document.getElementById("gameBtn");
let bottomBtn = document.getElementById("bottomBtn");
let oneRollBtn = document.getElementById("oneRollBtn");
let twoRollBtn = document.getElementById("twoRollBtn");
let oneHoldBtn = document.getElementById("oneHoldBtn");
let twoHoldBtn = document.getElementById("twoHoldBtn");

// OTHER
let oneStart = document.getElementById("oneStart");
let twoStart = document.getElementById("twoStart");

// START GAME
newGame.addEventListener("click", () => {
    total = 0;
    bottomBtn.style.display = "block";
    newGame.style.display = "none";
    oneStart.style.display = "block";
    twoStart.style.display = "none";
    oneRollBtn.style.display = "block";
    oneHoldBtn.style.display = "block";
    twoRollBtn.style.display = "none";
    twoHoldBtn.style.display = "none";
});

// ROLL
let total = 0;
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

oneRollBtn.addEventListener("click", () => {
    let num = Math.floor(Math.random()*6);
    if (num == 1) {
        total = 0;
        diceOne.style.display = "block";
        diceTwo.style.display = "none";
        diceThree.style.display = "none";
        diceFour.style.display = "none";
        diceFive.style.display = "none";
        diceSix.style.display = "none";
        result1.textContent = "Points reset! Player 2's turn."
        twoStart.style.display = "block";
        oneStart.style.display = "none";
        twoRollBtn.style.display = "block";
        oneRollBtn.style.display = "none";
    } else if (num == 2) {
        total +=2;
        diceTwo.style.display = "block";
        result1.textContent = `${total}`;
        diceOne.style.display = "none";
        diceThree.style.display = "none";
        diceFour.style.display = "none";
        diceFive.style.display = "none";
        diceSix.style.display = "none";
    } else if (num == 3) {
        total +=3; 
        diceThree.style.display = "block";
        result1.textContent = `${total}`;
        diceOne.style.display = "none";
        diceTwo.style.display = "none";
        diceFour.style.display = "none";
        diceFive.style.display = "none";
        diceSix.style.display = "none"; 
    } else if (num == 4) {
        total +=4;
        diceFour.style.display = "block";
        result1.textContent = `${total}`;
        diceOne.style.display = "none";
        diceTwo.style.display = "none";
        diceThree.style.display = "none";
        diceFive.style.display = "none";
        diceSix.style.display = "none";
    } else if (num == 5) {
        total += 5;
        diceFive.style.display = "block";
        result1.textContent = `${total}`;
        diceOne.style.display = "none";
        diceTwo.style.display = "none";
        diceThree.style.display = "none";
        diceFour.style.display = "none";
        diceSix.style.display = "none";
    } else if (num == 6) {
        total += 6;
        diceSix.style.display = "block";
        result1.textContent = `${total}`;
        diceOne.style.display = "none";
        diceTwo.style.display = "none";
        diceThree.style.display = "none";
        diceFour.style.display = "none";
        diceFive.style.display = "none";
    } if (total >= 20) {
        result1.textContent = `${total} - You win!`;
        bottomBtn.style.display = "none";
        newGame.style.display = "block";
        oneStart.style.display = "none";
        twoStart.style.display = "none";
      }
})

twoRollBtn.addEventListener("click", () => {
    let num = Math.floor(Math.random()*6);
    if (num == 1) {
        total = 0;
        diceOne.style.display = "block";
        diceTwo.style.display = "none";
        diceThree.style.display = "none";
        diceFour.style.display = "none";
        diceFive.style.display = "none";
        diceSix.style.display = "none";
        result2.textContent = "Points reset! Player 1's turn."
        twoStart.style.display = "none";
        oneStart.style.display = "block";
        twoRollBtn.style.display = "none";
        oneRollBtn.style.display = "block";
    } else if (num == 2) {
        total +=2;
        diceTwo.style.display = "block";
        result2.textContent = `${total}`;
        diceOne.style.display = "none";
        diceThree.style.display = "none";
        diceFour.style.display = "none";
        diceFive.style.display = "none";
        diceSix.style.display = "none";
    } else if (num == 3) {
        total +=3; 
        diceThree.style.display = "block";
        result2.textContent = `${total}`;
        diceOne.style.display = "none";
        diceTwo.style.display = "none";
        diceFour.style.display = "none";
        diceFive.style.display = "none";
        diceSix.style.display = "none"; 
    } else if (num == 4) {
        total +=4;
        diceFour.style.display = "block";
        result2.textContent = `${total}`;
        diceOne.style.display = "none";
        diceTwo.style.display = "none";
        diceThree.style.display = "none";
        diceFive.style.display = "none";
        diceSix.style.display = "none";
    } else if (num == 5) {
        total += 5;
        diceFive.style.display = "block";
        result2.textContent = `${total}`;
        diceOne.style.display = "none";
        diceTwo.style.display = "none";
        diceThree.style.display = "none";
        diceFour.style.display = "none";
        diceSix.style.display = "none";
    } else if (num == 6) {
        total += 6;
        diceSix.style.display = "block";
        result2.textContent = `${total}`;
        diceOne.style.display = "none";
        diceTwo.style.display = "none";
        diceThree.style.display = "none";
        diceFour.style.display = "none";
        diceFive.style.display = "none";
    } if (total >= 20) {
        result2.textContent = `${total} - You win!`;
        bottomBtn.style.display = "none";
        newGame.style.display = "block";
        oneStart.style.display = "none";
        twoStart.style.display = "none";
      }
})

oneHoldBtn.addEventListener("click", () => {
    total = 0;
    twoStart.style.display = "block";
    oneStart.style.display = "none";
    oneRollBtn.style.display = "none";
    oneHoldBtn.style.display = "none";
    twoRollBtn.style.display = "block";
    twoHoldBtn.style.display = "block";
})

twoHoldBtn.addEventListener("click", () => {
    total = 0;
    oneStart.style.display = "block";
    twoStart.style.display = "none";
    oneRollBtn.style.display = "block";
    oneHoldBtn.style.display = "block";
    twoRollBtn.style.display = "none";
    twoHoldBtn.style.display = "none";
})