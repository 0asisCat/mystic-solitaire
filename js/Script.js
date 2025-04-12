const timerDisplay = document.getElementById('timer-display');
const scores = document.getElementById('scores-display');
const moves = document.getElementById('moves-display');
const newGameBtn = document.getElementById("new-game");
const restartBtn = document.getElementById("restart");
const pauseBtn = document.getElementById("pause");
const mainColor = "white" /*#16F529 (neongreen) or white*/

let [milliseconds, seconds, minutes] = [0, 0, 0];
let int = null;
let score = 0;
let move = 0;

newGameBtn.addEventListener("click", () => {
    if(int !== null){
        clearInterval(int);
    }
    timerDisplay.style.color = mainColor;
    int = setInterval(displayTimer, 10);
});

restartBtn.addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timerDisplay.innerHTML = "00 : 00";
    timerDisplay.style.color = mainColor;
});

pauseBtn.addEventListener("click", () => {
    clearInterval(int);
    timerDisplay.style.color = "red";
});

// add an undo button

function displayTimer(){
    milliseconds += 10;
    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    timerDisplay.innerHTML = `${m} : ${s}`
}

function newGameDialog(){

}

function pauseDialog(){

}

// MAIN DECK
let suits = {
    width: 100,
    height: 150,
    cardBack: "./asset/cardBack.png",
    wands: [
        {id:1, src:"asset/minorArc/clubs/club01.png", isDragging: false, isFlipped: false}, 
        {id:2, src:"asset/minorArc/clubs/club02.png", isDragging: false, isFlipped: false}, 
        {id:3, src:"asset/minorArc/clubs/club03.png", isDragging: false, isFlipped: false}, 
        {id:4, src:"asset/minorArc/clubs/club04.png", isDragging: false, isFlipped: false}, 
        {id:5, src:"asset/minorArc/clubs/club05.png", isDragging: false, isFlipped: false}, 
        {id:6, src:"asset/minorArc/clubs/club06.png", isDragging: false, isFlipped: false}, 
        {id:7, src:"asset/minorArc/clubs/club07.png", isDragging: false, isFlipped: false}, 
        {id:8, src:"asset/minorArc/clubs/club08.png", isDragging: false, isFlipped: false}, 
        {id:9, src:"asset/minorArc/clubs/club09.png", isDragging: false, isFlipped: false}, 
        {id:10, src:"asset/minorArc/clubs/club10.png", isDragging: false, isFlipped: false}, 
        {id:11, src:"asset/minorArc/clubs/club11.png", isDragging: false, isFlipped: false}, 
        {id:12, src:"asset/minorArc/clubs/club12.png", isDragging: false, isFlipped: false}, 
        {id:13, src:"asset/minorArc/clubs/club13.png", isDragging: false, isFlipped: false},
        {id:14, src:"asset/minorArc/clubs/club14.png", isDragging: false, isFlipped: false}
    ],
    coins: [
        {id:1, src:"asset/minorArc/diamonds/diamond01.png", isDragging: false, isFlipped: false},
        {id:2, src:"asset/minorArc/diamonds/diamond02.png", isDragging: false, isFlipped: false},
        {id:3, src:"asset/minorArc/diamonds/diamond03.png", isDragging: false, isFlipped: false},
        {id:4, src:"asset/minorArc/diamonds/diamond04.png", isDragging: false, isFlipped: false},
        {id:5, src:"asset/minorArc/diamonds/diamond05.png", isDragging: false, isFlipped: false},
        {id:6, src:"asset/minorArc/diamonds/diamond06.png", isDragging: false, isFlipped: false},
        {id:7, src:"asset/minorArc/diamonds/diamond07.png", isDragging: false, isFlipped: false},
        {id:8, src:"asset/minorArc/diamonds/diamond08.png", isDragging: false, isFlipped: false},
        {id:9, src:"asset/minorArc/diamonds/diamond09.png", isDragging: false, isFlipped: false},
        {id:10, src:"asset/minorArc/diamonds/diamond10.png", isDragging: false, isFlipped: false},
        {id:11, src:"asset/minorArc/diamonds/diamond11.png", isDragging: false, isFlipped: false},
        {id:12, src:"asset/minorArc/diamonds/diamond12.png", isDragging: false, isFlipped: false},
        {id:13, src:"asset/minorArc/diamonds/diamond13.png", isDragging: false, isFlipped: false},
        {id:14, src:"asset/minorArc/diamonds/diamond14.png", isDragging: false, isFlipped: false}
    ],
    swords: [
        {id:1, src:"asset/minorArc/spades/spade01.png", isDragging: false, isFlipped: false},
        {id:2, src:"asset/minorArc/spades/spade02.png", isDragging: false, isFlipped: false},
        {id:3, src:"asset/minorArc/spades/spade03.png", isDragging: false, isFlipped: false},
        {id:4, src:"asset/minorArc/spades/spade04.png", isDragging: false, isFlipped: false},
        {id:5, src:"asset/minorArc/spades/spade05.png", isDragging: false, isFlipped: false},
        {id:6, src:"asset/minorArc/spades/spade06.png", isDragging: false, isFlipped: false},
        {id:7, src:"asset/minorArc/spades/spade07.png", isDragging: false, isFlipped: false},
        {id:8, src:"asset/minorArc/spades/spade08.png", isDragging: false, isFlipped: false},
        {id:9, src:"asset/minorArc/spades/spade09.png", isDragging: false, isFlipped: false},
        {id:10, src:"asset/minorArc/spades/spade10.png", isDragging: false, isFlipped: false},
        {id:11, src:"asset/minorArc/spades/spade11.png", isDragging: false, isFlipped: false},
        {id:12, src:"asset/minorArc/spades/spade12.png", isDragging: false, isFlipped: false},
        {id:13, src:"asset/minorArc/spades/spade13.png", isDragging: false, isFlipped: false},
        {id:14, src:"asset/minorArc/spades/spade14.png", isDragging: false, isFlipped: false}
    ],
    cups: [
        {id:1, src:"asset/minorArc/hearts/heart01.png", isDragging: false, isFlipped: false},
        {id:2, src:"asset/minorArc/hearts/heart02.png", isDragging: false, isFlipped: false},
        {id:3, src:"asset/minorArc/hearts/heart03.png", isDragging: false, isFlipped: false},
        {id:4, src:"asset/minorArc/hearts/heart04.png", isDragging: false, isFlipped: false},
        {id:5, src:"asset/minorArc/hearts/heart05.png", isDragging: false, isFlipped: false},
        {id:6, src:"asset/minorArc/hearts/heart06.png", isDragging: false, isFlipped: false},
        {id:7, src:"asset/minorArc/hearts/heart07.png", isDragging: false, isFlipped: false},
        {id:8, src:"asset/minorArc/hearts/heart08.png", isDragging: false, isFlipped: false},
        {id:9, src:"asset/minorArc/hearts/heart09.png", isDragging: false, isFlipped: false},
        {id:10, src:"asset/minorArc/hearts/heart10.png", isDragging: false, isFlipped: false},
        {id:11, src:"asset/minorArc/hearts/heart11.png", isDragging: false, isFlipped: false},
        {id:12, src:"asset/minorArc/hearts/heart12.png", isDragging: false, isFlipped: false},
        {id:13, src:"asset/minorArc/hearts/heart13.png", isDragging: false, isFlipped: false},
        {id:14, src:"asset/minorArc/hearts/heart14.png", isDragging: false, isFlipped: false}
    ]
};

const allCards = [...suits.wands, ...suits.coins, ...suits.swords, ...suits.cups];

let tableau = {x: 15, y: 230, cards: []};
let stock = {x: 70, y: 50, cards: []};
let waste = {x: 180, y: 50, cards: []};
let foundation = {x: 400, y: 50, cards: [[],[],[],[]]};

/*
TESTING
1. load all cards: DONE
2. when clicked, it flips to waste: DONE
3. make this card move around when dragged:
4. find a way to make the card move and stay within a pack if it is in the correct order

FOR STOCK/DECK:
- when the deck is clicked, allCards array will use shuffleCards() 
- for animation purposes, it will first do the flip or move animation then it will be removed from the stock array and added to the array according to it's placement.

FOR TABLUE:
to each column, a random number will be generated how any cards it will fill

TODO
- change card images style
    - origPic -> https://www.resizepixel.com/download -> https://pixelartvillage.com/ -> change into black and neon green
*/

let cardBack;

function preload(){
    for (let i = 0; i < allCards.length; i++) {
        stock.cards[i] = loadImage(allCards[i].src);
    }
    cardBack = loadImage(suits.cardBack)
}

function setup() {
    createCanvas(900, 550);

    createDeck();
    dealCards();
    mousePressed(...stock.cards);
}

function draw() {
    background(mainColor)
    
    // deck
    rect(stock.x, stock.y, suits.width, suits.height)
    for (let i = 0; i < stock.cards.length; i++){
        image(stock.cards[i], stock.x, stock.y, suits.width, suits.height);
    }
    image(cardBack, stock.x, stock.y, suits.width, suits.height)

    // waste
    rect(waste.x, waste.y, suits.width, suits.height)
    for (let i = 0; i < waste.cards.length; i++){
        image(waste.cards[i], waste.x, waste.y, suits.width, suits.height);
    }

    // tableau
    for (let xPos = 0; xPos < 8; xPos++){
        rect(tableau.x + xPos * 110, tableau.y, suits.width, suits.height);
    }
    
    // foundation
    for(let xPos = 0; xPos < 4; xPos++){
        rect(foundation.x + xPos * 110, foundation.y, suits.width, suits.height);
    }
    
}

function createDeck() {
    // Create a standard 52-card deck
    
}

function shuffleDeck(...deck) {
    for (let i = deck.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [deck[i], deck[j]] = [deck[j], deck[i]];
         }
    return deck;
}1

function dealCards() {
    // Deal cards to tableau, stock, and foundation based on difficulty
}

function mousePressed() {
   
    // deck to waste
    if (mouseX > stock.x && mouseX < stock.x + suits.width && mouseY > stock.y && mouseY < stock.y + suits.height){ 
        // add animation: flipping card https://editor.p5js.org/cmswans/sketches/dDDBmETAP
        
        if(stock.cards.length > 0){
            let flippedCard = stock.cards.shift();
            waste.cards.push(flippedCard);
        }
    } 

        // change cursor into pointer, the `cursor(ARROW)` is not working
    
}
