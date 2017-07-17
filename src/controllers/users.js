import { getList, getOne } from './utils';
import Student from '../model/classes/student';
import Professor from '../model/classes/professor';

const getStudentList = (req, res) => {
	getList(req, res, Student);
};

const getStudent = (req, res) => {
	getOne(req, res, Student);
};

const getProfessorList = (req, res) => {
	getList(req, res, Student);
};

const getProfessor = (req, res) => {	
	getOne(req, res, Professor);
};

export default { getStudentList, getStudent, getProfessorList, getProfessor };