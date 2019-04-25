const _ = require('lodash');
const ErrorHash = require('../config/error');

const isProduction = process.env.NODE_ENV === 'production';

const defaultError = {
  parameter: '',
  details: '',
  code: 'ERROR',
  value: '',
  message: 'Something went wrong.',
  userMessage: 'Something went wrong.',
};

class CustomError extends Error {
  static createError(errorCode) {
    const error = ErrorHash[errorCode];

    if (!error) {
      return {
        ...defaultError,
        code: errorCode,
      };
    }

    return {
      ...defaultError,
      ...error,
    };
  }

  constructor(errorCode, httpCode, ...params) {
    super(params);
    this.errors = [CustomError.createError(errorCode)];
    this.code = httpCode || this.errors[0].code;
    this.message = this.errors[0].message;
    this.name = 'Server error';
    this.request = {};
    this.metadata = {};
  }

  get() {
    const errors = this.errors.slice().map((error) => {
      if (isProduction) {
        // eslint-disable-next-line
        delete error.message;
      }

      return error;
    });

    return {
      errors,
      request: this.request,
      metadata: this.metadata,
    };
  }

  upsertMetadata(data) {
    if (!_.isObject(data)) {
      throw new Error("Metadata must be 'object'");
    }

    this.metadata = this.metadata ? { ...this.metadata, ...data } : data;
  }
}

module.exports = CustomError;
