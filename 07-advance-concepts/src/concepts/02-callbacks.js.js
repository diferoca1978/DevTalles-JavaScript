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
 * The function `findHero` takes an `id` parameter and a `callback` function, and it finds a hero
 * object with the matching id and passes it to the callback function.
 * @param {string} id - The id parameter is the unique identifier of the hero that we want to find.
 * @param { ( error?: string, hero: object) => void} callback - The callback parameter is a function that will be called with the hero object as
 * an argument.
 */
const findHero = (id, callback) => {

  const hero = heroes.find( hero => hero.id === id);
  if (!hero) {
    callback( `Hero with id: ${ id } Not found `);
    return;
  };
  
  callback( null ,hero );

}


