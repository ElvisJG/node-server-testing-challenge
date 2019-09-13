const request = require('supertest');
const server = require('../api/server');

describe('Auth Server', () => {
  test('tests are running with DB_ENV set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  const user = {
    username: 'testUser',
    password: 'pass123',
    department: 'sales'
  };
  describe('POST /register', () => {
    test('should returns status 201', () => {
      return request(server)
        .post('/api/register')
        .send(user)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe('POST /login', () => {
    test('should return a JWT ', () => {
      return request(server)
        .post('/api/login')
        .send(user)
        .then(res => {
          expect(res.body).toHaveProperty('message');
          expect(res.body).toHaveProperty('token');
        });
    });
  });
});