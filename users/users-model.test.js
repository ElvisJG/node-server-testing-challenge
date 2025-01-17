const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('The Users Model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('the insert function', () => {
    const userData = {
      username: 'Elvis',
      password: 'pass123',
      department: 'sales'
    };
    test('should insert a new user', async () => {
      // Test Setup
      await Users.add(userData);

      // Assertion
      const users = await db('users');
      expect(users.length).toBe(1);
      expect(users[0].username).toBe('Elvis');
      expect(users[0].password).toBe('pass123');
      expect(users[0].department).toBe('sales');
    });

    test('should resolve to the newly created user', async () => {
      // Test Setup
      const user = await Users.add(userData);

      // Assertions
      expect(user).toEqual({
        id: 1,
        username: 'Elvis',
        password: 'pass123',
        department: 'sales'
      });
    });
  });

  describe.skip('the find function', () => {
    test('should insert a new user', async () => {
      // Test Setup
      await Users.find();

      // Assertions
      expect(res.data);
    });
  });
});
