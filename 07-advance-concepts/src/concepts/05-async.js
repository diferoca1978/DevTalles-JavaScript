import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLdivElement} element - The "element" parameter is the HTML element that the component will be rendered into.
 */
export const asyncComponent = ( element ) => {

  const id1 = '5d86371f9f80b591f499df3'

  findHero(id1)
      .then(({name}) => element.innerHTML = name )
      .catch( error => element.innerHTML = `<h1>${error}</h1>`)
    
}
 
/**
 * 
 * @param {String} id 
 * @returns The `findHero` function is returning the hero object with the specified `id` from the
 * `heroes` array.
 */

const findHero = async(id) => {

  const hero = heroes.find(hero => hero.id === id);
   if ( !hero ) throw new Error(`Hero with id: ${id} not found`)

  return hero;
   
}

