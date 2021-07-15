const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    // Remove All Styling from Game Board before Starting.
    square.forEach(className => {
        className.classList.remove('mole')
    })
    // Define Random Position within Grid - mathRandom - And Multiply It by Amount of Squares in Grid.
    // Math.floor Rounds Down to Nearest Interger - so always below or equivalent to 9.
    let randomPosition = square[Math.floor(Math.random() * 9)]
    // Once randomPosition Defined add Class of Mole.
    randomPosition.classList.add('mole')

    // Assign id of randomPostion to hitPosition.
    hitPosition = randomPosition.id
} 

square.forEach(id => {
    // mouseup - When We Hit Mouse on an Element.
    id.addEventListener('mouseup', () => {
        // If the Mouse Click Equals the div id of Our hitPosition We Win.
        if(id.id === hitPosition){
            result = result + 1
            // Visually Display Score In Browser.
            score.textContent = result
        }
    })
})

function moveMole() {
    // Set Timer id To null.
    let timerId = null
    // Set Timer Interval to 1000 Miliseconds.
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    // Set Timer to Decrement By 1. 
    currentTime--
    timeLeft.textContent = currentTime

    // When Timer Gets to 0, Notify User Game Over and Show Final Score.
    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your Final Score Is: ' + result)
    }
}

// Make Timer Invoke Every 1 Second.
let timerId = setInterval(countDown, 1000)
