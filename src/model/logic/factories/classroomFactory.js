import BasicDao from '../../persistence/basicDao';
import Classroom from '../../classes/classroom';
import Professor from '../../classes/professor';

export default (name, idProfessor) => {
	const basicDao = new BasicDao();

	return basicDao.fetch(Professor, {
		where: [['id', idProfessor]]
	}).then((professors) => {
		if (!professors || professors.length === 0) {
			throw new Error('No professor found with id ' + idProfessor);
		}

		return basicDao.save(new Classroom(name, professors[0]));
	});
}