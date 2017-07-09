class Classroom {
	
	constructor(name, professor) {
		this.name = name;
		this.professor = professor;
		this.students = [];
		this.exercises = [];
	}

	addStudent(student) {
		this.students.push(student);
	}

	addExercise(exercise) {
		this.exercises.push(exercise);
	}

	toString() {
		return this.name + '(Profesor ' + this.professor.lastName + ', ' + this.students.length + ' alumnos)'
	}

}

export default Classroom;