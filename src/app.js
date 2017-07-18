import http from 'http';
import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import swaggerTools from 'swagger-tools';
import YAML from 'yamljs';

import { home, classrooms, exercises, observations, submissions, users, pseudocode, test } from './routes';
import { addSocketHandlers } from './websocket/handler';

const swaggerDoc = YAML.load('./src/api.yaml');

// App
const app = express();
const server = http.Server(app);
const io = socket(server);
const PORT = process.env.PORT || 8080;
const logger = morgan('tiny');

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`);
});

// Config
app.set('json spaces', 2);

// Middlewares
app.use(bodyParser.json());
app.use(logger);

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerUi());
});

// Routes
app.use('/', home);
app.use('/api/classrooms', classrooms);
app.use('/api/exercises', exercises);
app.use('/api/observations', observations);
app.use('/api/submissions', submissions);
app.use('/api/users', users);
app.use('/api/pseudocode', pseudocode);
app.use('/api/test', test);

// Websocket handlers
addSocketHandlers(io);

