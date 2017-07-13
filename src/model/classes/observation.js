import BaseModel from './baseModel';
import { ProfessorModel } from './professor';

const ObservationModel = BaseModel.extend({
	tableName: 'observations',
	professor: () => {
		return this.hasOne(ProfessorModel);
	}
});

class Observation {

	constructor(professor, description) {
		this.professor = professor;
		this.description = description;
		this.model = new ObservationModel({professor, description});
	}

	populate(data) {
		let { professor, description } = data;
		
		if (professor) {
			this.professor = professor();
		}
		if (description) {
			this.description = description;
		}
	}

	toString() {
		return description;
	}

}

export default Observation;
export { ObservationModel };