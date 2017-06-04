

const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

class Card {
    constructor (suit, rank) {
        this.suit = suit
        this.rank = rank
        this.score = rankScores[rank]
        //rank must be in brackets because you are using it as a variable and then accessing it in rankScores
        this.title = `${rank} of ${suit}`
        }
}
let tenOfHearts = new Card ('hearts', 'ten')
console.log(tenOfHearts)

module.exports = Card


//example of bracket usage
//var myOjb - {
//    "a": 1,
//    "b": 2,
//    "c": 3,
//}
//
//var myVar = "c";
//
//myObj.a = 1
//my.Obj[a] = 1
//
//myObj.myVar // underfined
//myObj[myVar] = 3
//myObj["c"] = 3