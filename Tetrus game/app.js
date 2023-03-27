document.addEventListener('DOMContentLoaded',()=>{




    const grid = document.querySelector('.grid div')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')

    const width = 10
// the tetromineous
const lTetromino = [
    [1,width+1,width*2+1,2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2+2],
    [width, width*2, width*2+1, width*2+2],
]

const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
 ]

const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
]


const theTetromineos = [lTetromino,  zTetromino, tTetromino, oTetromino, iTetromino]

let currentposition = 4
let currentRotation = 0


//randomly select tetromino and its rotation
let random = Math.floor(Math.random()*theTetromineos.length)

let current = theTetromineos[random][0]

console.log(theTetromineos)



//draw shape

function draw(){
    current.forEach(index => {
        squares[currentposition + index].classList.add('tetromino')
    })
}



//undraw the shapes

function undraw(){
    current.forEach(index =>{
        squares[currentposition + index].classList.remove('tetromino')
    })
}

// make the shapes move 

timerId = setInterval(moveDown, 1000)

// assign functions to keycode
function control(e){
    if(e.keyCode === 37) {
        moveLeft()
    }
    else if(e.keyCode === 39){
        moveRight()
    }
    else if (e.keyCode === 38){
        rotate()
    }
    else if(e.keyCode === 40){
        moveDown()
    }
}
document.addEventListener('keyup', control)

//move down function
function moveDown(){
    undraw()
    currentposition+= width
    draw()
    freeze()
}
    


// freeze function
function freeze() {
    if(current.some(index => squares[currentposition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentposition + index].classList.add('taken'))
      //start a new tetromino falling
      
      random = Math.floor(Math.random() * theTetromineos.length)
      current = theTetromineos[random][currentRotation]
      currentposition = 4
      draw()
    }
  }


// move the shapes left 
function moveLeft(){
    undraw()
    const isAtLeftEdge = current.some(index => (currentposition + index) % width === 0)

    if(!isAtLeftEdge) currentposition-=1
    if(current.some(index => squares[currentposition + index].classList.contains('taken'))){
        currentposition +=1
    }
    draw()

}

// move right
function moveRight(){
    undraw()
    const isAtRightEdge = current.some(index => (currentposition + index) % width === width-1)

    if(!isAtRightEdge) currentposition +=1
    if(current.some(index => squares[currentposition + index].classList.contains('taken'))){
        currentposition -=1
    }
    draw()

}


// rotate the shape
function rotate(){
    undraw()
    currentRotation ++
    if (currentRotation === current.length){//if currentRotation gets to 4 make it back to 0
        currentRotation =0
    }
    current = theTetromineos[random][currentRotation]
    draw()
}
});