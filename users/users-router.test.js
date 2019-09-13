const request = require('supertest');
const server = require('../api/server');

describe('Auth Server', () => {
  test('tests are running with DB_ENV set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  const user = {
    username: 'testUser',
    password: 'pass123'
  };
  describe('GET /users', () => {
    test('should returns status 201', () => {
      return request(server)
        .get('/users/')
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});
