import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLdivElement} element - The "element" parameter is the HTML element that the component will be rendered into.
 */
export const callbackComponent = ( element ) => {


  const id = '5d86371f2343e37870b91ef13';

  findHero( id, ( error, hero ) => {

    if ( error ) {
      element.innerHTML = error;
      return;
    }

    element.innerHTML = hero.name;
    
  } );

}
/**
 * The function `findHero` takes an `id` parameter and a `callback` function, and it searches for a
 * hero with the given `id` in an array called `heroes`. If the hero is found, it is passed to the
 * callback function as the second argument. If the hero is not found, an error message is passed to
 * the callback function as the first argument.
 * @param {string} id - The id parameter is the unique identifier of the hero that we want to find.
 * @param { ( error?: string, hero: object) => void} callback - The callback parameter is a function that will be called once the hero is found or
 * if the hero is not found. It takes two arguments: an error message (null if no error) and the hero
 * object (null if hero is not found).
 * @returns The function `findHero` returns nothing. It only calls the `callback` function with either
 * an error message or the found hero object.
 */
const findHero = (id, callback) => {

  const hero = heroes.find( hero => hero.id === id);
  if (!hero) {
    callback( `Hero with id: ${ id } Not found `);
    return;
  };
  
  callback( null ,hero );

}


