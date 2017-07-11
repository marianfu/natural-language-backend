import BaseModel from './baseModel';
import Professor from './professor';
import Student from './student';
import Exercise from './exercise';

const Classroom = BaseModel.extend({
	tableName: 'classrooms',
	professor: function() {
		return this.hasOne(Professor);
	},
	students: function() {
		return this.hasMany(Student);
	},
	exercises: function() {
		return this.hasMany(Exercise);
	}
});

export default Classroom;


// import { Model } from 'objection';
// import Professor from './professor';
// import Student from './student';
// import Exercise from './exercise';

// class Classroom extends Model {
	
// 	//	Table name
// 	get tableName() {
// 		return 'classrooms';
// 	}

// 	constructor(name, professor) {
// 		super();
// 		this.name = name;
// 		this.professor = professor;
// 		this.students = [];
// 		this.exercises = [];
// 	}

// 	// Table relations
// 	professor() {
// 		return this.hasOne(Professor);
// 	}

// 	students() {
// 		return this.hasMany(Student);
// 	}

// 	exercises() {
// 		return this.hasMany(Exercise);
// 	}

// 	// Transient methods
// 	addStudent(student) {
// 		this.students.push(student);
// 	}

// 	addExercise(exercise) {
// 		this.exercises.push(exercise);
// 	}

// 	toString() {
// 		return this.name + '(Profesor ' + this.professor.lastName + ', ' + this.students.length + ' alumnos)'
// 	}

// }

// export default Classroom;