import Submission from './submission';
import BaseModel from './baseModel';

const StudentModel = BaseModel.extend({
	tableName: 'students',

	submissions: () => {
		return this.hasMany(Submission);
	},

	submit: (exercise, solution) => {
		let submission = new Submission({exercise, solution});
		this.submissions.push(submission);
		return submission;
	}
});

class Student {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.submissions = [];
		this.model = new StudentModel({firstName, lastName});
	}

	// Transient methods
	submit(exercise, solution) {
		let submission = new Submission(exercise, solution);
		this.submissions.push(submission);
		return submission;
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