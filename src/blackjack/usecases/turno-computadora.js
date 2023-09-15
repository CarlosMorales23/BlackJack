import { pedirCarta, valorCarta } from "./";


/**
 * Turno de la computadora
 * @param {Number} puntosMinimos pts min que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos acumulados
 * @param {HTMLElement} divCartasComputadora Campo donde se muestran las cartas
 * @param {Array<string>} deck cartas del deck

 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos  ||  isNaN(puntosMinimos) ) throw new Error('Puntos minimos son necesarios, y debe ser un numero')
    if( !deck ) throw new Error('El deck necesario, y debe ser un array string')
    if( !puntosHTML ) throw new Error('Los puntosHTML son necesarios, y debe ser un array string')
    if( !divCartasComputadora ) throw new Error('Es necesario recibirlo para poder renderizar las cartas')
    
    let puntosComputadora = 0; 

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');


        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}