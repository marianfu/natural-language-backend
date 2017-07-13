class User {

	constructor(role, fName, lName, model) {
		this.role = role;
		this.firstName = fName;
		this.lastName = lName;
		this.model = model;
	}

	populate(data) {
		let {role, firstName, lastName} = data;
		
		if (role) {
			this.role = role;
		}
		if (firstName) {
			this.firstName = firstName;
		}		
		if (lastName) {
			this.lastName = lastName;
		}
	}

	// get firstName() {
	// 	return model.get('firstName');
	// }

	// get lastName() {
	// 	return model.get('lastName');
	// }

	toString() {
		return this.firstName + ' ' + this.firstName + '(' + this.role + ')';
	}
}

export default User;