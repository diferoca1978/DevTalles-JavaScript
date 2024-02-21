import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 * @returns ???
 */

export const usersApp = async( element ) => {
  
  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();

  console.log(usersStore.getUsers());
}