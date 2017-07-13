import BaseModel from './baseModel';
import { ObservationModel } from './observation';
import { ExerciseModel } from './exercise';

const SubmissionModel = BaseModel.extend({
	tableName: 'submissions',
	exercise: () => {
		return this.hasOne(ExerciseModel);
	},
	observations: () => {
		return this.hasMany(ObservationModel);
	}
});

class Submission {

	//	Table name
	get tableName() {
		return 'submissions';
	}
	
	constructor(exercise, solution) {
		this.exercise = exercise;
		this.solution = solution;
		this.approved = false;
		this.observations = [];
		this.model = new ObservationModel({exercise, solution, approved});
	}

	populate(data) {
		let { exercise, solution, approved, observations } = data;
		
		if (exercise) {
			this.exercise = exercise();
		}
		if (solution) {
			this.solution = solution();
		}
		if (approved) {
			this.approved = approved;
		}
		if (observations) {
			this.observations = observations();
		}
	}

	approve() {
		this.approved = true;
	}

	observe(professor, description) {
		let observation = new Observation(professor, description);
		this.observations.push(observation);
		return observation;
	}

	toString() {
		return description;
	}

}

export default Submission;
export { SubmissionModel };
