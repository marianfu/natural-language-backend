import { getList, getOne } from './utils';
import Observation from '../model/classes/observation';

const getObservationList = (req, res) => {
	getList(req, res, Observation);
};

const getObservation = (req, res) => {
	getOne(req, res, Observation);
};

export default { getObservationList, getObservation };