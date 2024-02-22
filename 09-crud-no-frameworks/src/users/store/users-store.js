import { loadUsersByPage } from "../use-cases/load-users";


  const state = {

    currentPage: 0,
    users: [],
  }


  const loadNextPage = async() => {
     const users = await loadUsersByPage( state.currentPage + 1 ); // Here we have the users.
     if (users.length === 0) return; // Then we ask if the users array is empty not do anything.

     // Finally we update the state like this:
     state.currentPage += 1; 
     state.users = users;
  }


  const loadPrevPage = async() => {
    if (state.currentPage === 1) return;
    const users = await loadUsersByPage( state.currentPage - 1);

    state.users = users;
    state.currentPage -= 1;
    
  }

  
  const onUserChanged = () => {
    throw new Error('Method not implemented');
  }

  const ReloadPage = () => {
    throw new Error('Method not implemented'); 
  }


  export default {
    loadNextPage,
    loadPrevPage,
    onUserChanged,
    ReloadPage,


    /**
     * 
     * @returns {Users[]}
     */
     getUsers: () => [...state.users], // Here we're doing that the state object can be accessed from out, so it is passed as a reference.
     /**
      * 
      * @returns {Number}
      */
     getCurrentPage: () => state.currentPage, // Here we're accessing to the value current page, but it doesn't pass as a reference because his value is a primitive value.
  }