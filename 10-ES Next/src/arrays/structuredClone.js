


export const structuredCloneMethod = () => {

  const heroes = [
    {
      name: 'Superman',
      hero: 'Man of Steel',
      watchword: 'Truth, Justice, and the American Way'
    },
    {
      name: 'Batman',
      hero: 'Dark Knight',
      watchword: 'I am Batman'
    },
    {
      name: 'Wonder Woman',
      hero: 'Amazon Princess',
      watchword: 'Peace, Love, and Equality'
    },
  ];
   
  // MAKE A COPY.
  // here we're try to clone the array above. 

    //const heroesCopy = [...heroes] // Here we're creating a copy of the array heroes through a spread operator. 

  // Then if we're want to modify the first position into heroesCopy look!! the result on the console.
  // If we notice, the original array was mutated, it's because of when we're an array with objects these objects are passed as a reference, therefore the only way to don't change is if the elements in the array are primitive like a number or a string. 
  
    //heroesCopy[0].name = 'hulk';

    // console.table(heroes);
    // console.table(heroesCopy);

  // MAKE A COPY WITH structuredClone( METHOD)

    const heroesCopy2 = structuredClone(heroes);

  // So when we try to modify some property of the objects nothing happen because of through this method the reference was broken.
  
    heroesCopy2[0].name = 'Hulk';

    console.table(heroes);
    console.table(heroesCopy2);
}