
/**
 * 
 * @param {String} carta 
 * @returns {htmlElement} imagen de retorno
 */
export const crearCartaHTML = ( carta ) => {

    if (!carta) throw new Error ('se necesita minimo una carta')

const imgCarta = document.createElement('img');
imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
imgCarta.classList.add('carta');



return imgCarta
}

