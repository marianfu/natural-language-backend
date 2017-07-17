import express from 'express';
import { users as controller } from '../controllers';

const router = express.Router();

router.get('/students', controller.getStudentList);

router.get('/students/:id', controller.getStudent);

router.get('/professors', controller.getProfessorList);

router.get('/professors/:id', controller.getProfessor);

export default router;