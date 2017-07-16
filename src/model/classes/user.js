import BaseClass from './baseClass';

class User extends BaseClass {

	constructor(role, fName, lName, model) {
		super();
		// this.role = role;
		this.firstName = fName;
		this.lastName = lName;
		this.model = model;
	}

	// populate(data) {
	// 	let {id, role, firstName, lastName} = data;
		
	// 	if (id) {
	// 		this.id = id;
	// 	}
	// 	if (role) {
	// 		this.role = role;
	// 	}
	// 	if (firstName) {
	// 		this.firstName = firstName;
	// 	}		
	// 	if (lastName) {
	// 		this.lastName = lastName;
	// 	}
	// }

	// get firstName() {
	// 	return model.get('firstName');
	// }

	// get lastName() {
	// 	return model.get('lastName');
	// }

}

export default User;