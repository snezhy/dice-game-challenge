class Player {
    rollDice () {
        //return `${this.constructor.name}: Meowww`;
        let image = ''
        const dice = 1 + Math.floor(Math.random()*6)
    
        switch (dice) {
            case 1: 
                image = "dice1.png"
                break
            case 2:
                image = "dice2.png"
                break
            case 3:
                image = "dice3.png"
                break
            case 4:
                image = "dice3.png"
                break
            default:
                image = "dice6.png"
                break
        }
    
        return image
    }
}

module.exports = Player



