import http from 'http';
import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import swaggerTools from 'swagger-tools';
import YAML from 'yamljs';
import Student from './model/classes/student';

import { home, exercises, pseudocode } from './routes';
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
app.use('/api/exercises', exercises);
app.use('/api/pseudocode', pseudocode);

// Websocket handlers
addSocketHandlers(io);

console.log(new Student({
	firstName: 'Gabriel',
	lastName: 'Rodriguez'
}).save());

