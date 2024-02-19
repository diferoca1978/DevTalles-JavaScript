



/**
 * 
 * @param {HTMLdivElement} element - The "element" parameter is the HTML element that the component will be rendered into.
 */
export const raceComponet = ( element ) => {

  const renderValue = (value) => {
    element.innerHTML = value;
  }

  /* The code `Promise.race();` is using the `Promise.race` method to race multiple promises against each other. 
  The promises `fastPromise()`, `mediumPromise()`, and `slowPromise()` are executed concurrently, and the `race`
  method will settle as soon as one of the promises is settled (either resolved or rejected). */
  Promise.race([
    fastPromise(),
    mediumPromise(),
    slowPromise(),
  ]).then(renderValue);

}

/**
 * The function `slowPromise` returns a promise that resolves with the string 'Slow promise' after a
 * delay of 2 seconds.
 */
const slowPromise = () => new Promise ((resolve) => {
  setTimeout(() => {
    resolve('Slow promise')
  },2000)
});

const mediumPromise = () => new Promise ((resolve) => {
  setTimeout(() => {
    resolve('Medium promise')
  },3000)
});

const fastPromise = () => new Promise ((resolve) => {
  setTimeout(() => {
    resolve('Fast promise')
  },3500)
});