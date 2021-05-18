# dice-game-challenge (Node Js)

## Description

This is a 2 player game and it is played with 2 dice.

Implemented in Node Js. Templating engine used is Handlebars. Testing framework Jest.

## Rules Of The Game

Each player takes turn in rolling the dice. 
A player can roll the dice as many times as they want or until one of the dice rolls 1. In that case, the current player loses the points from the current roll sequence and it is the other's player turn to roll the dice.
If, however, both of the dice roll 1, then the current player loses all of his acumulated points to this point and it is the other's player turn to roll the dice.
At any point, the current player can decide to stop rolling by pressing the button "Stop Rolling". In this case, the player keeps all his points and it is the other's player turn.

It is a game of greed. And that's why it is famous by the name Pig Dice Game.

## How To Install

```
npm install

```
## How To Start

```
node src/server.js

```

## Run Tests

```
npm test

```

# Future Improvements

More thorough tests need to be added, as well as automated tests.
