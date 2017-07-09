import Observation from './observation';

class Submission {
	
	constructor(exercise, solution) {
		this.exercise = exercise;
		this.solution = solution;
		this.approved = false;
		this.observations = [];
	}

	approve() {
		this.approved = true;
	}

	observe(professor, description) {
		this.observations.push(new Observation(professor, description));
	}

	toString() {
		return description;
	}

}

export default Submission;