/**
 * 
 * @param {HTMLdivElement} element - The "element" parameter is the HTML element that the component will be rendered into.
 */
export const asyncAwaitEnhanced = async( element ) => {

  // The code below make our app more slow because it takes around 4.5 seconds to respond each one of the promises, due to it runs is one by one.

  console.time('start');

  // const value1 = await slowPromise(); 
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();

  // However if we use the Promise.All() method all promises are run at the same time, therefore they're take only 2 seconds.

  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise()
  ])

  element.innerHTML = `
    value1: ${value1} <br/>
    value2: ${value2} <br/>
    value3: ${value3}} <br/>
  `

  console.timeEnd('start');

}


const slowPromise = () => new Promise ((resolve) => {
  setTimeout(() => {
    resolve('Slow promise')
  },2000)
});

const mediumPromise = () => new Promise ((resolve) => {
  setTimeout(() => {
    resolve('Medium promise')
  },1500)
});

const fastPromise = () => new Promise ((resolve) => {
  setTimeout(() => {
    resolve('Fast promise')
  },1000)
});

