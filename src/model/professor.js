class Professor extends User {
	
	constructor(firstName, lastName) {
		super('PROFESSOR', firstName, lastName);
	}

	observe(submission, description) {
		submission.observe(this, description);
	}
}

export default Professor;