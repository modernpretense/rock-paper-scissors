// Rock-Paper-Scissors!

let wins = 0;
let losses = 0;
let draws = 0;

function checkForDeclaration() {
if (wins + losses === 5) {
    if (wins > losses) {
        document.getElementById("declaration").innerText = `You win by ${wins} to the computer's ${losses}!`;
    } else {
        document.getElementById("declaration").innerText = `You lose by ${wins} to the computer's ${losses}!`;
    }   
} else {
    return;
}};

function scoreString() {
    return `Wins: ${wins} Losses: ${losses} Draws: ${draws}`;
};

function updateScore() {
    document.getElementById("score").innerText = scoreString();
};

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }   
};

function playRound(playerSelection, computerSelection) {
    
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (player === computerSelection) {
        draws++;
        updateScore();
        checkForDeclaration();
        return `0It is a draw! ${player} meet ${computerSelection}!`;
    } else if (
            player === 'Rock' && computerSelection === 'Paper' ||
            player === 'Paper' && computerSelection === 'Scissors' ||
            player === 'Scissors' && computerSelection === 'Rock') {
                losses++;
                updateScore();
                checkForDeclaration();
                return `2You lose! ${computerSelection} beats ${player}!`;
    } else if (
            computerSelection === 'Rock' && player === 'Paper' ||
            computerSelection === 'Paper' && player === 'Scissors' ||
            computerSelection === 'Scissors' && player === 'Rock') {
                wins++;
                updateScore();
                checkForDeclaration();
                return `1You win! ${player} beats ${computerSelection}!`;
    } else {
        return '3You must input either Rock, Paper or Scissors to play!';
    }
};

function getPlayerChoice() {

   let playerChoice = prompt('Rock, Paper, Scissors!?');
   
   return playerChoice;
};

const results = document.querySelector('#results');
const score = document.querySelector('#score');

const rock = document.querySelector('#rock');
rock.addEventListener('click', function () {
    const content = document.createElement('div');
    content.classList.add('round');
    content.textContent = `${(playRound('Rock', getComputerChoice())).slice(1)}`;
    results.appendChild(content);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function () {
    const content = document.createElement('div');
    content.classList.add('round');
    content.textContent = `${(playRound('Paper', getComputerChoice())).slice(1)}`;
    results.appendChild(content);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function () {
    const content = document.createElement('div');
    content.classList.add('round');
    content.textContent = `${(playRound('Scissors', getComputerChoice())).slice(1)}`;
    results.appendChild(content);
});