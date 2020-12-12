const express = require('express');
const router = express.Router();

/**
 * Numbers controller, handles all routes for /api/numbers
 * 
 * The controller should have minimal logic,
 * If you need to query a datastore or do any complex logic,
 * Consider placing that into another folder (like services)
 * 
 * Any numbers api specific logic can go in this folder
 */

// route is GET /api/numbers/random
router.get('/random', (req, res) => {

    // send json back
    res.json({num: Math.random()});
})

module.exports = {router};