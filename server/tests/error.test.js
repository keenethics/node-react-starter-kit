// REMOVE_PROD: remove this file

const _ = require('lodash');
const base = require('./base.test');
const Errors = require('../config/error');

const { request, truncate } = base;
const apiBase = process.env.API_BASE || '/api';

describe('GET /test/error', () => {
  before(() => truncate());
  after(() => truncate());

  it('error structure', () => request
    .get(`${apiBase}/test/error`)
    .expect('Content-Type', /json/)
    .expect(401)
    .expect(({ body }) => {
      if (!(Array.isArray(body.errors) && body.errors.length && body.request && body.metadata)) {
        throw new Error(`
          Error response must have next structure:
          {
            "errors": [{ ... }],
            "request": { ... },
            "metadata": {}
          }
        `);
      }
      const error = _.get(body, 'errors[0]', {});

      if (error.userMessage !== Errors.UNAUTHORIZED_ACCESS.userMessage && error.code !== 401) {
        throw new Error('Error has incorrect data');
      }
    }));
});
