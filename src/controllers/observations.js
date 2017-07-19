import { getList, getOne } from './utils';
import createObservation from '../model/logic/observationFactory';
import Observation from '../model/classes/observation';

const getObservationList = (req, res) => {
	getList(req, res, Observation);
};

const getObservation = (req, res) => {
	getOne(req, res, Observation);
};

const saveObservation = (req, res) => {
	let { idSubmission, idProfessor, description } = req.body;

	if (!idSubmission) {
		res.status(400).send('No idSubmission provided');
	}
	if (!idProfessor) {
		res.status(400).send('No idProfessor provided');
	}
	if (!description || description.trim() === '') {
		res.status(400).send('No description provided');
	}

	try {
		createObservation(idSubmission, idProfessor, description).then((observation) => {
			res.status(201).json(observation);
		});
	} catch (e) {
		res.status(400).send(e);
	}
};

export default { getObservationList, getObservation, saveObservation };