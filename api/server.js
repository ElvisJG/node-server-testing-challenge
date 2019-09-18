const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'UP!' });
});

module.exports = server;
