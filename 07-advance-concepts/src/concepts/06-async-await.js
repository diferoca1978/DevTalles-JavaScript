import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLdivElement} element - The "element" parameter is the HTML element that the component will be rendered into.
 */
export const asyncAwaitComponent = async( element ) => {

      try {
            
            const id1 = '5d86371f25a058e5b1c8a65e';
            const id2 = '5d86371f2343e37870b91ef1';
      
            const hero1 = await findHero(id1);
            const hero2 = await findHero(id2);
      
            element.innerHTML = `${hero1.name} / ${hero2.name}`
                  
      } catch (error) {
            element.innerHTML = `
                  <h1>Error:</h1>
                  <h2>${error}</h2>
            `
      }
            
}



const findHero = async( id ) => {
      const hero = heroes.find( hero => hero.id === id );

      if (!hero)  
      throw `Hero with id: ${id} not found`;
      
      return hero;
}

