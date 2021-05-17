module.exports = class Player {
    constructer(name, active = false) {
        this.name = name
        this.diceOneNum = 0
        this.diceTwoNum = 0
        this.active = active
    }

    getActive() {
        return this.active
    }

    setActive(active) {
        this.active = active
    }

    rollDice() {
        const dice = 1 + Math.floor(Math.random()*6)
        return dice
    }

    isPlayerActive() {
     
        return ((this.diceOneNum || this.diceTwoNum) === 1) || 
               ((this.diceOneNum && this.diceTwoNum) === 1) ? false : true
       
    }


    isRollSnakeEyes() {
        return ((this.diceOneNum && this.diceTwoNum) === 1) ? true : false
    }

    stopRolling() {
        this.totalScore += this.diceOneResult + this.diceTwoResult
    }
}
