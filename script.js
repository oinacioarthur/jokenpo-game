const result = document.querySelector('.result');
const yourPontuation = document.querySelector('#you');
const machinePontuation = document.querySelector('#pc');
const humanChoose = document.querySelector('#yourChoose');
const machineChoose = document.querySelector('#machineChoose');
const choiceResult = document.querySelector('.human');
const choiceResultMachine = document.querySelector('.machine');

let pontuation = 0
let machinePoints = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
    
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    choiceResult.innerHTML = human
    choiceResultMachine.innerHTML = machine
    if ( human === machine ) {
        result.innerHTML = "Deu empate!"
    } else if ( human === "rock" && machine === "scissors" || human === "paper" && machine === "rock" || human === "scissors" && machine === "rock") {
        
        pontuation++
        yourPontuation.innerHTML = pontuation
    
        result.innerHTML = "Você venceu!"
    } else {

        machinePoints++
        machinePontuation.innerHTML = machinePoints
    
        result.innerHTML = "A máquina venceu!"
    }
}
