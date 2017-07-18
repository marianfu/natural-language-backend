import { getList, getOne } from './utils';
import createProfessor from '../model/logic/professorFactory';
import createStudent from '../model/logic/studentFactory';
import Student from '../model/classes/student';
import Professor from '../model/classes/professor';

const getStudentList = (req, res) => {
	getList(req, res, Student);
};

const getStudent = (req, res) => {
	getOne(req, res, Student);
};

const saveStudent = (req, res) => {
	let { firstName, lastName } = req.body;

	if (!firstName || firstName.trim() === '') {
		res.status(400).send('No firstName provided');
	}
	if (!lastName || lastName.trim() === '') {
		res.status(400).send('No lastName provided');
	}

	try {
		createStudent(firstName, lastName).then((student) => {
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
	let { firstName, lastName } = req.body;

	if (!firstName || firstName.trim() === '') {
		res.status(400).send('No firstName provided');
	}
	if (!lastName || lastName.trim() === '') {
		res.status(400).send('No lastName provided');
	}

	try {
		createProfessor(firstName, lastName).then((professor) => {
			res.status(201).json(professor);
		});
	} catch (e) {
		res.status(400).send(e);
	}
};

export default { getStudentList, getStudent, saveStudent, getProfessorList, getProfessor, saveProfessor };