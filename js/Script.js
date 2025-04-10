const timerDisplay = document.getElementById('timer-display');
const scores = document.getElementById('scores-display');
const moves = document.getElementById('moves-display');
const newGameBtn = document.getElementById("new-game");
const restartBtn = document.getElementById("restart");
const pauseBtn = document.getElementById("pause");
const mainColor = "white" /*#16F529 neongreen*/

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
const suits = {
    width: 90,
    height: 140,
    cardBack: {src:"./asset/cardBack.png"},
    wands: [
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

let tableau = [];
let stock = [];
let waste = [];
let foundation = [[],[],[],[]];

/*
TESTING
1. load one, two, or three card first +
2. when clicked, it flips from front to back
3. make this card move around when dragged 

1. render all cards at the stock
2. when in stock, should be facing back
- when clicked it will move in the waste
3. shuffle cards randomly
!4. randomly divide cards within the tableau
5. should be draggable
6. can only move to other places when its in correct order
7. when its aces, can be moved to the foundation

TODO
- change card images style
    - origPic -> https://www.resizepixel.com/download -> https://pixelartvillage.com/ -> change into black and neon green
*/

function preload(){
    // cardBack = loadImage("./asset/cardBack.png");
    for (let i = 0; i < allCards.length; i++) {
        stock[i] = loadImage(allCards[i].src);
    }
}

function setup() {
    createCanvas(900, 550)
    //createDeck();
    //shuffleDeck(allCards);
    //dealCards();
}

function draw() {
    background(mainColor)
    
    // deck


    // waste
    stroke("black")
    strokeWeight(2)
    rect(180, 50, 90, 140)

    // image test
    // image(cardBack, 70, 50, 90, 140)

    // foundation
    stroke("black")
    strokeWeight(2)
    for(let xPos = 0; xPos < 4; xPos++){
        rect(430 + xPos * 100, 50, 90, 140)
    }

    // tableau
    
}

function createDeck() {
    // Create a standard 52-card deck
    
}

function shuffleDeck() {
    // Deal cards to tableau, stock, and foundation based on difficulty
}

function dealCards() {
    // Deal cards to tableau, stock, and foundation based on difficulty
}

function mousePressed() {
    // Handle card interactions
}
