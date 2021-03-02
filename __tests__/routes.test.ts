// import supertest
const request = require('supertest');

// declare server url for testing
const server = 'http://localhost:3000';

// test route integration between server and client
describe('Route integration', () => {
  describe('/', () => {
    it('responds with 200 status and text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
    });
  });
});