const stringApi = require('./string');
const numbersApi = require('./numbers');

// put all api routes here
module.exports = function(app) {

    // all routes that start with /api will return json
    app.use('/api/*', function(req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        next();
    });

    stringApi(app); // register all string api endpoints
    numbersApi(app); // register all number api endpoints
}