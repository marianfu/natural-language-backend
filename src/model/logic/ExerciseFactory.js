import BasicDao from '../persistence/basicDao';
import Exercise from '../classes/exercise';
import Classroom from '../classes/classroom';

export default (classroom, name, description, result, level) => {
	const basicDao = new BasicDao();

	let exercise = new Exercise(classroom, name, description, result, level);

	classroom.exercises.push(exercise);
	classroom.model.exercises().add(exercise.model);

	return Promise.all([basicDao.save(exercise), basicDao.save(classroom)]);
}