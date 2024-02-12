


/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck 
 * @returns {Array <string>} retorna un array de cartas
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}