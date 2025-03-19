const timerDisplay = document.getElementById('timer-display');
const scores = document.getElementById('scores-display');
const moves = document.getElementById('moves-display');
const newGameBtn = document.getElementById("new-game");
const restartBtn = document.getElementById("restart");
const pauseBtn = document.getElementById("pause");
let [milliseconds, seconds, minutes] = [0, 0, 0];
let int = null;
let score = 0;
let move = 0;

newGameBtn.addEventListener("click", () => {
    if(int !== null){
        clearInterval(int);
    }
    timerDisplay.style.color = "#16F529";
    int = setInterval(displayTimer, 10);
});

restartBtn.addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timerDisplay.innerHTML = "00 : 00";
    timerDisplay.style.color = "white";
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

// MAIN DECK
 
const deck = {
    wands: [
        {id:1, src:"asset/minorArc/clubs/club01.png"}, 
        {id:2, src:"asset/minorArc/clubs/club02.png"}, 
        {id:3, src:"asset/minorArc/clubs/club03.png"}, 
        {id:4, src:"asset/minorArc/clubs/club04.png"}, 
        {id:5, src:"asset/minorArc/clubs/club05.png"}, 
        {id:6, src:"asset/minorArc/clubs/club06.png"}, 
        {id:7, src:"asset/minorArc/clubs/club07.png"}, 
        {id:8, src:"asset/minorArc/clubs/club08.png"}, 
        {id:9, src:"asset/minorArc/clubs/club09.png"}, 
        {id:10, src:"asset/minorArc/clubs/club10.png"}, 
        {id:11, src:"asset/minorArc/clubs/club11.png"}, 
        {id:12, src:"asset/minorArc/clubs/club12.png"}, 
        {id:13, src:"asset/minorArc/clubs/club13.png"},
        {id:14, src:"asset/minorArc/clubs/club14.png"}
    ],
    coins: [
        {id:1, src:"asset/minorArc/diamonds/diamond01.png"},
        {id:2, src:"asset/minorArc/diamonds/diamond02.png"},
        {id:3, src:"asset/minorArc/diamonds/diamond03.png"},
        {id:4, src:"asset/minorArc/diamonds/diamond04.png"},
        {id:5, src:"asset/minorArc/diamonds/diamond05.png"},
        {id:6, src:"asset/minorArc/diamonds/diamond06.png"},
        {id:7, src:"asset/minorArc/diamonds/diamond07.png"},
        {id:8, src:"asset/minorArc/diamonds/diamond08.png"},
        {id:9, src:"asset/minorArc/diamonds/diamond09.png"},
        {id:10, src:"asset/minorArc/diamonds/diamond10.png"},
        {id:11, src:"asset/minorArc/diamonds/diamond11.png"},
        {id:12, src:"asset/minorArc/diamonds/diamond12.png"},
        {id:13, src:"asset/minorArc/diamonds/diamond13.png"},
        {id:14, src:"asset/minorArc/diamonds/diamond14.png"}
    ],
    swords: [
        {id:1, src:"asset/minorArc/spades/spade01.png"},
        {id:2, src:"asset/minorArc/spades/spade02.png"},
        {id:3, src:"asset/minorArc/spades/spade03.png"},
        {id:4, src:"asset/minorArc/spades/spade04.png"},
        {id:5, src:"asset/minorArc/spades/spade05.png"},
        {id:6, src:"asset/minorArc/spades/spade06.png"},
        {id:7, src:"asset/minorArc/spades/spade07.png"},
        {id:8, src:"asset/minorArc/spades/spade08.png"},
        {id:9, src:"asset/minorArc/spades/spade09.png"},
        {id:10, src:"asset/minorArc/spades/spade10.png"},
        {id:11, src:"asset/minorArc/spades/spade11.png"},
        {id:12, src:"asset/minorArc/spades/spade12.png"},
        {id:13, src:"asset/minorArc/spades/spade13.png"},
        {id:14, src:"asset/minorArc/spades/spade14.png"}
    ],
    cups: [
        {id:1, src:"asset/minorArc/hearts/heart01.png"},
        {id:2, src:"asset/minorArc/hearts/heart02.png"},
        {id:3, src:"asset/minorArc/hearts/heart03.png"},
        {id:4, src:"asset/minorArc/hearts/heart04.png"},
        {id:5, src:"asset/minorArc/hearts/heart05.png"},
        {id:6, src:"asset/minorArc/hearts/heart06.png"},
        {id:7, src:"asset/minorArc/hearts/heart07.png"},
        {id:8, src:"asset/minorArc/hearts/heart08.png"},
        {id:9, src:"asset/minorArc/hearts/heart09.png"},
        {id:10, src:"asset/minorArc/hearts/heart10.png"},
        {id:11, src:"asset/minorArc/hearts/heart11.png"},
        {id:12, src:"asset/minorArc/hearts/heart12.png"},
        {id:13, src:"asset/minorArc/hearts/heart13.png"},
        {id:14, src:"asset/minorArc/hearts/heart14.png"}
    ]
};

const allCards = [...suits.wands, ...suits.coins, ...suits.swords, ...suits.cups];

let tableau = [];
let stock = [];
let waste = [];
let foundation = [];

function preload(){

}

function setup() {
    createDeck();
    shuffleDeck(allCards);
    dealCards();
}

function createDeck() {
    // Create a standard 52-card deck
}

function dealCards() {
    // Deal cards to tableau, stock, and foundation based on difficulty
}

function draw() {
    // Render the game state
}

function mousePressed() {
    // Handle card interactions
}