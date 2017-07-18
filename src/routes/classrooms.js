import express from 'express';
import { classrooms as controller } from '../controllers';

const router = express.Router();

router.get('/', controller.getClassroomList);

router.get('/:id', controller.getClassroom);

router.post('/', controller.saveClassroom);

export default router;


