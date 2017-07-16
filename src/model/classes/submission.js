import BaseClass from './baseClass';
import BaseModel from './baseModel';
import { ObservationModel } from './observation';
import { ExerciseModel } from './exercise';

const SubmissionModel = BaseModel.extend({
	tableName: 'submissions',
	exercise: function() {
		return this.hasOne(ExerciseModel);
	},
	observations: function() {
		return this.hasMany(ObservationModel);
	}
});

class Submission extends BaseClass {

	//	Table name
	get tableName() {
		return 'submissions';
	}
	
	constructor(student, exercise, solution) {
		super();
		this.exercise = exercise;
		this.solution = solution;
		this.approved = false;
		this.observations = [];
		this.model = new SubmissionModel({
			idStudent: student.id,
			idExercise: exercise.id,
			solution: solution
		});
	}

	// populate(data) {
	// 	let { exercise, solution, approved, observations } = data;
		
	// 	if (exercise) {
	// 		this.exercise = exercise();
	// 	}
	// 	if (solution) {
	// 		this.solution = solution();
	// 	}
	// 	if (approved) {
	// 		this.approved = approved;
	// 	}
	// 	if (observations) {
	// 		this.observations = observations();
	// 	}
	// }

	approve() {
		this.approved = true;
	}

	observe(professor, description) {
		let observation = new Observation(professor, description);
		this.observations.push(observation);
		return observation;
	}

}

export default Submission;
export { SubmissionModel };
