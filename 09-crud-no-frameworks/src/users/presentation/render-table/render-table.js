import usersStore from '../../store/users-store'
import './render-table.css'


let table; // This variable only can be used into this scope, and it was created to keep an HTML table in memory, because we don't want to be recreating it each time that we need it.

const createTable = () => {
  
  const table = document.createElement('table');
  const tableHeaders = document.createElement('thead'); // With this we're creating the headers of our table.
  tableHeaders.innerHTML = `
    <tr>                    <!-- <tr> element represents a row in a table.-->
      <th>ID</th>           <!-- <th> element represents a header cell in a table -->
      <th>Balance</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `;

  const tableBody = document.createElement('tbody');
  table.append( tableHeaders, tableBody);

  return table;

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

  const users = usersStore.getUsers(); // Here we already know that we have the users, so the proces here is synchronous.

  if ( !table ) { // Warning: When we're called the renderTable by first time the table variable doesn't exists, therefore we're asking if the table exists.  
  
    table = createTable();
    element.append( table );  

  }

  let tableHTML = '';
    users.forEach(user => {

      tableHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.balance}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.isActive}</td>
          <td>
            <a href="#" data-id="${ user.id }">Select</a>
            |
            <a href="#" data-id="${ user.id }">delete</a>
          </td>
        </tr>
      `
    });

    table.querySelector('tbody').innerHTML = tableHTML;
   
}