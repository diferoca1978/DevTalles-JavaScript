import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButons = ( element ) => {
  
  const nextButton = document.createElement('button');
  nextButton.innerText = 'Next >';

  const prevButton = document.createElement('button');
  prevButton.innerText = '< Prev';

  const currentPage = document.createElement('span');
  currentPage.id = 'current-page';
  currentPage.innerText = usersStore.getCurrentPage(); 

  element.append(prevButton, currentPage, nextButton);

  // Adding listeners to add functionality to the buttons.

  nextButton.addEventListener('click', async() => {
    await usersStore.loadNextPage();
    currentPage.innerText = usersStore.getCurrentPage();
    renderTable( element );
  });

  prevButton.addEventListener('click',async() => {
    await usersStore.loadPrevPage();
    currentPage.innerText = usersStore.getCurrentPage()
    renderTable( element )
  })

}