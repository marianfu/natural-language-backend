import { getList, getOne } from './utils';
import Classroom from '../model/classes/classroom';

const getClassroomList = (req, res) => {
	getList(req, res, Classroom);
};

const getClassroom = (req, res) => {
	getOne(req, res, Classroom);
};

export default { getClassroomList, getClassroom };