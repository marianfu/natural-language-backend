import BaseModel from './baseModel';
import Observation from './observation';

const Submission = BaseModel.extend({
	tableName: 'submissions',
	observations: function() {
		return this.hasMany(Observation);
	}
});

export default Submission;

// import { Model } from 'objection';
// import Observation from './observation';

// class Submission extends Model {

// 	//	Table name
// 	get tableName() {
// 		return 'submissions';
// 	}
	
// 	constructor(exercise, solution) {
// 		super();
// 		this.exercise = exercise;
// 		this.solution = solution;
// 		this.approved = false;
// 		this.observations = [];
// 	}

// 	// Table relations
// 	observations() {
// 		return this.hasMany(Observation);
// 	}

// 	// Transient methods
// 	approve() {
// 		this.approved = true;
// 	}

// 	observe(professor, description) {
// 		let observation = new Observation(professor, description);
// 		this.observations.push(observation);
// 		return observation;
// 	}

// 	toString() {
// 		return description;
// 	}

// }

// export default Submission;