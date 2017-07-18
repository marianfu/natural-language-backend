import express from 'express';
import { test as controller } from '../controllers';

const router = express.Router();

router.get('/', controller.test);

export default router;