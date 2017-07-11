import BaseModel from './baseModel';

const Professor = BaseModel.extend({
	tableName: 'professors'
});

export default Professor;

// import User from './user';

// class Professor extends User {
	
// 	//	Table name
// 	get tableName() {
// 		return 'professors';
// 	}

// 	constructor(firstName, lastName) {
// 		super('PROFESSOR', firstName, lastName);
// 	}

// 	// Transient methods
// 	observe(submission, description) {
// 		submission.observe(this, description);
// 	}
// }

// export default Professor;