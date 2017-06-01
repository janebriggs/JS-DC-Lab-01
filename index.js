var prompt = require('prompt')  
var Player = require('Player.js')

  // Start the prompt
  prompt.start();
  // Get two property username
  prompt.get(['playerOneUsername', 'playerTwoUsername'], function (err, result) 
//how do err and result work?
      var playerOne = new Player (result.playerOneUsername)
      var playerTwo = new Player (result.playerTwoUsername)
    // Log the results.
    console.log("Hello, let's play War!");
    console.log('  username: ' + result.username);
  });


////shuffle the deck
//function shuffle(deckOfCards) {
//    var m = deckOfCards.length; 
//    var t;
//    var i;
//
//  // While there remain elements to shuffle…
//  while (m) {
//
//    // Pick a remaining element…
//    i = Math.floor(Math.random() * m--);
//
//    // And swap it with the current element.
//    t = deckOfCards[m];
//    deckOfCards[m] = deckOfCards[i];
//    deckOfCards[i] = t;
//  }
//
//  return deckOfCards;
//}
//
//let shuffledCards = shuffle(deckOfCards)
//console.log(shuffledCards)
//    
//
//
//// setting a class for an entire deck so that I can then deal the deck out to each player
//class Deck {
//    constructor (wholeDeck)
//    //method for deal deck to each instance of player
//    this.wholeDeck = wholeDeck
//    dealHalf () {
//        
//    }
//}   
//
//





