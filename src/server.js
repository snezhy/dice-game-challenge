const path = require('path')
const express = require('express')

const Player = require('./player.js')
const playerOne = new Player("Player 1", true)
const playerTwo = new Player("Player 2", false)

const app = express()

const publicDir = path.join(__dirname, '../public')


app.use(express.static(publicDir))
app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
    diceOne: "/img/dice"+playerOne.rollDice() + ".png",
    diceTwo: "/img/dice"+playerOne.rollDice() + ".png",
    })
})

app.get('/game', (req, res) => {
   
    playerOne.diceOneNum = playerOne.rollDice() 
    playerOne.diceTwoNum = playerOne.rollDice()
    
    res.send({
    rolledOne: playerOne.didPlayerRollOne(),
    snakeEyes: playerOne.isRollSnakeEyes(),
    playerOneSnakeEyes: playerOne.isRollSnakeEyes(),
    diceOne: "/img/dice" + playerOne.diceOneNum + ".png",
    diceTwo: "/img/dice" + playerOne.diceTwoNum + ".png",
    playerOne:  playerOne,
    active: playerOne.active
    })
})

app.listen(3000, () => { 
    console.log("Server is up on port 3000")
})

