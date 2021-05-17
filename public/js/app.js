const $form = $('form')
const stop = document.querySelector(".btn-stop-rolling")
const currentScorePlayerOne = document.querySelector("#current-score-player-one")
const currentScorePlayerTwo = document.querySelector("#current-score-player-two")
const scorePlayerOne = document.querySelector("#score-player-one")
const scorePlayerTwo = document.querySelector("#score-player-two")
const newGame = document.querySelector(".btn-new-game")
const panelPlayerOne = document.querySelector(".player-one-panel")
const panelPlayerTwo = document.querySelector(".player-two-panel")
let counter = 0
let totalScorePlayerOne = 0
let totalScorePlayerTwo = 0
$form.on('submit', submitHandler)
function submitHandler (e) {
    e.preventDefault()

    $.ajax({
        url: '/game',
        type:'GET'
    }).done((response) => {
        diceOne.src = response.diceOne
        diceTwo.src = response.diceTwo
        const playerOneActive = response.playerOneActive
        const diceOneNum = response.playerOne.diceOneNum 
        const diceTwoNum = response.playerOne.diceTwoNum 
        counter += diceOneNum + diceTwoNum
        setActivePlayer(playerOneActive, diceOneNum, diceTwoNum) 
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
  counter = 0
  panelPlayerOne.classList.toggle("active")
  panelPlayerTwo.classList.toggle("active")
})

newGame.addEventListener("click", () => {
  resetGame()
})

const setActivePlayer = (playerOneActive, diceOneNum, diceTwoNum) => {
    if (playerOneActive) {
        if (panelPlayerOne.classList.contains("active")) {
            currentScorePlayerOne.textContent = counter
        } else {
            currentScorePlayerTwo.textContent = counter
        }
    } else {
        counter = 0
        currentScorePlayerOne.textContent = 0
        currentScorePlayerTwo.textContent = 0
        panelPlayerOne.classList.toggle("active")
        panelPlayerTwo.classList.toggle("active")
    }
}

const sendActivePlayer = (playerId, active) => {

    $.ajax ({
        url: "player/",
        type: 'GET',
        data: {
            player_id: playerId,
            active: active
        } 
    }).done((response) => {
       if (response) { console.log('success') }
    })
}

const resetGame = () => {
  currentScorePlayerOne.textContent = 0
  currentScorePlayerTwo.textContent = 0
  scorePlayerOne.textContent = 0
  scorePlayerTwo.textContent = 0
  totalScorePlayerOne = 0
  totalScorePlayerTwo = 0
  counter = 0
  if (!panelPlayerOne.classList.contains("active")) {
    panelPlayerOne.classList.toggle("active")
    panelPlayerTwo.classList.toggle("active")
  }
}

function callback(mutationsList) {
  mutationsList.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        if (panelPlayerOne.classList.contains("active")) {
            sendActivePlayer(1, true)
        } else {
            sendActivePlayer(2, true)
        }
      }
  })
}

const mutationObserver = new MutationObserver(callback)

mutationObserver.observe(
  document.querySelector('#panel-one'),
  { attributes: true }
)






