const path = require('path')
const express = require('express')

const Player = require('./player.js')
const playerOne = new Player("Player 1", true)
const playerTwo = new Player("Player 2", false)

console.log(playerOne.isPlayerActive())
const app = express()

const publicDir = path.join(__dirname, '../public')


app.use(express.static(publicDir))
app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
    title: "This is a Dice Game",
    diceOne: "/img/dice"+playerOne.rollDice() + ".png",
    diceTwo: "/img/dice"+playerOne.rollDice() + ".png",
    })
})

app.get('/game', (req, res) => {
    playerOne.diceOneNum = playerOne.rollDice() 
    playerOne.diceTwoNum = playerOne.rollDice() 
    const playerOneActive = playerOne.isPlayerActive()
    console.log(playerOneActive)
    res.send({
    title: "This is a Dice Game",
    playerOneActive: playerOneActive,
    playerOneSnakeEyes: playerOne.isRollSnakeEyes(),
    diceOne: "/img/dice" + playerOne.diceOneNum + ".png",
    diceTwo: "/img/dice" + playerOne.diceTwoNum + ".png",
    playerOne:  playerOne
    })
})

app.get('/player', (req, res) => {
    const playerId = req.query.player_id
    const active = req.query.active

    if (playerId) {
        if ((playerId === 1) && (active == true)) { playerOne.setActive(true) }
        if ((playerId === 2) && (active == true)) { playerTwo.setActive(true) }
    }

})

app.listen(3000, () => { 
    console.log("Server is up on port 3000")
})

