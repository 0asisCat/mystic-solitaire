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
let origX = 450;
let origY = 500;

let suits = {
    width: 110,
    height: 160,
    cardBack: "./asset/cardBack.png",
    wands: [
        {id:1, src:"asset/minorArc/clubs/club01.png", x:  origX, y: origY}, 
        {id:2, src:"asset/minorArc/clubs/club02.png", x: origX, y: origY}, 
        {id:3, src:"asset/minorArc/clubs/club03.png", x: origX, y: origY}, 
        {id:4, src:"asset/minorArc/clubs/club04.png", x: origX, y: origY}, 
        {id:5, src:"asset/minorArc/clubs/club05.png", x: origX, y: origY}, 
        {id:6, src:"asset/minorArc/clubs/club06.png", x: origX, y: origY}, 
        {id:7, src:"asset/minorArc/clubs/club07.png", x: origX, y: origY}, 
        {id:8, src:"asset/minorArc/clubs/club08.png", x: origX, y: origY}, 
        {id:9, src:"asset/minorArc/clubs/club09.png", x: origX, y: origY}, 
        {id:10, src:"asset/minorArc/clubs/club10.png", x: origX, y: origY}, 
        {id:11, src:"asset/minorArc/clubs/club11.png", x: origX, y: origY}, 
        {id:12, src:"asset/minorArc/clubs/club12.png", x: origX, y: origY}, 
        {id:13, src:"asset/minorArc/clubs/club13.png", x: origX, y: origY},
        {id:14, src:"asset/minorArc/clubs/club14.png", x: origX, y: origY}
    ],
    coins: [
        {id:1, src:"asset/minorArc/diamonds/diamond01.png", x: origX, y: origY},
        {id:2, src:"asset/minorArc/diamonds/diamond02.png", x: origX, y: origY},
        {id:3, src:"asset/minorArc/diamonds/diamond03.png", x: origX, y: origY},
        {id:4, src:"asset/minorArc/diamonds/diamond04.png", x: origX, y: origY},
        {id:5, src:"asset/minorArc/diamonds/diamond05.png", x: origX, y: origY},
        {id:6, src:"asset/minorArc/diamonds/diamond06.png", x: origX, y: origY},
        {id:7, src:"asset/minorArc/diamonds/diamond07.png", x: origX, y: origY},
        {id:8, src:"asset/minorArc/diamonds/diamond08.png", x: origX, y: origY},
        {id:9, src:"asset/minorArc/diamonds/diamond09.png", x: origX, y: origY},
        {id:10, src:"asset/minorArc/diamonds/diamond10.png", x: origX, y: origY},
        {id:11, src:"asset/minorArc/diamonds/diamond11.png", x: origX, y: origY},
        {id:12, src:"asset/minorArc/diamonds/diamond12.png", x: origX, y: origY},
        {id:13, src:"asset/minorArc/diamonds/diamond13.png", x: origX, y: origY},
        {id:14, src:"asset/minorArc/diamonds/diamond14.png", x: origX, y: origY}
    ],
    swords: [
        {id:1, src:"asset/minorArc/spades/spade01.png", x: origX, y: origY},
        {id:2, src:"asset/minorArc/spades/spade02.png", x: origX, y: origY},
        {id:3, src:"asset/minorArc/spades/spade03.png", x: origX, y: origY},
        {id:4, src:"asset/minorArc/spades/spade04.png", x: origX, y: origY},
        {id:5, src:"asset/minorArc/spades/spade05.png", x: origX, y: origY},
        {id:6, src:"asset/minorArc/spades/spade06.png", x: origX, y: origY},
        {id:7, src:"asset/minorArc/spades/spade07.png", x: origX, y: origY},
        {id:8, src:"asset/minorArc/spades/spade08.png", x: origX, y: origY},
        {id:9, src:"asset/minorArc/spades/spade09.png", x: origX, y: origY},
        {id:10, src:"asset/minorArc/spades/spade10.png", x: origX, y: origY},
        {id:11, src:"asset/minorArc/spades/spade11.png", x: origX, y: origY},
        {id:12, src:"asset/minorArc/spades/spade12.png", x: origX, y: origY},
        {id:13, src:"asset/minorArc/spades/spade13.png", x: origX, y: origY},
        {id:14, src:"asset/minorArc/spades/spade14.png", x: origX, y: origY}
    ],
    cups: [
        {id:1, src:"asset/minorArc/hearts/heart01.png", x: origX, y: origY},
        {id:2, src:"asset/minorArc/hearts/heart02.png", x: origX, y: origY},
        {id:3, src:"asset/minorArc/hearts/heart03.png", x: origX, y: origY},
        {id:4, src:"asset/minorArc/hearts/heart04.png", x: origX, y: origY},
        {id:5, src:"asset/minorArc/hearts/heart05.png", x: origX, y: origY},
        {id:6, src:"asset/minorArc/hearts/heart06.png", x: origX, y: origY},
        {id:7, src:"asset/minorArc/hearts/heart07.png", x: origX, y: origY},
        {id:8, src:"asset/minorArc/hearts/heart08.png", x: origX, y: origY},
        {id:9, src:"asset/minorArc/hearts/heart09.png", x: origX, y: origY},
        {id:10, src:"asset/minorArc/hearts/heart10.png", x: origX, y: origY},
        {id:11, src:"asset/minorArc/hearts/heart11.png", x: origX, y: origY},
        {id:12, src:"asset/minorArc/hearts/heart12.png", x: origX, y: origY},
        {id:13, src:"asset/minorArc/hearts/heart13.png", x: origX, y: origY},
        {id:14, src:"asset/minorArc/hearts/heart14.png", x: origX, y: origY}
    ]
};

const allCards = [...suits.wands, ...suits.coins, ...suits.swords, ...suits.cups];

let tableau = {x: 15, y: 230, cards: []};
let stock = {x: 70, y: 50, cards: []};
let waste = {x: 193, y: 50, cards: []};
let foundation = {x: 400, y: 50, cards: [[],[],[],[]]};

/*
TESTING
1. load all cards: DONE
2. when clicked, it flips to waste: DONE
3. make the cards draggable:
    - find a way to make the card move and stay within a pack if it is in the correct order
4. make the Fisher-Yates Algo work to randomize the deck:
5. randomly transfer them to the tabluea card array:

!!! CHANGES:
1. Similar to Solitaire Mobile, teh cards will all start in the bottom part, then it will be randomly transferred to the tableau arrays, with random quantity, the remaining will fall in the deck/stock.
2. The cards will are animatedly moving.
3. use random(min,max) for randome order of cards or placement in tableau?

FOR STOCK/DECK:
- when the deck is clicked, allCards array will use shuffleCards() 
- for animation purposes, it will first do the flip or move animation then it will be removed from the stock array and added to the array according to it's placement.

FOR TABLUE:
to each column, a random number will be generated how any cards it will fill

TODO
- change card images style
    - origPic -> https://www.resizepixel.com/download -> https://pixelartvillage.com/ -> change into black and neon green
*/
let isDragging = false;
let isAnimation = false;
let cardImg = [];
let cardBack;

function preload() {
    for (let i = 0; i < allCards.length; i++) {
        cardImg[i] = loadImage(allCards[i].src);
    }
    cardBack = loadImage(suits.cardBack)
}

function setup() {
    createCanvas(1000, 650);

    
}

function draw() {
    background(mainColor)
    
    // start
    for (let i = 0; i < cardImg.length; i++){
        image(cardImg[i], allCards[i].x, allCards[i].y, suits.width, suits.height);
    }

    // deck
    image(cardBack, stock.x, stock.y, suits.width, suits.height)

    // waste
    rect(waste.x, waste.y, suits.width, suits.height) // base
    for (let i = 0; i < waste.cards.length; i++){
        image(waste.cards[i], waste.x, waste.y, suits.width, suits.height);
    }

    // tableau
    for (let xPos = 0; xPos < 8; xPos++){
        rect(tableau.x + xPos * 123, tableau.y, suits.width, suits.height);
    } // base
    
    // foundation
    for(let xPos = 0; xPos < 4; xPos++){
        rect(foundation.x + xPos * 123, foundation.y, suits.width, suits.height);
    } // base

}

function createDeck() {
    
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [deck[i], deck[j]] = [deck[j], deck[i]];
         }
    return deck;
}

function dealCards() {
    // Deal cards to tableau, stock, and foundation based on difficulty
}

function mousePressed() {
   
    // deck to waste
    if (mouseX > stock.x && mouseX < stock.x + suits.width && mouseY > stock.y && mouseY < stock.y + suits.height){ 
        // change cursor into pointer, the `cursor(ARROW)` is not working
        // add animation: flipping card https://editor.p5js.org/cmswans/sketches/dDDBmETAP
        // ig you'll add delay before shift()

        if(stock.cards.length > 0){
            let flippedCard = stock.cards.shift();
            waste.cards.push(flippedCard);
        }
    } 

    if (mouseX > waste.x && mouseX < waste.x + suits.width && mouseY > waste.y && mouseY < waste.y + suits.height){ 
        
    }

}

function mouseReleased() {
  
}


/* TEST CODES: 
let origX = 150;
let origY = 300;
let baseY = 50;
let arrX = [
  {x: 0, y: baseY, cards: []}, 
  {x: 100, y: baseY, cards: []}, 
  {x: 200, y: baseY, cards: []}, 
  {x: 300, y: baseY, cards: []}
];
let w = 100;
let h = 100;
let imgs = [
  {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd1Uhy1FLc4WF45Llptp0lCkVtGkJmhUIjg&s"},
  {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9naPSp2gFq9RZrln7BfVFv31C5kYgSDIQLw&s"},
  {src: "https://upload.wikimedia.org/wikipedia/en/3/3d/Longcat_is_loooooooooong.jpg"},
  {src: "https://i.giphy.com/GRk3GLfzduq1NtfGt5.webp"}, 
  {src: "https://media.tenor.com/k_UsDt9xfWIAAAAM/i-will-eat-you-cat.gif"}, 
  {src: "https://creatorset.com/cdn/shop/files/Green_Screen__cat_side_eye.png?v=1704921539"}, 
  {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1HssLLgEPzMlc5Dgpp6K9Lz5-DDonmcE5g&s"}, 
  {src: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84bd0af216d36ce4b0709d4992"},
  {src: "https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-full-719a53dc.webp"},
  {src: "https://media.tenor.com/fXbXPsPYFcwAAAAM/obitoszn.gif"},
  {src: "https://media1.tenor.com/m/kwM4_YQ1990AAAAC/cheifin-cheifin-dat-hoe.gif"},
  {src: "https://media.tenor.com/zZHucbOQIaEAAAAM/tiktok-dog-awkward-dog.gif"}
];
let loadImg = [];
let currentImgIndex = 0;
let isAnimating = false;
let animationComplete = false;
let movingImages = [];
let stackOffset = 20;
let animationSpeed = 0.8;
let distributionInterval = 170; // ms between card distributions
let lastDistributionTime = 0;
let distributionStarted = false;

function preload() {
  for (let i = 0; i < imgs.length; i++) {
    loadImg[i] = loadImage(imgs[i].src);
  }
}

function setup() {
  createCanvas(400, 400);
  shuffleDeck();
}

function draw() {
  background(220);
  
  // Draw empty boxes
  fill(255);
  for (let i = 0; i < arrX.length; i++) {
    rect(arrX[i].x, arrX[i].y, w, h);
  }
  
  // Draw all cards in their boxes (stacked)
  for (let i = 0; i < arrX.length; i++) {
    for (let j = 0; j < arrX[i].cards.length; j++) {
      image(
        arrX[i].cards[j].img, 
        arrX[i].x, 
        arrX[i].y + j * stackOffset, 
        w, h
      );
    }
  }
  
  // Draw and animate all moving images
  for (let i = movingImages.length - 1; i >= 0; i--) {
    let img = movingImages[i];
    image(img.img, img.x, img.y, w, h);
    
    // Calculate target position
    let targetBox = img.targetIndex % arrX.length;
    let targetX = arrX[targetBox].x;
    let targetY = arrX[targetBox].y + (arrX[targetBox].cards.length * stackOffset);
    
    // Move towards target
    img.x += (targetX - img.x) * animationSpeed;
    img.y += (targetY - img.y) * animationSpeed;
    
    // Check if reached target
    if (dist(img.x, img.y, targetX, targetY) < 2) {
      // Add to the box's cards array
      arrX[targetBox].cards.push({
        img: img.img,
        x: targetX,
        y: targetY
      });
      
      // Remove this moving image
      movingImages.splice(i, 1);
    }
  }
  
  // Automatic distribution logic
  if (distributionStarted && millis() - lastDistributionTime > distributionInterval) {
    if (currentImgIndex < loadImg.length) {
      distributeNextCard();
      lastDistributionTime = millis();
    } else {
      distributionStarted = false;
    }
  }
  
  // Draw clickable deck (only if not all cards distributed)
  if (!distributionStarted && currentImgIndex < loadImg.length) {
    fill("red");
    rect(origX, origY, w, h);
    fill(0);
    text("CLICK ME", origX + 20, origY + 60);
  }
}

function distributeNextCard() {
  if (currentImgIndex < loadImg.length) {
    let targetBox = currentImgIndex % arrX.length;
    movingImages.push({
      img: loadImg[currentImgIndex],
      x: origX,
      y: origY,
      targetIndex: currentImgIndex
    });
    currentImgIndex++;
  }
}

function shuffleDeck() {
  for (let i = loadImg.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [loadImg[i], loadImg[j]] = [loadImg[j], loadImg[i]];
  }
}

function mouseClicked() {
  if (!distributionStarted && currentImgIndex < loadImg.length && 
      mouseX > origX && mouseX < origX + w && 
      mouseY > origY && mouseY < origY + h) {
    distributionStarted = true;
    lastDistributionTime = millis();
  }
}

function touchStarted() {
  mouseClicked();
}
*/