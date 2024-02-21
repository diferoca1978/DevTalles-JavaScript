
// This is the data that we need to work, not the data that come from the backend.
// and this is a representation of an user in the db.

export class User {

    /**
     * 
     * @param {Like<User>} LikeUserInDb
     */
    constructor ( {id, isActive, balance, avatar, firstName, lastName, gender} ) {

      this.id         = id,
      this.isActive   = isActive,
      this.balance    = balance,
      this.avatar     = avatar,
      this.firstName  = firstName,
      this.lastName   = lastName,
      this.gender     = gender
    }

}
