const selectionButtons = document.querySelectorAll('[data-selection]');
const computerChoice = document.querySelector('.pc-choice');
const outcome = document.querySelector('.result');
const yourChoice = document.querySelector('.my-choice');
const computerScore = document.querySelector('.computer-score');
const yourScore = document.querySelector('.your-score');
const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors',
        emoji: '✊'
    },
    {
        name: 'scissors',
        beats: 'paper',
        emoji: '✌'
    },
    {
        name: 'paper',
        beats: 'rock',
        emoji: '✋'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection);
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    showResults(selection, computerSelection);
    if(yourWinner) {
        outcome.innerText = "Dima has won !"
    } else if(computerWinner) {
        outcome.innerText = "The Computer has won !"
    } else {
        outcome.innerText = 'Draw !'
    }

    if(yourWinner) scoreCalc(yourScore);
    if(computerWinner) scoreCalc(computerScore);
}

function scoreCalc(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function showResults(selection, computerSelection) {
    computerChoice.innerText = computerSelection.emoji;
    yourChoice.innerText = selection.emoji;
}


function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}
