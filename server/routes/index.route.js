const express = require('express');

const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
// REMOVE_PROD: in real app you need remove this variable
const testRoutes = require('./test.route');

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /user
router.use('/user', userRoutes);

// REMOVE_PROD: in real app you need remove this route
router.use('/test', testRoutes);


module.exports = router;
