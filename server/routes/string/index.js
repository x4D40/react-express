const echo = require('./echo');
const reverse = require('./reverse');


// register all string related routes
module.exports = function(app) {
    echo(app); // register echo endpoint
    reverse(app); // register reverse endpoint
}