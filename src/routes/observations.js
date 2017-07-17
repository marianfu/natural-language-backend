import express from 'express';
import { observations as controller } from '../controllers';

const router = express.Router();

router.get('/', controller.getObservationList);

router.get('/:id', controller.getObservation);

export default router;


