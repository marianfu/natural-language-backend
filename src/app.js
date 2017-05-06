import express from 'express';
import morgan from 'morgan';

import { exercises } from './routes';

// App
const app = express();
const PORT = 3001;
const logger = morgan('tiny');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`);
})

// Config
app.set('json spaces', 2);

// Middlewares
app.use(logger);

// Routes
app.use('/exercises', exercises);

