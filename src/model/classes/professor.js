import User from './user';
import BaseModel from './baseModel';

const ProfessorModel = BaseModel.extend({
	tableName: 'professors'
});

class Professor extends User {

	constructor(firstName, lastName) {
		super('PROFESSOR', firstName, lastName, new ProfessorModel({firstName, lastName}));
	}

	// Transient methods
	observe(submission, description) {
		submission.observe(this, description);
	}
}

export default Professor;
export { ProfessorModel };