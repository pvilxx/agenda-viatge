const request = require('supertest');
const app = require('../src/app');

describe('Endpoint fals', () => {
  it('hauria de fallar sempre', async () => {
    expect(true).toBe(false); // Test que sempre falla
  });
});

test('Este test siempre falla', () => {
  expect(true).toBe(false);
});
