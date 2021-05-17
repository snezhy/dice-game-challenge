module.exports = class Player {
    constructer(name) {
        this.name = name
        this.diceOneNum = 0
        this.diceTwoNum = 0
        this.currentScore = 0
        this.totalScore = 0
    }

    rollDice() {
        const dice = 1 + Math.floor(Math.random()*6)
        return dice
    }

    calculateScore() {
        console.log("DiceOne " + this.diceOneNum)
        console.log("DiceTwo " + this.diceTwoNum)
        if ((this.diceOneNum || this.diceTwoNum) === 1) {
            this.currentScore = 0
            console.log("Sorry, next player's turn. You lose your current score.")
        } else if ((this.diceOneNum && this.diceTwoNum) === 1) {
            this.currentScore = 0
            this.totalScore = 0
            console.log("Sorry, next player's turn. You lose your total score.")
        } else {
            this.currentScore += this.diceOneNum + this.diceTwoNum
        } 
    }

    isPlayerActive() {
     
        return ((this.diceOneNum || this.diceTwoNum) === 1) || 
               ((this.diceOneNum && this.diceTwoNum) === 1) ? false : true
       
    }

    stopRolling() {
        this.totalScore += this.diceOneResult + this.diceTwoResult
    }
}








// function Player(name) {
//     this.name = name
//     this.diceOneNum = 0
//     this.diceTwoNum = 0
//     this.currentScore = 0
//     this.totalScore = 0
// }

// Player.prototype.rollDice = function() {
//     const dice = 1 + Math.floor(Math.random()*6)
//     return dice
   
// }

// Player.prototype.calculateScore = function () {
// console.log("DiceOne " + this.diceOneNum)
// console.log("DiceTwo " + this.diceTwoNum)
//     if ((this.diceOneNum || this.diceTwoNum) === 1) {
//         this.currentScore = 0
//         console.log("Sorry, next player's turn. You lose your current score.")
//     } else if ((this.diceOneNum && this.diceTwoNum) === 1) {
//         this.currentScore = 0
//         this.totalScore = 0
//         console.log("Sorry, next player's turn. You lose your total score.")
//     } else {
//         this.currentScore += this.diceOneNum + this.diceTwoNum
//     } 
// }

// Player.prototype.isPlayerActive = function () {
//         if ((this.diceOneNum || this.diceTwoNum) === 1) {
//            return false
//         } else if ((this.diceOneNum && this.diceTwoNum) === 1) {
//            return false
//         } 
//         return true
//     }

// Player.prototype.stopRolling = function() {
//     this.totalScore += this.diceOneResult + this.diceTwoResult
// }
// module.exports = Player



