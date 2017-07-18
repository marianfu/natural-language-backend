import BasicDao from '../persistence/basicDao';
import Observation from '../classes/observation';

export default (submission, professor, description) => {
	const basicDao = new BasicDao();

	let observation = new Observation(submission, professor, description);

	submission.observations.push(observation);
	submission.model.observations().add(observation.model);

	return Promise.all([basicDao.save(observation), basicDao.save(submission)]).then(() => {
		return observation;
	});
}