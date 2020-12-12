const express = require('express');
const router = express.Router();
const stringService = require('./service');
const guard = require('../../guard');

/**
 * Strings controller, handles all routes for /api/Strings
 * 
 * The controller should have minimal logic,
 * If you need to query a datastore or do any complex logic,
 * Consider placing that into another folder (like services)
 * 
 * Any Strings api specific logic can go in this folder
 */


// route is GET /api/strings/reverse/:str
// example: GET /api/strings/reverse/helloworld
router.get('/reverse/:str', (req, res) => {
    const str = req.params.str;
    res.json({str, reverse: stringService.reverse(str)}) // reverse string
})

// route is POST /api/strings/echo/:str
// example: POST /api/strings/echo/helloworld
// NOTE: this route needs auth to reach, because of guard
router.post('/echo/:str', guard, (req, res) => {
    res.json({echo: req.params.str}) // echo
})

module.exports = router;