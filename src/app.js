import http from 'http';
import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import swaggerTools from 'swagger-tools';
import YAML from 'yamljs';
import Student from './model/classes/student';
import Professor from './model/classes/professor';
import Exercise from './model/classes/exercise';
import Classroom from './model/classes/classroom';
import BasicDao from './model/persistence/basicDao';
import createSubmission from './model/logic/SubmissionFactory';
import createExercise from './model/logic/ExerciseFactory';

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

const basicDao = new BasicDao();


let students = [
	new Student('Mariano', 'Furriel'),
	new Student('Gabriel', 'Rodriguez')
];

let professor = new Professor('Claudio', 'Godio');

let classroom;

Promise
	.all([
		basicDao.save(students),
		basicDao.save(professor)
	])
	.then(() => {
		classroom = new Classroom('Tesis I', professor);
		return basicDao.save(classroom);
	})
	.then(() => {
		createExercise(classroom, 'Exercise 1', 'This is an exercise.', 'This is the result: 42.', 1).then((exercise) => {
			createSubmission(students[0], exercise, 'This is a solution.').then((submission) => {
				console.log(submission);
			});
		});
	});
