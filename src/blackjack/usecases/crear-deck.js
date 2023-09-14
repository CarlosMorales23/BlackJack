import _ from 'underscore'
// import { shuffle } from 'underscore'


/**
 * Esta función crea un nuevo deck. 
 * @param {Array<string>} tiposDeCarta Ejemplo ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<string>}  Regresa un nuevo deck. 
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || !tiposEspeciales) throw new ('TiposDeCarta y Tipos Especiales son obligatorio')
    if(tiposDeCarta === 0 || tiposEspeciales === 0) throw new ('TiposDeCarta y Tipos Especiales deben ser string')

    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}