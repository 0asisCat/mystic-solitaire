# Mystical Solitaire
A terminal themed solitaire game with a mystical twist. A project for my p5.js study.


_NOTE: Not the final documentation, but rather a messy draft from researching or AI help_
```
https://www.google.com/logos/fnbx/solitaire/standalone.html 
rules/inspo: 
  - https://jackofwandstarot.wordpress.com/2017/06/30/playing-tarot-solitaire/
  - https://youtu.be/LYmK23QAFZg
  - https://codepen.io/bfa/pen/ggGYeE
  - https://www.solitairebliss.com/


clubs = wands (clubs, staves) = fire (passion, creativity) = masculine = aries, leo, sagittarius
diamonds = pentacles (coins, discs) = earth (material possessions, physicality) = feminine = taurus, virgo, capricorn
spades = swords = air (clarity, reason) = masculine = gemini, libra, aquarius
hearts = cups (chalices) = water (fluidity, emotions) = feminine = cancer, scorpio, pisces

GAME OPTION: (1) NORMAL SOLITAIRE (2) TAROT SOLITAIRE
```

# Randomizing the Deck

1. **Fisher-Yates Shuffle (Knuth Shuffle)**:
   - This is a well-known algorithm for shuffling an array. It ensures that each permutation of the array is equally likely.
   - **Implementation**:
     ```javascript
     function shuffleDeck(deck) {
         for (let i = deck.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [deck[i], deck[j]] = [deck[j], deck[i]];
         }
         return deck;
     }
     ```

2. **Random Sampling**:
   - If you want to create a deck with specific cards for different modes, you can randomly sample from a larger set of cards.
   - This can be useful if you want to create a "hard" mode with fewer cards or specific card distributions.

# Card Positioning

1. **Grid Layout**:
   - For solitaire, you typically have a grid layout. You can define a 2D array or a set of coordinates for where each card should be placed.
   - For example, you can define positions for the tableau, stock, waste, and foundation piles.

2. **Randomized Start Positions**:
   - After shuffling the deck, you can randomly assign cards to different positions in the tableau. Ensure that the rules of solitaire are followed (e.g., only certain cards can be face-up).

# Difficulty Levels

1. **Easy Mode**:
   - Start with a full deck and allow players to see more cards face-up in the tableau.
   - You can also provide hints or allow players to undo moves.

2. **Medium Mode**:
   - Use a standard setup with a mix of face-up and face-down cards.
   - Limit the number of hints or undos available.

3. **Hard Mode**:
   - Use fewer cards in the tableau or a more complex arrangement.
   - Limit the number of moves or provide fewer hints.
   - You can also introduce specific rules, such as requiring players to build sequences in a certain way.

### Additional Considerations

- **Card Movement Logic**: Implement rules for how cards can be moved between piles, including valid moves and restrictions based on card colors and ranks.
- **Game State Management**: Keep track of the game state, including the current tableau, stock, waste, and foundation piles. This will help you manage the game flow and implement features like undo and redo.
- **User Interface**: Use p5.js to create an engaging user interface. You can draw cards, piles, and other UI elements using p5.js's drawing functions.
