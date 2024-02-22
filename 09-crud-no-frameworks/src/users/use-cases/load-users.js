import { localHostUserToModel } from "../mappers/localhost-user-mapper";
import { User } from "../models/user";


/**
 * 
 * @param {Number} page
 * @returns {Promise<User[]>} 
 */
export const loadUsersByPage = async( page= 1 ) => {
  
  const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
  const res = await fetch( url );
  const data = await res.json(); // Here we're receiving the original data.


  const users = data.map( localHostUserToModel ); // Then we pass the data to map() method using the mapper to update the data.
  // WARNING: Remenber when we have arguments that his unique objective is pass to anoter fucntion as an argument we can only call the fuction as a reference.
  return users
  
}