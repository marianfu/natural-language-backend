import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Hello stranger, it's been a while. Go to http://localhost:3001/docs`);
});

export default router;
