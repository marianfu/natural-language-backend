import { getList, getOne } from './utils';
import Classroom from '../model/classes/classroom';
import createClassroom from '../model/logic/factories/classroomFactory';

const getClassroomList = (req, res) => {
	getList(req, res, Classroom);
};

const getClassroom = (req, res) => {
	getOne(req, res, Classroom);
};

const saveClassroom = (req, res) => {
	let { idProfessor, name } = req.body;

	if (!idProfessor) {
		res.status(400).send('No idProfessor supplied');
	}
	if (!name || name.trim() === '') {
		res.status(400).send('No name supplied');
	}

	try {
		createClassroom(name, idProfessor).then((classroom) => {
			res.status(201).json(classroom);
		});
	} catch (e) {
		res.status(400).send(e);
	}
}

export default { getClassroomList, getClassroom, saveClassroom };