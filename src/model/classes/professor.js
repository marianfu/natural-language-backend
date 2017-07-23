import User from './user';
import BaseModel from './baseModel';

const ProfessorModel = BaseModel.extend({
	tableName: 'professors'
});

class Professor extends User {

	constructor(firstName, lastName, email, password) {
		super('PROFESSOR', firstName, lastName, email, password, new ProfessorModel({firstName, lastName, email, password}));
	}

	static dbModel() {
		return ProfessorModel;
	}
	
}

export default Professor;
export { ProfessorModel };