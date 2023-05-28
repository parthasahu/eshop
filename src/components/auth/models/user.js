export default class User {
    constructor({
      id = '',
      firstName = '',
      lastName = '',
      email = '',
      password ='',
      contactNumber = '',
      role = []
    } = {}) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.contactNumber = contactNumber;
      this.role = role
    }  
    static create(data) {
      return Object.freeze(new User(data));
    }
}