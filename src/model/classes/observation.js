import BaseClass from './baseClass';
import BaseModel from './baseModel';
import { ProfessorModel } from './professor';

const ObservationModel = BaseModel.extend({
	tableName: 'observations',
	professor: function() {
		return this.hasOne(ProfessorModel);
	}
});

class Observation extends BaseClass {

	constructor(submission, professor, description) {
		super();
		this.professor = professor;
		this.description = description;
		this.model = new ObservationModel({
			idProfessor: professor ? professor.id : null,
			idSubmission: submission ? submission.id : null,
			description: description
		});
	}

	static dbModel() {
		return ObservationModel;
	}

}

export default Observation;
export { ObservationModel };