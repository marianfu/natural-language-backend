import BasicDao from '../persistence/basicDao';
import Submission from '../classes/submission';

export default (user, exercise, solution) => {
	const basicDao = new BasicDao();

	let submission = new Submission(user, exercise, solution);

	user.submissions.push(submission);

	user.model.submissions().add(submission.model);

	return Promise.all([basicDao.save(submission), basicDao.save(user)]).then(() => {
		return submission;
	});
}