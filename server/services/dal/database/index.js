const logger = require('../../logging');

module.exports.query = function (query) {
    logger.log(`Before query ${query}`);


    /**
     * A LOT of database packages on NPM run async,
     * so we will place a promise around this mock call
     * 
     * note: resolve, and reject are functions
     */

    return new Promise((resolve, reject) => {

        /**
         * this is a mock call that will wait 2 seconds and return mock data
         * 
         * most database packages will return a promise to you,
         * and then you can chain off that promise
         */
        try {
            setTimeout(() => {
                logger.log(`Query done ${query}`);

                // resolve, this will cause the promise to enter the .then callback
                resolve({name: 'Mock Name', id: 1});
            }, 2000);
        }catch (err) {

            // reject, this will cause the promise to enter the .catch callback
            reject(err);
        }
    });
}