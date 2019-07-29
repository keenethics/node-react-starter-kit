const express = require('express');

const router = express.Router();

router.get('/error', (req, res, next) => {
  next(new Kit.CustomError('UNAUTHORIZED_ACCESS', 401));
});

module.exports = router;
