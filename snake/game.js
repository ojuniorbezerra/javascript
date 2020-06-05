import { SNAKE_SPEED ,  update as updataSnake, draw as drawSnake} from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'


let lastRenderTime = 0
const gambeBoard = document.getElementById('game-board')
function main(currectTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currectTime - lastRenderTime) / 1000
   if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currectTime
    
    update()
    draw()
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