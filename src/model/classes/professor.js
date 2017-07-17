import User from './user';
import BaseModel from './baseModel';

const ProfessorModel = BaseModel.extend({
	tableName: 'professors'
});

class Professor extends User {

	constructor(firstName, lastName) {
		super('PROFESSOR', firstName, lastName, new ProfessorModel({firstName, lastName}));
	}

	static dbModel() {
		return ProfessorModel;
	}
	
}

export default Professor;
export { ProfessorModel };