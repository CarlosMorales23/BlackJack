
/**
 * Esta función entregara una carta
 * @param {Array<string>} deck Ejemplo ['C','D','H','S','A','J','Q','K']
 * @returns {<string>}  Regresa una nueva carta. 
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( deck.length === 0 || !deck.length ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}