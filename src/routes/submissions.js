import express from 'express';
import { submissions as controller } from '../controllers';

const router = express.Router();

router.get('/', controller.getSubmissionList);

router.get('/:id', controller.getSubmission);

export default router;


