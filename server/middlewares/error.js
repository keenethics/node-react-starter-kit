function errorHandling(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.httpCode);
  return res.json(err.get());
}

// process.on('unhandledRejection', (err) => {
//   console.error(err);
// });

// process.on('uncaughtException', (err) => {
//   console.error(err);
//   process.exit(1);
// });

module.exports = errorHandling;
