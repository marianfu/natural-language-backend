import BaseClass from './baseClass';

class User extends BaseClass {

	constructor(role, fName, lName, pw, em, model) {
		super();
		// this.role = role;
		this.firstName = fName;
		this.lastName = lName;
		this.email = em;
		this.password = pw;
		this.model = model;
	}

}

export default User;