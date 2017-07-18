import BasicDao from '../persistence/basicDao';
import Classroom from '../classes/classroom';
import Professor from '../classes/professor';

export default (name, idProfessor) => {
	const basicDao = new BasicDao();

	basicDao.fetch(Professor, {
		where: [['id', idProfessor]]
	}).then((professor) => {
		if (!professor) {
			throw new Error('No professor found with id ' + idProfessor);
		}

		return basicDao.save(new Classroom(name, professor));
	});
}