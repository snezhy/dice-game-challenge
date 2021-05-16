class Player {
    rollDice () {
        const dice = 1 + Math.floor(Math.random()*6)
    
        let image =  "dice" + dice + ".png"
        return image
       
    }
}

module.exports = Player



