import express from 'express';
import { pseudocode as controller } from '../controllers';

const router = express.Router();

router.post('/', controller.getPseudocodeFromNatural);

router.get('/example', controller.getPseudocodeExample);

export default router;
