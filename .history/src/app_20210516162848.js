const path = require('path')
const express = require('express')

const Player = require('./player.js')
const playerOne = new Player()

console.log(playerOne.rollDice())
const app = express()

const publicDir = path.join(__dirname, '../public')


app.use(express.static(publicDir))
app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
    title: "This is a Dice Game",
    diceOne: "/img/dice"+playerOne.rollDice() + ".png",
    diceTwo: "/img/dice"+playerOne.rollDice() + ".png",
    result: 
    })
})

app.listen(3000, () => { 
    console.log("Server is up on port 3000")
})

