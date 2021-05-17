const path = require('path')
const express = require('express')

const Player = require('./player.js')
const { Console } = require('console')
const playerOne = new Player("Player 1")
const playerTwo = new Player("Player 2")

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
    playerOne.calculateScore()
    let playerOneActive = playerOne.isPlayerActive()
    res.send({
    title: "This is a Dice Game",
    playerOneActive: playerOneActive,
    diceOne: "/img/dice" + playerOne.diceOneNum + ".png",
    diceTwo: "/img/dice" + playerOne.diceTwoNum + ".png",
    playerOne:  playerOne,
    playerTwo: playerTwo
    })
})

app.listen(3000, () => { 
    console.log("Server is up on port 3000")
})

