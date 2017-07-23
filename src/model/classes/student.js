import User from './user';
import { SubmissionModel } from './submission';
import BaseModel from './baseModel';

const StudentModel = BaseModel.extend({
	tableName: 'students',
	submissions: function() {
		return this.hasMany(SubmissionModel);
	}
});

class Student extends User {

	constructor(firstName, lastName, email, password) {
		super('STUDENT', firstName, lastName, email, password, new StudentModel({firstName, lastName, email, password}));
		this.submissions = [];
	}

	static dbModel() {
		return StudentModel;
	}
	
}

export default Student;
export { StudentModel };

// // import User from './user';
// import { Model } from 'objection';
// import Submission from './submission';

// class Student extends Model {

// 	//	Table name
// 	static get tableName() {
// 		return 'students';
// 	}

// 	constructor(firstName, lastName) {
// 		super();
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.submissions = [];
// 	}
// 	static create(firstName, lastName) {
// 		let student = new Student();
// 		student.firstName = firstName;
// 		student.lastName = lastName;
// 		return student;
// 	}


// 	// Table relations
// 	submissions() {
// 		return this.hasMany(Submission);
// 	}

// 	// Transient methods
// 	submit(exercise, solution) {
// 		let submission = new Submission(exercise, solution);
// 		this.submissions.push(submission);
// 		return submission;
// 	}

// }

// export default Student;