module.exports = class Player {
    constructer(name) {
        this.name = name
        this.diceOneNum = 0
        this.diceTwoNum = 0
        this.active = false
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

    didPlayerRollOne() {
        return ((this.diceOneNum || this.diceTwoNum) === 1) ? true : false
       
    }


    isRollSnakeEyes() {
        return ((this.diceOneNum && this.diceTwoNum) === 1) ? true : false
    }

    stopRolling() {
        this.totalScore += this.diceOneResult + this.diceTwoResult
    }
}
