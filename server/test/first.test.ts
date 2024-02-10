import request from 'supertest';
import app from '../app';

describe('first test', function () {
  it('should /', async function () {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});