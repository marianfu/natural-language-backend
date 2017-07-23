import http from 'http';
import express from 'express';
import expressSession from 'express-session';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import swaggerTools from 'swagger-tools';
import passport from 'passport';
import configPassport from './config/passport/passportConfig';
import YAML from 'yamljs';
import path from 'path';

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
configPassport(passport);
app.set('json spaces', 2);

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
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
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// Websocket handlers
addSocketHandlers(io);

