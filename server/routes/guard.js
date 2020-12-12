const logger = require('../services/logging');

/**
 * Simple authorization route guard,
 * As is this is NOT SECURE in anyway,
 * This should be replaced with your auth logic
 * 
 * @param req incoming HTTP request
 * @param res outgoing HTTP response
 * @param next next middleware (this is a function)
 */
module.exports = function (req, res, next) {

    /**
     * this is not secure in anyway,
     * it just checks that there is an authorization header set,
     * consider using JWT bearer tokens if real auth is needed
     */
    const auth = req.headers.authorization;

    if(auth) {
        next();
    } else {
        logger.log('Request was blocked by route guard, check server/routes/guard.js for info');
        res.status(401);
        res.end();
    }
}