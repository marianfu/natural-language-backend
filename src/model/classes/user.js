import BaseClass from './baseClass';

class User extends BaseClass {

	constructor(role, fName, lName, model) {
		super();
		// this.role = role;
		this.firstName = fName;
		this.lastName = lName;
		this.model = model;
	}

}

export default User;