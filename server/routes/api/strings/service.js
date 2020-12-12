const logger = require('../../../services/logging');

/**
 * This is an example of string api specific logic, this is simple enough to keep in the controller,
 * but this pattern can be used to pull more complex logic out of the controller
 */

module.exports.reverse = function (str) {
    logger.log(str);
    const reverse = str.split("").reverse().join("");
    logger.log(reverse);

    return reverse;
}