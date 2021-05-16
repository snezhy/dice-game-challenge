const path = require('path')
const express = require('express')
const $ = require( "jquery" )

//const playerOne = require('./player')


const app = express()

const publicDir = path.join(__dirname, '../public')


app.use(express.static(publicDir))
app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
    title: "This is a Dice Game",
    name: "Snezhana"
    })
})

app.listen(3000, () => { 
    console.log("Server is up on port 3000")
})

