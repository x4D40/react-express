const express = require('express');
const router = express.Router();
const guard = require('../guard');

/**
 * Api router
 * Add all API controllers here
 */

const numbersController = require('./numbers');
const stringController = require('./string');
const dataController = require('./data');

// this controller does not require auth
// route is /api/numbers
router.use('/numbers/', numbersController);

// route is /api/strings
router.use('/strings/', stringController);

// this entire controller requires auth, because of guard in the parameters
// route is /api/data
router.use('/data/', guard, dataController);

module.exports = router;