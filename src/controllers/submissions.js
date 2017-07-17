import { getList, getOne } from './utils';
import Submission from '../model/classes/submission';

const getSubmissionList = (req, res) => {
	getList(req, res, Submission);
};

const getSubmission = (req, res) => {
	getOne(req, res, Submission);
};

export default { getSubmissionList, getSubmission };