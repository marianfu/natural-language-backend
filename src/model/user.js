class User {

	constructor(role, firstName, lastName) {
		this.role = role;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	toString() {
		return this.firstName + ' ' + this.firstName + '(' + this.role + ')';
	}
}

export default User;