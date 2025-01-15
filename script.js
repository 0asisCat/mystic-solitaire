// create a function that generate a random pile of cards
// then this function will be applied one by one to the 7 piles
// the missing card will be placed in the stock deck

// a function that will update the score board
    // time: when the game commence the timer will start
    // score
    // moves

// research about code animation for the cards
// enhance the ui design


const timer = document.getElementById('timer');
const scores = document.getElementById('score');
const moves = document.getElementById('moves');
let time = 0;
let score = 0;
let move = 0;

const suits = {
    wands: [
        {id:1, imagePath:"imgs/minorArc/clubs/club01.png"}, 
        {id:2, imagePath:"imgs/minorArc/clubs/club02.png"}, 
        {id:3, imagePath:"imgs/minorArc/clubs/club03.png"}, 
        {id:4, imagePath:"imgs/minorArc/clubs/club04.png"}, 
        {id:5, imagePath:"imgs/minorArc/clubs/club05.png"}, 
        {id:6, imagePath:"imgs/minorArc/clubs/club06.png"}, 
        {id:7, imagePath:"imgs/minorArc/clubs/club07.png"}, 
        {id:8, imagePath:"imgs/minorArc/clubs/club08.png"}, 
        {id:9, imagePath:"imgs/minorArc/clubs/club09.png"}, 
        {id:10, imagePath:"imgs/minorArc/clubs/club10.png"}, 
        {id:11, imagePath:"imgs/minorArc/clubs/club11.png"}, 
        {id:12, imagePath:"imgs/minorArc/clubs/club12.png"}, 
        {id:13, imagePath:"imgs/minorArc/clubs/club13.png"},
        {id:14, imagePath:"imgs/minorArc/clubs/club14.png"}
    ],
    coins: [
        {id:1, imagePath:"imgs/minorArc/diamonds/diamond01.png"},
        {id:2, imagePath:"imgs/minorArc/diamonds/diamond02.png"},
        {id:3, imagePath:"imgs/minorArc/diamonds/diamond03.png"},
        {id:4, imagePath:"imgs/minorArc/diamonds/diamond04.png"},
        {id:5, imagePath:"imgs/minorArc/diamonds/diamond05.png"},
        {id:6, imagePath:"imgs/minorArc/diamonds/diamond06.png"},
        {id:7, imagePath:"imgs/minorArc/diamonds/diamond07.png"},
        {id:8, imagePath:"imgs/minorArc/diamonds/diamond08.png"},
        {id:9, imagePath:"imgs/minorArc/diamonds/diamond09.png"},
        {id:10, imagePath:"imgs/minorArc/diamonds/diamond10.png"},
        {id:11, imagePath:"imgs/minorArc/diamonds/diamond11.png"},
        {id:12, imagePath:"imgs/minorArc/diamonds/diamond12.png"},
        {id:13, imagePath:"imgs/minorArc/diamonds/diamond13.png"},
        {id:14, imagePath:"imgs/minorArc/diamonds/diamond14.png"}
    ],
    swords: [
        {id:1, imagePath:"imgs/minorArc/spades/spade01.png"},
        {id:2, imagePath:"imgs/minorArc/spades/spade02.png"},
        {id:3, imagePath:"imgs/minorArc/spades/spade03.png"},
        {id:4, imagePath:"imgs/minorArc/spades/spade04.png"},
        {id:5, imagePath:"imgs/minorArc/spades/spade05.png"},
        {id:6, imagePath:"imgs/minorArc/spades/spade06.png"},
        {id:7, imagePath:"imgs/minorArc/spades/spade07.png"},
        {id:8, imagePath:"imgs/minorArc/spades/spade08.png"},
        {id:9, imagePath:"imgs/minorArc/spades/spade09.png"},
        {id:10, imagePath:"imgs/minorArc/spades/spade10.png"},
        {id:11, imagePath:"imgs/minorArc/spades/spade11.png"},
        {id:12, imagePath:"imgs/minorArc/spades/spade12.png"},
        {id:13, imagePath:"imgs/minorArc/spades/spade13.png"},
        {id:14, imagePath:"imgs/minorArc/spades/spade14.png"}
    ],
    cups: [
        {id:1, imagePath:"imgs/minorArc/hearts/heart01.png"},
        {id:2, imagePath:"imgs/minorArc/hearts/heart02.png"},
        {id:3, imagePath:"imgs/minorArc/hearts/heart03.png"},
        {id:4, imagePath:"imgs/minorArc/hearts/heart04.png"},
        {id:5, imagePath:"imgs/minorArc/hearts/heart05.png"},
        {id:6, imagePath:"imgs/minorArc/hearts/heart06.png"},
        {id:7, imagePath:"imgs/minorArc/hearts/heart07.png"},
        {id:8, imagePath:"imgs/minorArc/hearts/heart08.png"},
        {id:9, imagePath:"imgs/minorArc/hearts/heart09.png"},
        {id:10, imagePath:"imgs/minorArc/hearts/heart10.png"},
        {id:11, imagePath:"imgs/minorArc/hearts/heart11.png"},
        {id:12, imagePath:"imgs/minorArc/hearts/heart12.png"},
        {id:13, imagePath:"imgs/minorArc/hearts/heart13.png"},
        {id:14, imagePath:"imgs/minorArc/hearts/heart14.png"}
    ]
}


const generateRandomPile = () => {};