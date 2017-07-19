import { getList, getOne } from './utils';
import createExercise from '../model/logic/exerciseFactory';
import Exercise from '../model/classes/exercise';

const getExerciseList = (req, res) => {
	getList(req, res, Exercise);
};

const getExercise = (req, res) => {
	getOne(req, res, Exercise);
};

const saveExercise = (req, res) => {
	let { idClassroom, name, description, result, level } = req.body;

	if (!idClassroom) {
		res.status(400).send('No idClassroom provided');
	}
	if (!name || name.trim() === '') {
		res.status(400).send('No name provided');
	}
	if (!description || description.trim() === '') {
		res.status(400).send('No description provided');
	}
	if (!result || result.trim() === '') {
		res.status(400).send('No result provided');
	}
	if (!level) {
		res.status(400).send('No level provided');
	}

	try {
		createExercise(idClassroom, name, description, result, level).then((exercise) => {
			res.status(201).json(exercise);
		});
	} catch (e) {
		res.status(400).send(e);
	}
};

export default { getExerciseList, getExercise, saveExercise };