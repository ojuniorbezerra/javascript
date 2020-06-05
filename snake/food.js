
import { onSnake, expandSmake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandowmFoodPosition()
const EXPANSION_RATE = 1



export function update(){
   if(onSnake(food)){
        expandSmake(EXPANSION_RATE)
        food = getRandowmFoodPosition()
   }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandowmFoodPosition(){
    let newFoodPosition 
    while( newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}