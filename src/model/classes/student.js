import Submission from './submission';
import BaseModel from './baseModel';

const Student = BaseModel.extend({
	tableName: 'students',
	submissions: function() {
		return this.hasMany(Submission);
	}
});

export default Student;

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