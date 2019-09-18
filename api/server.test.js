const request = require('supertest');

const server = require('./server.js');
const db = require('../data/dbConfig.js');

beforeEach(async () => {
  await db('users').truncate();
});

describe('Auth Server', () => {
  describe('GET /', () => {
    test('should returns status 200', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    test('Should return a message from the API that says UP!', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toBe('application/json');
          expect(res.body).toEqual({ api: 'UP!' });
        });
    });
  });
});
