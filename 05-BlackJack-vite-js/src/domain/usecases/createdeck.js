import _ from 'underscore';

 //* This is a way to better commet our code.
/**
 * 
 * @param {Array <string>} cardsTypes eg = ['C','D','H','S']
 * @param {Array <string>} special eg = ['A','J','Q','K']
 * @returns {Array <string>} return a new deck of cards 
 */


export const createDeck = (cardsTypes, special) => {

    if (!Array.isArray(cardsTypes) || !Array.isArray(special)) throw new Error('Car types and special must be arrays')
    if (cardsTypes.length === 0 ||special.length === 0) throw new Error('card types and special must be greater than cero')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let type of cardsTypes ) {
            deck.push( i + type);
        }
    }

    for( let type of cardsTypes ) {
        for( let esp of special ) {
            deck.push( esp + type);
        }
    }

    deck = _.shuffle( deck );
    
    return deck
}