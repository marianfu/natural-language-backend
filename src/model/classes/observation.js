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

	constructor(professor, description) {
		super();
		this.professor = professor;
		this.description = description;
		this.model = new ObservationModel({
			idProfessor: professor.id,
			description: description
		});
	}

	// populate(data) {
	// 	let { professor, description } = data;
		
	// 	if (professor) {
	// 		this.professor = professor();
	// 	}
	// 	if (description) {
	// 		this.description = description;
	// 	}
	// }

}

export default Observation;
export { ObservationModel };