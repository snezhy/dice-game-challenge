const $form = $('form')
const stop = document.querySelector(".btn-stop-rolling");
const currentScorePlayerOne = document.querySelector("#current-score-player-one");
const currentScorePlayerTwo = document.querySelector("#current-score-player-two");
const scorePlayerOne = document.querySelector("#score-player-one");
const scorePlayerTwo = document.querySelector("#score-player-two");
const newGame = document.querySelector(".btn-new-game");
const panelPlayerOne = document.querySelector(".player-one-panel");
const panelPlayerTwo = document.querySelector(".player-two-panel");
let counter = 0;
let totalScorePlayerOne = 0
let totalScorePlayerTwo = 0

console.log('$form ', $form)
$form.on('submit', submitHandler)
function submitHandler (e) {
    e.preventDefault()

    $.ajax({
        url: '/game',
        type:'GET'
    }).done((response) => {
        console.log(response)
        diceOne.src =response.diceOne
        diceTwo.src = response.diceTwo
        const playerOneActive = response.playerOneActive
        counter += response.playerOne.diceOneNum + response.playerOne.diceTwoNum
        setActivePlayer(playerOneActive) 
    })
}

stop.addEventListener("click", () => {
  if (panelPlayerOne.classList.contains("active")) {
    totalScorePlayerOne += counter
    scorePlayerOne.textContent = totalScorePlayerOne
    currentScorePlayerOne.textContent = 0
    if (totalScorePlayerOne >= 100) {
      alert("Player 1 Wins!")
      resetGame()
      return
    }
  } else {
      totalScorePlayerTwo += counter
      scorePlayerTwo.textContent = totalScorePlayerTwo
      currentScorePlayerTwo.textContent = 0
          if (totalScorePlayerTwo >= 100) {
            alert("Player 2 Wins!")
            resetGame()
            return
         }
  }
  counter = 0;
  panelPlayerOne.classList.toggle("active")
  panelPlayerTwo.classList.toggle("active")
})

newGame.addEventListener("click", () => {
  resetGame();
});

function setActivePlayer(playerOneActive) {
    if (playerOneActive) {
        if (panelPlayerOne.classList.contains("active")) {
            currentScorePlayerOne.textContent = counter;
        } else {
            currentScorePlayerTwo.textContent = counter;
        }
    } else {
        counter = 0;
        currentScorePlayerOne.textContent = 0;
        currentScorePlayerTwo.textContent = 0;
        panelPlayerOne.classList.toggle("active");
        panelPlayerTwo.classList.toggle("active");
    }
}

function rnd() {
  return Math.floor(Math.random() * 6) + 1;
}

function resetGame() {
  currentScorePlayerOne.textContent = 0;
  currentScorePlayerTwo.textContent = 0;
  scorePlayerOne.textContent = 0;
  scorePlayerTwo.textContent = 0;
  totalScorePlayerOne = 0;
  totalScorePlayerTwo = 0;
  counter = 0;
  if (!panelPlayerOne.classList.contains("active")) {
    panelPlayerOne.classList.toggle("active");
    panelPlayerTwo.classList.toggle("active");
  }
}







