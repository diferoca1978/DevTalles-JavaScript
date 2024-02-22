import { showModal } from '../render-modal/render-modal';
import './render-floating-button.css'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderFloatingButton = (element) => {
  

  const floatButton = document.createElement('button')
  floatButton.innerText = '+';
  floatButton.classList.add('add-button');

  element.append( floatButton );

  floatButton.addEventListener('click', () => {
    showModal();
  })

}