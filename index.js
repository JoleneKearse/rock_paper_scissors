const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let rootProp = document.querySelector(":root");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    // change margin-bottom via custom property to avoid 'spacing jump' when choices made
    rootProp.style.setProperty("--gap", "2.25em");
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = "✊";
    } else if (randomNumber === 2) {
        computerChoice = "✋";
    } else {
        computerChoice = "✌️";
    };
    computerChoiceDisplay.innerHTML = computerChoice;
    // rootProp.style.setProperty("--gap", "1.85em");

};

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Tie 🤷";
    } else if (computerChoice === "✊" && userChoice === "✋") {
        result = "You Win! 🥳";
    } else if (computerChoice === "✊" && userChoice === "✌️") {
        result = "You Lose! 😰";
    } else if (computerChoice === "✋" && userChoice === "✌️") {
        result = "You Win! 🥳";
    } else if (computerChoice === "✋" && userChoice === "✊") {
        result = "You Lose! 😰";
    } else if (computerChoice === "✌️" && userChoice === "✊") {
        result = "You Win! 🥳";
    } else if (computerChoice === "✌️" && userChoice === "✋") {
        result = "You Lose! 😰";
    };
    resultDisplay.innerHTML = result;
};