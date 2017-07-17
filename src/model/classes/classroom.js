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
			idProfessor: professor ? professor.id : null
		});
	}

	static dbModel() {
		return ClassroomModel;
	}

}

export default Classroom;
export { ClassroomModel };