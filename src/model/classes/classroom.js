import BaseModel from './baseModel';
import BaseClass from './baseClass';
import { ProfessorModel } from './professor';
import { StudentModel } from './student';
import { ExerciseModel } from './exercise';

const ClassroomModel = BaseModel.extend({
	tableName: 'classrooms',
	professor: function() {
		return this.hasOne(ProfessorModel);
	},
	students: function() {
		return this.hasMany(StudentModel);
	},
	exercises: function() {
		return this.hasMany(ExerciseModel);
	}
});

class Classroom extends BaseClass {

	constructor(name, professor) {
		super();
		this.name = name;
		this.professor = professor;
		this.students = [];
		this.exercises = [];
		this.model = new ClassroomModel({
			name: name,
			idProfessor: professor.id
		});
	}

	// populate(data) {
	// 	let { id, name, professor, students, exercises } = data;
		
	// 	if (id) {
	// 		this.id = id;
	// 	}
	// 	if (name) {
	// 		this.name = name;
	// 	}
	// 	if (professor) {
	// 		this.professor = professor();
	// 	}
	// 	if (students) {
	// 		this.students = students();
	// 	}
	// 	if (exercises) {
	// 		this.exercises = exercises();
	// 	}
	// }

	addStudent(student) {
		this.students.push(student);
	}

	addExercise(exercise) {
		this.exercises.push(exercise);
	}

}

export default Classroom;
export { ClassroomModel };