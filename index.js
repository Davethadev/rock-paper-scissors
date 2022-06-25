const choices = document.querySelectorAll('.choice')
const score = document.getElementById('score')
const result = document.getElementById('result')
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game
function play(e) {
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice, computerChoice)
    showWinner(winner, computerChoice)
    checkWinner()
    console.log(playerChoice, computerChoice, winner, )
}
//Get computer choice
function getComputerChoice() {
    let rand = Math.random()
    if (rand < 0.34) {
        return 'rock'
    } else if (rand <= 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//Get winner
function getWinner(p, c) {
    if (p === c) {
        return 'draw'
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer'
        } else {
            return 'player'
        }  
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer'
        } else {
            return 'player'
        }
    }
}

//Show winner
function showWinner(winner, computerChoice) {
    //Inc player score
    if (winner === 'player') {
        scoreboard.player++
        result.innerHTML = `
        <h3>Computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</h3> 
        `
    //Inc computer score
    } else if (winner === 'computer') {
        scoreboard.computer++
        result.innerHTML = `
        <h3>Computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</h3> 
        `
    } 
    //Show score
    score.innerHTML = `
        <h3>Player: ${scoreboard.player}</h3>
        <h3>Computer: ${scoreboard.computer}</h3>
        `

}

function restartGame() {
    scoreboard.player = 0
    scoreboard.computer = 0

    score.innerHTML = 
    `
    <h3>Player: 0</h3>
    <h3>Computer: 0</h3>
    `
    result.style = "block"
}

//Check winner
function checkWinner() {
    if (scoreboard.player === 5) {
        result.innerHTML = `
        <h3>Player Wins!</h3>
        `
        restartGame()
    } else if (scoreboard.computer === 5) {
        result.innerHTML = `
        <h3>Computer Wins!</h3>
        `
    }
}

//Add event listener
choices.forEach((choice) => addEventListener('click', play))