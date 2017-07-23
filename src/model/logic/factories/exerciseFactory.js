import BasicDao from '../../persistence/basicDao';
import Exercise from '../../classes/exercise';
import Classroom from '../../classes/classroom';

export default (idClassroom, name, description, result, level) => {
	const basicDao = new BasicDao();

	return basicDao.fetch(Classroom, {
		where: [['id', idClassroom]]
	}).then((classrooms) => {
		if (!classrooms || classrooms.length === 0) {
			throw new Error('No classroom found with id ' + idClassroom);
		}

		return basicDao.save(new Exercise(classrooms[0], name, description, result, level));
	});
}