const Card = require('./Card.js')
// require means importing


const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']


class Deck {
    
    
    constructor () {
    
    this.allCards = []
    //why do I have to stick the empty array of allCards inside the brackets up here?
    }
  
    makeDeck() {
        
        for( let i = 0; i < suits.length; i++) {
            for( let j = 0; j < ranks.length; j++){
                this.allCards.push(new Card (  suits[i], ranks[j]))
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
    
    
    
    
//splice returns an array.  it is going to find a random card and pick 1 of them at the 0 position.
    
//hand will be an array that has 26 cards in it