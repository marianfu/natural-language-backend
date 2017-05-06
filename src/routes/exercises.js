import express from 'express';
import { exercises as controller } from '../controllers';
import { exercises } from '../utils/examples';

const router = express.Router();

router.get('/', controller.get_exercises_list);

router.get('/:id', controller.get_exercise);

export default router;


