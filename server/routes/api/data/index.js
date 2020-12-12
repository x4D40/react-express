const express = require('express');
const router = express.Router();

// import database
const db = require('../../../services/dal/database');
const logger = require('../../../services/logging');

/**
 * NOTE: if you look in the API index.js file you will see that all routes here require auth
 */

 // route GET /api/data/mock-db
router.get('/mock-db', (req, res) => {
    db.query('fake query, you should use stored procedures for all sql actions')

    // this function is called when the query completes
    .then(data => res.json({query: data}))

    // this is called if there is an error
    // dont sent the error back to client, only log it
    .catch(e => {
        logger.log(e);
        res.status(400);
        res.send();
    })
});

 // route POST /api/data/mock-db
router.post('/mock-db', (req, res) => {
    db.query('fake query, you should use stored procedures for all sql actions')

    // this function is called when the query completes
    .then(data => res.json({query: data}))

    // this is called if there is an error
    // dont sent the error back to client, only log it
    .catch(e => {
        logger.log(e);
        res.status(400);
        res.send();
    })
});

module.exports = router;
