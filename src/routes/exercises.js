import express from 'express';
import { exercises as controller } from '../controllers';

const router = express.Router();

router.get('/', controller.getExerciseList);

router.get('/:id', controller.getExercise);

export default router;


