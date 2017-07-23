import BasicDao from '../../persistence/basicDao';
import Exercise from '../../classes/exercise';
import Student from '../../classes/student';
import Submission from '../../classes/submission';

export default (idStudent, idExercise, solution) => {
	const basicDao = new BasicDao();

	return basicDao.fetch(Student, {
		where: [['id', idStudent]]
	}).then((students) => {
		if (!students || students.length === 0) {
			throw new Error('No student found with id ' + idStudent);
		}

		let student = students[0];

		return basicDao.fetch(Exercise, {
			where: [['id', idExercise]]
		}).then((exercises) => {
			if (!exercises || exercises.length === 0) {
				throw new Error('No exercise found with id ' + idExercise);
			}

			let exercise = exercises[0];

			return basicDao.save(new Submission(student, exercise, solution));
		});
	})
}