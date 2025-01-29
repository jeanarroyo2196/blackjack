/**
 * 
 * @param {String} carta
 * @returns {HTMLElement}
 */

export const crearCartaHTML = (carta) => {

    if(!carta) throw new Error('Carta es requerida');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}