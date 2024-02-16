import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLdivElement} element - The "element" parameter is the HTML element that the component will be rendered into.
 */
export const promisesComponent = ( element ) => {
  
  const renderHero = ( hero ) => {
    element.innerHTML = hero.name 
  }

  const renderTwoheroes = (hero1, hero2) => {
    element.innerHTML = `
    <h3>${hero1.name}</h3>
    <h3>${hero2.name}</h3>
    `
  }

  
  const id = "5d86371fd55e2e2a30fe1ccb1"
  

  const renderError = (error) => {
     element.innerHTML = `
     <h1>Error:</h1>
     <h2> ${ error }</h2>
     `
  }

  findHero( id )//.then (superHero => renderHero(superHero))
      .then(renderHero) // Here we're only passing the reference of the function (renderHero) because of we have the same number of       arguments and the same order into the method (then()).   
      .catch(renderError)

// Using Promise.All to bring two heroes.

      const id1 = "5d86371f233c9f2425f16916";
      const id2 = "5d86371f97c29d020f1e1f6d";

  Promise.all([
    findHero(id1),
    findHero(id2)
  ]).then(([hero1, hero2]) => renderTwoheroes(hero1, hero2))
    .catch(renderError)
}


/**
 * 
 * @param {String} id - The `id` parameter is the unique identifier of the hero that we want to find.
 * @returns {promise} The function `findHero` returns a Promise.
 */
const findHero = (id) => {

  return new Promise((resolve, reject) => {
    
  const hero = heroes.find((hero) => hero.id === id);
    
    if (hero) {
      resolve(hero);
      return
    }

    reject( `Hero with id: ${id} not found` );

  });
}

