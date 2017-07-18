import express from 'express';
import { users as controller } from '../controllers';

const router = express.Router();

router.get('/students', controller.getStudentList);

router.get('/students/:id', controller.getStudent);

router.post('/students', controller.saveStudent);

router.get('/professors', controller.getProfessorList);

router.get('/professors/:id', controller.getProfessor);

router.post('/professors', controller.saveProfessor);

export default router;