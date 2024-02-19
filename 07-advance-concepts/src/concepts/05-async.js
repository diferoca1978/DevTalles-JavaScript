import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLdivElement} element - The "element" parameter is the HTML element that the component will be rendered into.
 */
export const asyncComponent = ( element ) => {

  const id1 = '5d86371f9f80b591f499df32'

  findHero(id1)
      .then(({name}) => element.innerHTML = name )
    
}
 
/**
 * 
 * @param {String} id 
 * @returns The `findHero` function is returning the hero object with the specified `id` from the
 * `heroes` array.
 */

const findHero = async(id) => {

  const hero = heroes.find(hero => hero.id === id);

  return hero;
   
}

