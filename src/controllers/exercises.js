import { getList, getOne } from './utils';
import Exercise from '../model/classes/exercise';

const getExerciseList = (req, res) => {
	getList(req, res, Exercise);
};

const getExercise = (req, res) => {
	getOne(req, res, Exercise);
};

export default { getExerciseList, getExercise };