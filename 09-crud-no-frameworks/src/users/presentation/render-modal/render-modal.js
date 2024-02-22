import modalhtml from "./render-modal.html?raw";
import './render-modal.css'


let modal,
    form

// Show modal.

export const showModal = () => {

  if (modal) {
    modal.classList.remove('hide-modal')
  }

}

// Hide modal.
export const hideModal = () => {

  if (modal) {
    modal.classList.add('hide-modal');

    form?.reset(); // This is another way to ask if something exists.
  }

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = ( element ) => {
   
  if ( modal ) return;

  modal = document.createElement('div');
  modal.innerHTML = modalhtml;
  modal.classList.add('modal-container', 'hide-modal');
  form = modal.querySelector('form');


  modal.addEventListener('click', (event) => {
    
    if (event.target.className === 'modal-container') {
      hideModal();
    }

  })

  form.addEventListener('submit', (event) => {

    event.preventDefault();

    // To catch the data from the form (pure vanilla JS).

    const formData = new FormData( form );

    const userLike = {};

    for (const [key, value] of formData) {
        if (key === 'balance') {
          userLike[key] = +value;
          continue;
        }

        if (key === 'isActive') {
          userLike[key] = (value !== 'on') ? false : true;
          continue;
        }

        userLike[key] = value;

    }

    console.log(userLike);

    hideModal();

  })

  element.append( modal );

}