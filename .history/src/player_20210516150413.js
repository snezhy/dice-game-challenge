class Player {
    rollDice () {
        //return `${this.constructor.name}: Meowww`;
       
        const dice = 1 + Math.floor(Math.random()*6)
    
        let image =  "dice" + dice + ".png"
        return image
       
    }
}

module.exports = Player



