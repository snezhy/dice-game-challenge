const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    const diceOne = document.querySelector('#diceOne')
    const diceTwo = document.querySelector('#diceTwo')
    const diceOneRes = (diceOne.src).slice(-4, 1)
    const diceTwoRes = (diceTwo.src).slice(-4, 1)
    console.log('one' + diceOneRes)
    console.log('two' + diceTwoRes)    
})



