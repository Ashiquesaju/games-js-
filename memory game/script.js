const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'milkshakes',
        img: 'images/milkshake.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'milkshakes',
        img: 'images/milkshake.png',
    },
    
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardchosen = []

function checkMatch() {
    console.log('check for match')
    
}


function createboard(){
    for (let i=0; i< cardArray.length; i++){
       const card = document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipcard)
       gridDisplay.appendChild(card)

    }
}
createboard()
function flipcard() {
    const cardId = this.getAttribute('data-id')
    cardchosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId] .img)
    if (cardchosen.length === 2){
        setTimeout(checkMatch, 500)
    }
    
}