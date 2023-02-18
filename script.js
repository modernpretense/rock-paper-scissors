// Rock-Paper-Scissors!

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }   
}

function playRound(playerSelection, computerSelection) {
    
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (player === computerSelection) {
        return `0It is a draw! ${player} meet ${computerSelection}!`;
    } else if (
            player === 'Rock' && computerSelection === 'Paper' ||
            player === 'Paper' && computerSelection === 'Scissors' ||
            player === 'Scissors' && computerSelection === 'Rock') {
        return `2You lose! ${computerSelection} beats ${player}!`;
    } else if (
            computerSelection === 'Rock' && player === 'Paper' ||
            computerSelection === 'Paper' && player === 'Scissors' ||
            computerSelection === 'Scissors' && player === 'Rock') {
        return `1You win! ${player} beats ${computerSelection}!`;
    } else {
        return '3You must input either Rock, Paper or Scissors to play!';
    }
}

function getPlayerChoice() {

   let playerChoice = prompt('Rock, Paper, Scissors!?');
   
   return playerChoice;
}

function game() {
    let wins = 0;
    let losses = 0;
    let draws = 0;
    
    for (let i = 0; i < 5; i++) {
        let roundReturnString = (playRound(getPlayerChoice(), getComputerChoice()));
        let returnValue = roundReturnString.charAt(0);
      
        if (returnValue === '0') {
            draws++;
        } else if (returnValue === '1') {
            wins++;
        } else if (returnValue === '2') {
            losses++;
        }
        console.log(roundReturnString.slice(1));
    }
    console.log(`Rock, Paper, Scissors-game Best-of-5 finished. Wins: ${wins} Losses: ${losses} Draws: ${draws}!`);
}


game();