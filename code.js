const choices = ["камень", "бумага", "ножницы"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playChoice) {
    const ComputerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playChoice === ComputerChoice) {
        result = "Ничья!"
    }
    else {
        switch (playChoice) {
            case "камень":
                result = (ComputerChoice === "ножницы") ? "Вы выиграли!" : "Вы проиграли!";
                break;
            case "бумага":
                result = (ComputerChoice === "камень") ? "Вы выиграли!" : "Вы проиграли!";
                break;
            case "ножницы":
                result = (ComputerChoice === "бумага") ? "Вы выиграли!" : "Вы проиграли!";
                break;
        }
    }
    playerDisplay.textContent = `Игрок: ${playChoice}`;
    computerDisplay.textContent = `Компьютер: ${ComputerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("winText", "defeatText");

    switch (result) {
        case "Вы выиграли!":
            resultDisplay.classList.add("winText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Вы проиграли!":
            resultDisplay.classList.add("defeatText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    checkForWinner();
}

function checkForWinner() {
    if (playerScore === 3) {
        alert("Поздравляем! Вы выиграли серию!");
        resetGame();
    } else if (computerScore === 3) {
        alert("К сожалению, вы проиграли серию.");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = "";
    computerDisplay.textContent = "";
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("winText", "defeatText");
}
