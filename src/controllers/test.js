import Student from '../model/classes/student';
import Professor from '../model/classes/professor';
import Exercise from '../model/classes/exercise';
import Classroom from '../model/classes/classroom';
import BasicDao from '../model/persistence/basicDao';
import createSubmission from '../model/logic/SubmissionFactory';
import createExercise from '../model/logic/ExerciseFactory';

const test = (req, res) => {
	const basicDao = new BasicDao();

	let students = [
		new Student('Mariano', 'Furriel'),
		new Student('Gabriel', 'Rodriguez')
	];

	let professor = new Professor('Claudio', 'Godio');

	let classroom;

	Promise
		.all([
			basicDao.save(students),
			basicDao.save(professor)
		])
		.then(() => {
			classroom = new Classroom('Tesis I', professor);
			return basicDao.save(classroom);
		})
		.then(() => {
			createExercise(classroom, 'Exercise 1', 'This is an exercise.', 'This is the result: 42.', 1).then((exercise) => {
				createSubmission(students[0], exercise, 'This is a solution.').then((submission) => {
					res.send('Test worked ( ͡~ ͜ʖ ͡°)')
				});
			});
		});	
};

export default { test };