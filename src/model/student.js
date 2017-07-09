import Submission from './submission';

class Student extends User {
	
	constructor(firstName, lastName) {
		super('STUDENT', firstName, lastName);
		this.submissions = [];
	}

	submit(exercise, solution) {
		this.submissions.push(new Submission(exercise, solution));
	}

}

export default Student;