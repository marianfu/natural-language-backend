import { getList, getOne } from './utils';
import createProfessor from '../model/logic/factories/professorFactory';
import createStudent from '../model/logic/factories/studentFactory';
import Student from '../model/classes/student';
import Professor from '../model/classes/professor';

const getStudentList = (req, res) => {
	getList(req, res, Student);
};

const getStudent = (req, res) => {
	getOne(req, res, Student);
};

const saveStudent = (req, res) => {
	let { firstName, lastName, email, password } = req.body;

	if (!firstName || firstName.trim() === '') {
		res.status(400).send('No firstName provided');
	}
	if (!lastName || lastName.trim() === '') {
		res.status(400).send('No lastName provided');
	}
	if (!email || email.trim() === '') {
		res.status(400).send('No email provided');
	}
	if (!password || password.trim() === '') {
		res.status(400).send('No lastName provided');
	}

	try {
		createStudent(firstName, lastName, email, password).then((student) => {
			res.status(201).json(student);
		})		
	} catch (e) {
		res.status(400).send(e);
	}
};

const getProfessorList = (req, res) => {
	getList(req, res, Student);
};

const getProfessor = (req, res) => {	
	getOne(req, res, Professor);
};

const saveProfessor = (req, res) => {
	let { firstName, lastName, email, password } = req.body;

	if (!firstName || firstName.trim() === '') {
		res.status(400).send('No firstName provided');
	}
	if (!lastName || lastName.trim() === '') {
		res.status(400).send('No lastName provided');
	}
	if (!email || email.trim() === '') {
		res.status(400).send('No email provided');
	}
	if (!password || password.trim() === '') {
		res.status(400).send('No lastName provided');
	}

	try {
		createProfessor(firstName, lastName, email, password).then((professor) => {
			res.status(201).json(professor);
		});
	} catch (e) {
		res.status(400).send(e);
	}
};

export default { getStudentList, getStudent, saveStudent, getProfessorList, getProfessor, saveProfessor };