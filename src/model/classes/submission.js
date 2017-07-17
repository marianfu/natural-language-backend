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
	
	constructor(student, exercise, solution) {
		super();
		this.exercise = exercise;
		this.solution = solution;
		this.approved = false;
		this.observations = [];
		this.model = new SubmissionModel({
			idStudent: student ? student.id : null,
			idExercise: exercise ? exercise.id : null,
			solution: solution
		});
	}

	static dbModel() {
		return SubmissionModel;
	}

}

export default Submission;
export { SubmissionModel };
