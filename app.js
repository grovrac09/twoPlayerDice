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
let dice = document.getElementById("dice");
let mainDice = document.getElementById("startDice");

// GAME BUTTONS
let newGame = document.getElementById("gameBtn");
let bottomBtn = document.getElementById("bottomBtn");
let oneRollBtn = document.getElementById("oneRollBtn");
let twoRollBtn = document.getElementById("twoRollBtn");
let oneHoldBtn = document.getElementById("oneHoldBtn");
let twoHoldBtn = document.getElementById("twoHoldBtn");

// OTHER
let turnMsg = document.getElementById("turnMsg");

// START GAME
newGame.addEventListener("click", () => {
    total1 = 0;
    total2 = 0;
    bottomBtn.style.display = "flex";
    newGame.style.display = "none";
    turnMsg.innerHTML = "Player 1's turn";
    result1.textContent = ""
    result2.textContent = ""
    oneRollBtn.style.display = "block";
    oneHoldBtn.style.display = "block";
    twoRollBtn.style.display = "none";
    twoHoldBtn.style.display = "none";
});

// ROLL
let total1 = 0;
let total2 = 0;
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

oneRollBtn.addEventListener("click", () => {
    document.getElementById("diceMp3").play();
    mainDice.style.display = "none";
    let num = Math.floor(Math.random()*6);
    if (num == 1) {
        total1 = 0;
        dice.innerHTML = '<i id="one" class="fas fa-dice-one"></i>';
        result1.textContent = "Points reset!"
        turnMsg.innerHTML = "Player 2's turn";
        twoRollBtn.style.display = "block";
        oneRollBtn.style.display = "none";
    } else if (num == 2) {
        total1 +=2;
        result1.textContent = `${total1}`;
        dice.innerHTML = `<i id="two" class="fas fa-dice-two"></i>`;
    } else if (num == 3) {
        total1 +=3; 
        result1.textContent = `${total1}`;
        dice.innerHTML = `<i id="three" class="fas fa-dice-three"></i>`;
    } else if (num == 4) {
        total1 +=4;
        result1.textContent = `${total1}`;
        dice.innerHTML = `<i id="four" class="fas fa-dice-four"></i>`;
    } else if (num == 5) {
        total1 += 5;
        result1.textContent = `${total1}`;
        dice.innerHTML = `<i id="five" class="fas fa-dice-five"></i>`;
    } else if (num == 6) {
        total1 += 6;
        result1.textContent = `${total1}`;
        dice.innerHTML = `<i id="six" class="fas fa-dice-six"></i>`;
    } if (total1 >= 20) {
        result1.textContent = `${total1} - You win!`;
        bottomBtn.style.display = "none";
        newGame.style.display = "block";
        turnMsg.innerHTML = "";
      }
})



twoRollBtn.addEventListener("click", () => {
    document.getElementById("diceMp3").play();
    let num = Math.floor(Math.random()*6);
    if (num == 1) {
        total2 = 0;
        dice.innerHTML = '<i id="one" class="fas fa-dice-one"></i>';
        result2.textContent = "Points reset!"
        turnMsg.innerHTML = "Player 1's turn";
        twoRollBtn.style.display = "none";
        oneRollBtn.style.display = "block";
    } else if (num == 2) {
        total2 +=2;
        result2.textContent = `${total2}`;
        dice.innerHTML = `<i id="two" class="fas fa-dice-two"></i>`;
    } else if (num == 3) {
        total2 +=3; 
        result2.textContent = `${total2}`;
        dice.innerHTML = `<i id="three" class="fas fa-dice-three"></i>`;
    } else if (num == 4) {
        total2 +=4;
        result2.textContent = `${total2}`;
        dice.innerHTML = `<i id="four" class="fas fa-dice-four"></i>`;
    } else if (num == 5) {
        total2 += 5;
        result2.textContent = `${total2}`;
        dice.innerHTML = `<i id="five" class="fas fa-dice-five"></i>`;
    } else if (num == 6) {
        total2 += 6;
        result2.textContent = `${total2}`;
        dice.innerHTML = `<i id="six" class="fas fa-dice-six"></i>`;
    } if (total2 >= 20) {
        result2.textContent = `${total2} - You win!`;
        bottomBtn.style.display = "none";
        newGame.style.display = "block";
        turnMsg.innerHTML = "";
      }
})

oneHoldBtn.addEventListener("click", () => {
    turnMsg.innerHTML = "Player 2's turn";
    oneRollBtn.style.display = "none";
    oneHoldBtn.style.display = "none";
    twoRollBtn.style.display = "block";
    twoHoldBtn.style.display = "block";
})

twoHoldBtn.addEventListener("click", () => {
    turnMsg.innerHTML = "Player 1's turn";
    oneRollBtn.style.display = "block";
    oneHoldBtn.style.display = "block";
    twoRollBtn.style.display = "none";
    twoHoldBtn.style.display = "none";
})