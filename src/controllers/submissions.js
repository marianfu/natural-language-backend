import { getList, getOne } from './utils';
import createSubmission from '../model/logic/submissionFactory';
import Submission from '../model/classes/submission';

const getSubmissionList = (req, res) => {
	getList(req, res, Submission);
};

const getSubmission = (req, res) => {
	getOne(req, res, Submission);
};

const saveSubmission = (req, res) => {
	let { idStudent, idExercise, solution } = req.body;

	if (!idStudent) {
		res.status(400).send('No idStudent provided');
	}
	if (!idExercise) {
		res.status(400).send('No idExercise provided');
	}
	if (!solution || solution.trim() === '') {
		res.status(400).send('No solution provided');
	}

	try {
		createSubmission(idStudent, idExercise, solution).then((observation) => {
			res.status(201).json(observation);
		});
	} catch (e) {
		res.status(400).send(e);
	}
};

export default { getSubmissionList, getSubmission, saveSubmission };