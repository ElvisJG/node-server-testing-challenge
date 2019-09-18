const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig.js');

describe('Auth Server', () => {
  test('tests are running with DB_ENV set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  const user = {
    username: 'testUser',
    password: 'pass123',
    department: 'sales'
  };

  let token;

  describe('POST /register', () => {
    beforeEach(async () => {
      await db('users').truncate();
    });
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
          token = res.body.token;
        });
    });
  });

  describe('GET /users', () => {
    test('should returns status 200', () => {
      return request(server)
        .get('/api/users')
        .set('Authorization', token)
        .send(user)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
