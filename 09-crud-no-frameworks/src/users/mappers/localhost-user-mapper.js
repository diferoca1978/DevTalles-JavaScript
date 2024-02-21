import { User } from "../models/user";

/**
 * The function `localHostUserToModel` converts a local host user object to a User model object by
 * mapping the properties.
 * @param {Like<User>} localHostUser 
 * @returns {User} Return a new instance of 'User` object with properties mapped
 * from the `localHostUser` object.
 */
export const localHostUserToModel = ( localHostUser ) => {
 
  const {
    id,
    isActive,
    balance,
    avatar,
    first_name,
    last_name,
    gender
  } = localHostUser

  return new User({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name,
    lastName: last_name,
    gender
  })

}