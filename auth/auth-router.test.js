const request = require('supertest');
const server = require('../api/server');

describe('Auth Server', () => {
  test('tests are running with DB_ENV set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('POST /register', () => {
    test('should returns status 201', () => {
      return request(server)
        .post('/api/register')
        .send({
          username: 'Elvis',
          password: 'pass123',
          department: 'sales'
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe('POST /login', () => {});
});
