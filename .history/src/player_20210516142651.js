const image 
const rollDice = () => {
    return 1 + Math.floor(Math.random()*6)
}


switch (rollDice) {
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

