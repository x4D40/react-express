module.exports = function(app) {
    app.get('/api', (req, res) => res.send('Testing!'));
}