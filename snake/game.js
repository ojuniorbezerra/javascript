import { SNAKE_SPEED ,  update as updataSnake, draw as drawSnake,
getSnakeHead, snakeIntersection} from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'
let gameOver =  false;

import { outsideGrid } from './grid.js'

let lastRenderTime = 0
const gambeBoard = document.getElementById('game-board')
function main(currectTime){

    if(gameOver){
        if(confirm('You lost. Press ok to restart.')){
            window.location = '/snake'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currectTime - lastRenderTime) / 1000
   if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currectTime
    
    update()
    draw()
    checkDeath()
}

window.requestAnimationFrame(main)

function update(){
    updataSnake()
    updateFood()
}

function draw(){
    gambeBoard.innerHTML = ""
    drawSnake(gambeBoard)
    drawFood(gambeBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}