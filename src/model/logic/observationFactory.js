import BasicDao from '../persistence/basicDao';
import Observation from '../classes/observation';
import Professor from '../classes/professor';
import Submission from '../classes/submission';

export default (idSubmission, idProfessor, description) => {
	const basicDao = new BasicDao();

	return basicDao.fetch(Professor, {
		where: [['id', idProfessor]]
	}).then((professors) => {
		if (!professors || professors.length === 0) {
			throw new Error('No professor found with id ' + idProfessor);
		}

		let professor = professors[0];

		return basicDao.fetch(Submission, {
			where: [['id', idSubmission]]
		}).then((submissions) => {
			if (!submissions || submissions.length === 0) {
				throw new Error('No submission found with id ' + idSubmission);
			}

			let submission = submissions[0];

			return basicDao.save(new Observation(submission, professor, description));
		});
	})
}