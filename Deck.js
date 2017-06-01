const Card = require('./Card.js')
// require means importing


//card properties
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }


class Deck {
    constructor () {
    this.allCards = []
    //why do I have to stick the empty array of allCards inside the brackets up here?
    }
  
    makeDeck() {
        for( let i = 0; i < suits.length; i++) {
            for( let j = 0; j < ranks.length; j++){
                this.allCards.push(new Card ( ranks[j] + " of " + suits[i]))
            }
        }
    }
}
//return allCards  why don't I have to return card?
                                
    const myDeck = new Deck() //create an instance of Deck with "new"
    myDeck.makeDeck() //populate the instance with cards (and store in myDeck)
    console.log(myDeck) // => array of 52 instances of Card class bc I pushed cards into allCards
    
    module.export = Deck
    //module.export exports Deck