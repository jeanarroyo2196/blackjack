import { pedirCarta } from './pedir-carta';
import { valorCarta } from './valor-carta';
import { crearCartaHTML } from './crear-carta-html';

/**
 *
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
  if (!puntosMinimos) throw new Error('Puntos minimos es requerido');
  if (!deck) throw new Error('El deck es requerido');
  if (!puntosHTML) throw new Error('El argumento puntos html es requerido');

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);

    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana :(');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana');
    } else if (puntosComputadora > 21) {
      alert('Jugador Gana');
    } else {
      alert('Computadora Gana');
    }
  }, 100);
};
